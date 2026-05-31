# AX_PreQ

AX 컨설팅 사전 인터뷰를 위한 화이트 배경 HTML 설문 앱입니다.

## 기능

- 대표/직원 사전 인터뷰 질문 입력
- 파란색 굵은 필수 질문만 입력해도 제출 가능
- 업무 Pain Point, 자동화 후보, AI 워크플로우, AI 에이전트 과제 수집
- 작성 결과를 Markdown(`.md`)으로 변환
- 로컬 서버의 `submissions/` 폴더에 자동 저장
- SMTP 환경변수가 설정되어 있으면 `jongbin@gmail.com`으로 자동 발송
- 서버 없이 HTML만 열었을 때도 `.md` 다운로드 가능

## 실행

```bash
node server.js
```

브라우저에서 엽니다.

```text
http://localhost:4173
```

## 이메일 발송 설정

Gmail SMTP를 사용하려면 Gmail 앱 비밀번호를 만든 뒤 PowerShell에서 환경변수를 설정하고 서버를 실행합니다.

```powershell
$env:SMTP_USER="your-gmail-account@gmail.com"
$env:SMTP_PASS="your-gmail-app-password"
$env:MAIL_TO="jongbin@gmail.com"
node server.js
```

환경변수가 없으면 이메일은 발송되지 않고, Markdown 저장만 수행됩니다.

## 저장 위치

제출된 Markdown은 아래 폴더에 저장됩니다.

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
