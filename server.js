const http = require("http");
const fs = require("fs");
const path = require("path");
const tls = require("tls");

const PORT = Number(process.env.PORT || 4173);
const MAIL_TO = process.env.MAIL_TO || "jongbin@gmail.com";
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";

const rootDir = __dirname;
const submissionsDir = path.join(rootDir, "submissions");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png"
};

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

function safeFileName(value) {
  return String(value || "interview")
    .normalize("NFKC")
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 120);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 5 * 1024 * 1024) {
        reject(new Error("Request body is too large."));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function smtpCommand(socket, command, expectedPrefix) {
  return new Promise((resolve, reject) => {
    const onData = (chunk) => {
      const response = chunk.toString("utf8");
      if (response.startsWith(expectedPrefix)) {
        socket.off("data", onData);
        resolve(response);
      } else if (/^[45]\d\d/.test(response)) {
        socket.off("data", onData);
        reject(new Error(response.trim()));
      }
    };
    socket.on("data", onData);
    if (command) socket.write(command + "\r\n");
  });
}

function encodeHeader(value) {
  return "=?UTF-8?B?" + Buffer.from(value, "utf8").toString("base64") + "?=";
}

async function sendMail({ to, subject, body }) {
  if (!SMTP_USER || !SMTP_PASS) {
    return { sent: false, reason: "SMTP_USER and SMTP_PASS are not configured." };
  }

  const socket = tls.connect({
    host: SMTP_HOST,
    port: SMTP_PORT,
    servername: SMTP_HOST
  });

  await new Promise((resolve, reject) => {
    socket.once("secureConnect", resolve);
    socket.once("error", reject);
  });

  try {
    await smtpCommand(socket, null, "220");
    await smtpCommand(socket, `EHLO localhost`, "250");
    await smtpCommand(socket, "AUTH LOGIN", "334");
    await smtpCommand(socket, Buffer.from(SMTP_USER).toString("base64"), "334");
    await smtpCommand(socket, Buffer.from(SMTP_PASS).toString("base64"), "235");
    await smtpCommand(socket, `MAIL FROM:<${SMTP_USER}>`, "250");
    await smtpCommand(socket, `RCPT TO:<${to}>`, "250");
    await smtpCommand(socket, "DATA", "354");

    const message = [
      `From: ${SMTP_USER}`,
      `To: ${to}`,
      `Subject: ${encodeHeader(subject)}`,
      "MIME-Version: 1.0",
      "Content-Type: text/markdown; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      "",
      Buffer.from(body, "utf8").toString("base64").replace(/(.{76})/g, "$1\r\n"),
      "."
    ].join("\r\n");

    await smtpCommand(socket, message, "250");
    await smtpCommand(socket, "QUIT", "221");
    return { sent: true };
  } finally {
    socket.end();
  }
}

async function handleSubmit(req, res) {
  try {
    const rawBody = await readBody(req);
    const payload = JSON.parse(rawBody || "{}");
    const markdown = String(payload.markdown || "").trim();
    const interviewee = safeFileName(payload.interviewee || "unknown");
    const role = safeFileName(payload.role || "role");
    const date = safeFileName(payload.date || new Date().toISOString().slice(0, 10).replace(/-/g, ""));

    if (!markdown) {
      sendJson(res, 400, { ok: false, error: "Markdown content is required." });
      return;
    }

    fs.mkdirSync(submissionsDir, { recursive: true });
    const fileName = `${date}_사전인터뷰_${interviewee}_${role}.md`;
    const filePath = path.join(submissionsDir, fileName);
    fs.writeFileSync(filePath, markdown + "\n", "utf8");

    let mail = { sent: false, reason: "Email was not attempted." };
    try {
      mail = await sendMail({
        to: MAIL_TO,
        subject: `[AX 사전인터뷰] ${payload.interviewee || "이름미상"} / ${payload.role || "역할미상"}`,
        body: markdown
      });
    } catch (error) {
      mail = { sent: false, reason: error.message };
    }

    sendJson(res, 200, {
      ok: true,
      fileName,
      filePath,
      mail
    });
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error.message });
  }
}

function serveStatic(req, res) {
  const requestPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const relativePath = requestPath === "/" ? "index.html" : requestPath.slice(1);
  const filePath = path.resolve(rootDir, relativePath);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    const contentType = mimeTypes[path.extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    handleSubmit(req, res);
    return;
  }

  if (req.method === "GET") {
    serveStatic(req, res);
    return;
  }

  res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Method not allowed");
});

server.listen(PORT, () => {
  console.log(`AX_PreQ is running at http://localhost:${PORT}`);
  console.log(`Markdown submissions will be saved to ${submissionsDir}`);
  if (!SMTP_USER || !SMTP_PASS) {
    console.log("Email sending is disabled. Set SMTP_USER and SMTP_PASS to enable it.");
  } else {
    console.log(`Email sending is enabled. Recipient: ${MAIL_TO}`);
  }
});
