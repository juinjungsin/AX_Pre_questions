# AX_PreQ

AX 컨설팅 사전 인터뷰를 위한 화이트 배경 HTML 설문 앱입니다.

## 기능

- 대표/직원 사전 인터뷰 질문 입력
- 파란색 굵은 필수 질문만 입력해도 제출 가능
- 업무 Pain Point, 자동화 후보, AI 워크플로우, AI 에이전트 과제 수집
- 작성 결과를 Markdown(`.md`)으로 변환
- 브라우저에서 선택한 본인 PC 폴더 안에 `submissions/` 폴더를 만들고 `.md` 저장
- Node 서버로 실행하면 앱 폴더의 `submissions/` 폴더에도 자동 저장
- SMTP 환경변수가 설정되어 있으면 `jongbin@gmail.com`으로 자동 발송
- 서버 없이 HTML만 열었을 때도 폴더 선택 저장 또는 `.md` 다운로드 가능
- 저장 후 기본 메일 앱 작성 화면 열기

## 실행

```bash
node server.js
```

브라우저에서 엽니다.

```text
http://localhost:4173
```

## 이메일 발송 설정

기본 사용 방식은 `작성 완료: 저장 및 발송` 버튼을 누른 뒤 열리는 메일 작성 화면에서 직접 보내는 것입니다.

- Outlook이 기본 메일 앱이면 Outlook 작성 화면이 열립니다.
- Gmail이 브라우저의 기본 메일 처리기로 설정되어 있으면 Gmail 작성 화면이 열립니다.
- 자동 발송이 아니라, 내용을 확인한 뒤 직접 보내는 방식입니다.

서버에서 SMTP로 직접 발송하려면 Gmail 앱 비밀번호를 만든 뒤 PowerShell에서 환경변수를 설정하고 서버를 실행합니다.

```powershell
$env:SMTP_USER="your-gmail-account@gmail.com"
$env:SMTP_PASS="your-gmail-app-password"
$env:MAIL_TO="jongbin@gmail.com"
node server.js
```

환경변수가 없으면 이메일은 발송되지 않고, Markdown 저장만 수행됩니다.

## 저장 위치

저장 방식은 두 가지입니다.

1. **브라우저 폴더 선택 저장**
   - 화면에서 `내 PC 저장 폴더 선택`을 누릅니다.
   - 선택한 폴더 안에 `submissions/` 폴더가 자동으로 만들어집니다.
   - 작성 완료 시 그 안에 `.md` 파일이 저장됩니다.

2. **Node 서버 저장**
   - `node server.js`로 실행한 뒤 `http://localhost:4173`으로 접속합니다.
   - 작성 완료 시 앱 폴더 안의 `submissions/`에도 저장됩니다.

Node 서버 저장의 정확한 위치는 아래 폴더입니다.

```text
AX_PreQ/submissions/
```

파일명 형식:

```text
YYYYMMDD_사전인터뷰_이름_역할.md
```

## 필수 입력 항목

필수 질문은 화면에서 파란색 굵은 글씨와 `*`로 표시됩니다.

- 작성일
- 인터뷰 대상
- 역할/직무
- 현재 역할을 산출물 기준으로 설명
- 최근 2주 안에 가장 시간이 많이 걸린 업무
- 업무 자료의 현재 위치
- 시간이 가장 많이 드는 반복 작업
- 좋은 결과와 나쁜 결과를 가르는 기준
- AI가 하루 30분을 줄여준다면 쓰고 싶은 업무
- 가장 먼저 자동화하고 싶은 업무
- Google Drive에 반드시 모아야 할 자료
