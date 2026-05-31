const questionSets = {
  role: [
    "현재 본인의 역할을 직책이 아니라 반복적으로 만들어내는 산출물 기준으로 설명하면 무엇인가요?",
    "매주 또는 매월 반드시 반복되는 업무는 무엇인가요?",
    "대표나 다른 팀에 정기적으로 보고하는 자료는 무엇인가요?",
    "본인이 만든 자료가 다음 사람에게 넘어갈 때 어떤 형태로 전달되나요?",
    "업무가 잘 끝났다고 판단하는 기준은 무엇인가요?"
  ],
  recent: [
    "최근 2주 안에 가장 시간이 많이 걸린 업무 하나를 골라주세요.",
    "그 업무는 어떤 요청에서 시작됐나요?",
    "처음 받은 자료는 무엇이었고 어디에 있었나요?",
    "중간에 추가로 찾아야 했던 자료는 무엇인가요?",
    "최종 산출물은 어떤 파일, 문서, 보고, 메시지였나요?",
    "그 업무를 다시 한다면 어느 단계가 가장 줄어들었으면 좋겠나요?"
  ],
  data: [
    "업무에 필요한 자료는 주로 어디에 있나요? Google Drive, 개인 PC, 카카오톡, 이메일, 엑셀, 외부 시스템 중 어디인가요?",
    "같은 자료를 다른 사람이 찾으려면 쉽게 찾을 수 있나요?",
    "파일명이나 폴더 규칙이 정해져 있나요?",
    "업무 기록이 문서로 남나요, 아니면 대화와 기억에 남나요?",
    "현재 Google Drive에 반드시 모아야 하는데 흩어져 있는 자료는 무엇인가요?",
    "이 업무를 Markdown .md 파일로 기록한다면 꼭 들어가야 할 항목은 무엇인가요?"
  ],
  pain: [
    "시간이 가장 많이 드는 반복 작업은 무엇인가요?",
    "사람이 직접 하지 않아도 될 것 같은데 아직 수기로 하는 일은 무엇인가요?",
    "자주 누락되는 자료나 빠지는 확인 항목은 무엇인가요?",
    "업무 중 '이건 매번 다시 설명한다'고 느끼는 내용은 무엇인가요?",
    "본인이 휴가이거나 퇴사하면 다른 사람이 바로 이어받기 어려운 업무는 무엇인가요?",
    "실수가 나면 비용, 리스크, 대표 의사결정에 영향을 주는 업무는 무엇인가요?"
  ],
  decision: [
    "이 업무에서 좋은 결과와 나쁜 결과를 가르는 기준은 무엇인가요?",
    "숫자로 보는 기준이 있나요? 예: 매출 하락률, 처리일수, 오류율, 비용 절감액",
    "정성적으로 보는 기준이 있나요? 예: 협업 가능성, 고객 반응, 실행 난이도, 리스크 수준",
    "어떤 조건이면 즉시 대표에게 보고해야 하나요?",
    "어떤 조건이면 진행 중단, 보류, 추가 확인이 필요한가요?"
  ],
  ai: [
    "AI가 하루에 30분을 줄여준다면 어떤 업무에 쓰고 싶나요?",
    "AI가 일주일에 반나절을 줄여준다면 어떤 업무가 가장 효과가 클까요?",
    "AI가 대신 초안을 만들어도 되는 업무는 무엇인가요?",
    "AI가 대신하면 안 되는 업무는 무엇인가요?",
    "AI가 답변할 때 반드시 근거를 보여줘야 하는 업무는 무엇인가요?",
    "AI가 자동으로 감지해줬으면 하는 이상 신호는 무엇인가요?",
    "AI가 매일 또는 매주 만들어주면 좋은 리포트는 무엇인가요?"
  ]
};

const questionHints = {
  "현재 본인의 역할을 직책이 아니라 반복적으로 만들어내는 산출물 기준으로 설명하면 무엇인가요?": "직책명보다 내가 매주 만드는 결과물을 적어주세요. 예: 매장 방문 리포트, 매출 정리표, 자료 요청 리스트, 대표 보고 초안.",
  "매주 또는 매월 반드시 반복되는 업무는 무엇인가요?": "정기적으로 꼭 하는 일을 적어주세요. 작아도 괜찮습니다. 예: 월마감, 주간회의 준비, 매장별 이슈 정리.",
  "대표나 다른 팀에 정기적으로 보고하는 자료는 무엇인가요?": "누구에게 어떤 자료를 보내는지 적어주세요. 예: 대표님께 주간 매출 요약, 운영팀에 클레임 현황.",
  "본인이 만든 자료가 다음 사람에게 넘어갈 때 어떤 형태로 전달되나요?": "파일, 카톡, 메일, 구두 설명 등 실제 전달 방식을 적어주세요.",
  "업무가 잘 끝났다고 판단하는 기준은 무엇인가요?": "내가 이 업무를 끝냈다고 느끼는 조건을 적어주세요. 예: 대표 승인, 누락자료 0건, 매장 조치 완료.",

  "최근 2주 안에 가장 시간이 많이 걸린 업무 하나를 골라주세요.": "최근에 오래 걸렸거나 다시 하기 싫었던 업무 하나만 떠올려 주세요.",
  "그 업무는 어떤 요청에서 시작됐나요?": "누가, 어떤 말이나 상황으로 일을 시작하게 했는지 적어주세요. 예: 리더 지시, 고객 문의, 회의 후속.",
  "처음 받은 자료는 무엇이었고 어디에 있었나요?": "처음 참고한 파일이나 메시지가 어디 있었는지 적어주세요. 예: 구글드라이브, 카톡방, 메일, 개인 PC.",
  "중간에 추가로 찾아야 했던 자료는 무엇인가요?": "일하다가 부족해서 다시 찾거나 요청한 자료를 적어주세요.",
  "최종 산출물은 어떤 파일, 문서, 보고, 메시지였나요?": "마지막에 만들어낸 결과물을 적어주세요. 예: 엑셀 파일, 문서, 슬라이드, 카톡 보고.",
  "그 업무를 다시 한다면 어느 단계가 가장 줄어들었으면 좋겠나요?": "가장 귀찮거나 오래 걸린 단계를 적어주세요. 예: 파일 찾기, 표 정리, 요약 작성.",

  "업무에 필요한 자료는 주로 어디에 있나요? Google Drive, 개인 PC, 카카오톡, 이메일, 엑셀, 외부 시스템 중 어디인가요?": "정답을 고르는 질문이 아닙니다. 실제로 자료를 찾으러 가는 장소를 모두 적어주세요.",
  "같은 자료를 다른 사람이 찾으려면 쉽게 찾을 수 있나요?": "내가 없어도 다른 사람이 찾을 수 있는지 생각해서 적어주세요.",
  "파일명이나 폴더 규칙이 정해져 있나요?": "파일 이름을 어떻게 붙이는지, 폴더 위치가 정해져 있는지 적어주세요.",
  "업무 기록이 문서로 남나요, 아니면 대화와 기억에 남나요?": "회의록, 문서, 시트로 남는지 아니면 카톡/구두로만 남는지 적어주세요.",
  "현재 Google Drive에 반드시 모아야 하는데 흩어져 있는 자료는 무엇인가요?": "AI가 보려면 한곳에 있어야 하는 자료를 적어주세요. 예: 매장 방문 기록, 계약 관련 자료, 매출 파일.",
  "이 업무를 Markdown .md 파일로 기록한다면 꼭 들어가야 할 항목은 무엇인가요?": "어렵게 생각하지 마세요. 매번 적어야 하는 제목을 쓰면 됩니다. 예: 날짜, 매장명, 이슈, 조치사항, 다음 액션.",

  "시간이 가장 많이 드는 반복 작업은 무엇인가요?": "자주 반복되는데 손이 많이 가는 일을 적어주세요. 예: 엑셀 취합, 자료 찾기, 보고서 문장 다듬기.",
  "사람이 직접 하지 않아도 될 것 같은데 아직 수기로 하는 일은 무엇인가요?": "복사/붙여넣기, 정리, 분류처럼 기계가 해도 될 것 같은 일을 적어주세요.",
  "자주 누락되는 자료나 빠지는 확인 항목은 무엇인가요?": "매번 빠져서 다시 확인하게 되는 항목을 적어주세요.",
  "업무 중 '이건 매번 다시 설명한다'고 느끼는 내용은 무엇인가요?": "반복해서 설명하는 규칙, 기준, 절차를 적어주세요. 이것은 AI 비서로 만들기 좋습니다.",
  "본인이 휴가이거나 퇴사하면 다른 사람이 바로 이어받기 어려운 업무는 무엇인가요?": "내 머릿속에만 있는 업무나 나만 아는 파일 위치를 적어주세요.",
  "실수가 나면 비용, 리스크, 대표 의사결정에 영향을 주는 업무는 무엇인가요?": "틀리면 큰 문제가 되는 일을 적어주세요. 예: 금액 계산, 계약 리스크, 매출 하락 판단.",

  "이 업무에서 좋은 결과와 나쁜 결과를 가르는 기준은 무엇인가요?": "이 업무가 잘됐는지 못됐는지 판단하는 기준을 적어주세요. 숫자도 좋고 느낌도 괜찮습니다.",
  "숫자로 보는 기준이 있나요? 예: 매출 하락률, 처리일수, 오류율, 비용 절감액": "기준으로 보는 숫자가 있다면 적어주세요. 정확한 공식이 없어도 됩니다.",
  "정성적으로 보는 기준이 있나요? 예: 협업 가능성, 고객 반응, 실행 난이도, 리스크 수준": "숫자로 표현하기 어렵지만 판단에 중요한 느낌이나 기준을 적어주세요.",
  "어떤 조건이면 즉시 대표에게 보고해야 하나요?": "바로 위로 올려야 하는 상황을 적어주세요. 예: 큰 클레임, 법적 리스크, 매출 급락.",
  "어떤 조건이면 진행 중단, 보류, 추가 확인이 필요한가요?": "일단 멈추고 확인해야 하는 기준을 적어주세요.",

  "AI가 하루에 30분을 줄여준다면 어떤 업무에 쓰고 싶나요?": "가장 먼저 덜어내고 싶은 작은 업무를 적어주세요.",
  "AI가 일주일에 반나절을 줄여준다면 어떤 업무가 가장 효과가 클까요?": "조금 큰 업무 중 시간이 크게 줄면 좋은 것을 적어주세요.",
  "AI가 대신 초안을 만들어도 되는 업무는 무엇인가요?": "사람이 검토한다는 전제로 AI가 먼저 써줘도 되는 것을 적어주세요. 예: 회의록, 보고서 초안.",
  "AI가 대신하면 안 되는 업무는 무엇인가요?": "AI가 결정하면 위험한 일을 적어주세요. 예: 최종 금액 확정, 법률 판단, 인사 평가.",
  "AI가 답변할 때 반드시 근거를 보여줘야 하는 업무는 무엇인가요?": "출처가 꼭 필요한 일을 적어주세요. 예: 계약서 내용, 매출 수치, 법률/회계 이슈.",
  "AI가 자동으로 감지해줬으면 하는 이상 신호는 무엇인가요?": "미리 알려주면 좋은 위험 신호를 적어주세요. 예: 매출 급락, 원가율 이상, 클레임 증가.",
  "AI가 매일 또는 매주 만들어주면 좋은 리포트는 무엇인가요?": "정기적으로 자동으로 받으면 좋은 보고서를 적어주세요."
};

const roleSpecificSets = {
  ma: [
    "\uC0C8\uB85C\uC6B4 \uC0AC\uC5C5 \uAE30\uD68C\uB098 \uD504\uB85C\uC81D\uD2B8\uAC00 \uB4E4\uC5B4\uC654\uC744 \uB54C \uCC98\uC74C \uD655\uC778\uD558\uB294 \uC815\uBCF4\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uAC80\uD1A0 \uB300\uC0C1\uC758 \uB9E4\uB825\uB3C4\uC640 \uC704\uD5D8\uB3C4\uB97C \uD310\uB2E8\uD560 \uB54C \uAF2D \uBCF4\uB294 \uAE30\uC900\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uAC80\uD1A0 \uACFC\uC815\uC5D0\uC11C \uC5EC\uB7EC \uBD80\uC11C\uB098 \uC678\uBD80 \uD30C\uD2B8\uB108\uC5D0\uAC8C \uBC18\uBCF5\uD574\uC11C \uC694\uCCAD\uD558\uB294 \uC790\uB8CC\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uC9C4\uD589 \uC911, \uBCF4\uB958, \uC911\uB2E8, \uC2B9\uC778 \uAC19\uC740 \uC0C1\uD0DC\uB294 \uC5B4\uB514\uC5D0 \uAE30\uB85D\uD558\uACE0 \uC5B4\uB5BB\uAC8C \uACF5\uC720\uD558\uB098\uC694?",
    "AI\uAC00 \uCD08\uAE30 \uAC80\uD1A0 \uBA54\uBAA8\uB97C \uB9CC\uB4E4\uC5B4\uC900\uB2E4\uBA74 \uBC18\uB4DC\uC2DC \uD3EC\uD568\uD574\uC57C \uD560 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?"
  ],
  finance: [
    "\uC22B\uC790 \uC790\uB8CC\uB97C \uBAA8\uC744 \uB54C \uAC00\uC7A5 \uC790\uC8FC \uD655\uC778\uD558\uB294 \uCD9C\uCC98\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uC6D4\uAC04 \uB610\uB294 \uC8FC\uAC04 \uBCF4\uACE0\uC5D0\uC11C \uBC18\uBCF5\uC801\uC73C\uB85C \uACC4\uC0B0\uD558\uAC70\uB098 \uBE44\uAD50\uD558\uB294 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uC22B\uC790\uAC00 \uC774\uC0C1\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uAE30\uC900\uC740 \uC5B4\uB5BB\uAC8C \uC815\uD574\uC838 \uC788\uB098\uC694?",
    "\uBCF4\uACE0 \uC804\uC5D0 \uC0AC\uB78C\uC774 \uBC18\uB4DC\uC2DC \uAC80\uD1A0\uD574\uC57C \uD558\uB294 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "AI\uAC00 \uC22B\uC790 \uC790\uB8CC\uB97C \uC815\uB9AC\uD574\uC900\uB2E4\uBA74 \uC5B4\uB5A4 \uD615\uD0DC\uC758 \uD45C\uB098 \uC694\uC57D\uC774 \uAC00\uC7A5 \uB3C4\uC6C0\uC774 \uB418\uB098\uC694?"
  ],
  ops: [
    "\uD604\uC7A5\uC774\uB098 \uACE0\uAC1D \uC811\uC810\uC5D0\uC11C \uBC18\uBCF5\uC801\uC73C\uB85C \uD655\uC778\uD558\uB294 \uCCB4\uD06C \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uBB38\uC81C\uAC00 \uC811\uC218\uB41C \uB4A4 \uC644\uB8CC\uB420 \uB54C\uAE4C\uC9C0 \uC0C1\uD0DC\uB97C \uC5B4\uB5BB\uAC8C \uCD94\uC801\uD558\uB098\uC694?",
    "\uBE44\uC2B7\uD55C \uBB38\uC81C\uAC00 \uBC18\uBCF5\uB420 \uB54C \uC6D0\uC778\uC744 \uCC3E\uB294 \uC21C\uC11C\uB294 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?",
    "\uD604\uC7A5 \uBC29\uBB38\uC774\uB098 \uC810\uAC80 \uC804 AI\uAC00 \uBBF8\uB9AC \uC815\uB9AC\uD574\uC8FC\uBA74 \uC88B\uC740 \uC815\uBCF4\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uC810\uAC80 \uD6C4 \uB9AC\uD3EC\uD2B8\uAC00 \uC790\uB3D9 \uC791\uC131\uB41C\uB2E4\uBA74 \uBC18\uB4DC\uC2DC \uB4E4\uC5B4\uAC00\uC57C \uD560 \uACB0\uB860\uACFC \uADFC\uAC70\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
  ],
  marketing: [
    "\uC2DC\uC7A5, \uACE0\uAC1D, \uACBD\uC7C1\uC0AC \uC815\uBCF4\uB97C \uC870\uC0AC\uD560 \uB54C \uC8FC\uB85C \uBCF4\uB294 \uCC44\uB110\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uCF58\uD150\uCE20\uB098 \uCEA0\uD398\uC778\uC758 \uC131\uACFC\uB97C \uD310\uB2E8\uD558\uB294 \uAE30\uC900\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uBE0C\uB79C\uB4DC \uD1A4\uC774\uB098 \uBA54\uC2DC\uC9C0\uB97C \uB9CC\uB4E4 \uB54C \uBC18\uB4DC\uC2DC \uC9C0\uCF1C\uC57C \uD558\uB294 \uAE30\uC900\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "AI\uAC00 \uC870\uC0AC \uC790\uB8CC\uB97C \uBE44\uAD50\uD45C\uB85C \uB9CC\uB4E4\uC5B4\uC900\uB2E4\uBA74 \uC5B4\uB5A4 \uD56D\uBAA9\uC774 \uD544\uC694\uD55C\uAC00\uC694?",
    "AI\uAC00 \uB9CC\uB4E0 \uBB38\uAD6C\uB098 \uC544\uC774\uB514\uC5B4\uC5D0\uC11C \uC0AC\uB78C\uC774 \uBC18\uB4DC\uC2DC \uD655\uC778\uD574\uC57C \uD560 \uC704\uD5D8 \uC694\uC18C\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
  ],
  pm: [
    "\uD68C\uC758, \uC694\uCCAD\uC0AC\uD56D, \uC758\uC0AC\uACB0\uC815, \uB9C8\uAC10\uC77C\uC740 \uD604\uC7AC \uC5B4\uB514\uC5D0 \uAE30\uB85D\uB418\uB098\uC694?",
    "\uB204\uAC00 \uBB34\uC5C7\uC744 \uC5B8\uC81C\uAE4C\uC9C0 \uD574\uC57C \uD558\uB294\uC9C0 \uB193\uCE58\uC9C0 \uC54A\uAE30 \uC704\uD574 \uC5B4\uB5A4 \uBC29\uC2DD\uC73C\uB85C \uD655\uC778\uD558\uB098\uC694?",
    "\uBC18\uBCF5\uC801\uC73C\uB85C \uB9AC\uB9C8\uC778\uB4DC\uD558\uAC70\uB098 \uCDE8\uD569\uD558\uB294 \uC5C5\uBB34\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uBB38\uC11C \uC591\uC2DD, \uD30C\uC77C\uBA85, \uD3F4\uB354 \uC704\uCE58\uAC00 \uB2EC\uB77C\uC11C \uC0DD\uAE30\uB294 \uBB38\uC81C\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "AI\uAC00 \uD68C\uC758\uB85D\uC774\uB098 \uC694\uCCAD\uC0AC\uD56D\uC744 \uC815\uB9AC\uD574\uC900\uB2E4\uBA74 \uC5B4\uB5A4 \uD544\uB4DC\uAC00 \uAF2D \uD544\uC694\uD55C\uAC00\uC694?"
  ],
  ceo: [
    "\uC870\uC9C1\uC5D0 AI\uB97C \uB3C4\uC785\uD588\uC744 \uB54C \uAC00\uC7A5 \uBA3C\uC800 \uBC14\uB00C\uC5B4\uC57C \uD558\uB294 \uC5C5\uBB34 \uBC29\uC2DD\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uC9C1\uC6D0\uB4E4\uC774 \uAC19\uC740 \uAE30\uC900\uC73C\uB85C \uBCF4\uACE0 \uD310\uB2E8\uD574\uC57C \uD558\uB294 \uD575\uC2EC \uC815\uBCF4\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uB300\uD45C\uB098 \uB9AC\uB354\uC5D0\uAC8C \uC62C\uB77C\uC624\uB294 \uBCF4\uACE0\uC5D0\uC11C \uAC00\uC7A5 \uC790\uC8FC \uBD80\uC871\uD55C \uC815\uBCF4\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uC9C1\uC6D0\uC5D0\uAC8C \uC704\uC784\uD574\uB3C4 \uB418\uB294 \uD310\uB2E8\uACFC \uBC18\uB4DC\uC2DC \uC2B9\uC778\uBC1B\uC544\uC57C \uD558\uB294 \uD310\uB2E8\uC740 \uC5B4\uB5BB\uAC8C \uAD6C\uBD84\uD558\uB098\uC694?",
    "\uC774\uBC88 \uAD50\uC721\uACFC \uCEE8\uC124\uD305\uC774 \uC131\uACF5\uD588\uB2E4\uACE0 \uD310\uB2E8\uD560 30\uC77C \uB4A4\uC758 \uBCC0\uD654\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
  ],
  custom: [
    "\uC774 \uC9C1\uBB34\uC5D0\uC11C \uBC18\uBCF5\uC801\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uC0B0\uCD9C\uBB3C\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uC5C5\uBB34\uB97C \uC2DC\uC791\uD560 \uB54C \uBC18\uB4DC\uC2DC \uD655\uC778\uD574\uC57C \uD558\uB294 \uC785\uB825 \uC790\uB8CC\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uC5C5\uBB34\uAC00 \uB05D\uB0AC\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uC644\uB8CC \uAE30\uC900\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "\uB2E4\uB978 \uC0AC\uB78C\uC774\uB098 \uBD80\uC11C\uC640 \uC8FC\uACE0\uBC1B\uB294 \uC815\uBCF4 \uC911 \uC790\uC8FC \uB9C9\uD788\uB294 \uC9C0\uC810\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
    "AI\uAC00 \uC774 \uC9C1\uBB34\uB97C \uB3C4\uC640\uC900\uB2E4\uBA74 \uAC00\uC7A5 \uBA3C\uC800 \uB9E1\uAE30\uACE0 \uC2F6\uC740 \uCD08\uC548, \uC815\uB9AC, \uD655\uC778 \uC5C5\uBB34\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
  ]
};

Object.values(roleSpecificSets).flat().forEach((question) => {
  if (!questionHints[question]) {
    questionHints[question] = "이 질문은 해당 역할에서 AI가 도울 수 있는 입력자료, 판단기준, 반복 산출물을 찾기 위한 질문입니다. 평소 일하는 순서대로 편하게 적어주세요.";
  }
});

const sectionTitles = {
  role: "1. 역할 요약과 반복 산출물",
  recent: "2. 최근 업무 복기",
  data: "3. 데이터와 파일 흐름",
  pain: "4. Pain Point",
  decision: "5. 판단 기준",
  ai: "6. AI 활용 기대",
  roleSpecific: "7. 역할별 추가 답변"
};

const requiredQuestions = new Set([
  "role_1",
  "recent_1",
  "data_1",
  "pain_1",
  "decision_1",
  "ai_1"
]);

const requiredFields = new Set([
  "date",
  "interviewee",
  "role",
  "topAutomation",
  "driveData"
]);

const MAIL_TO = "jongbin@gmail.com";
const DRAFT_STORAGE_KEY = "ax-preq-draft-v1";

const statusEl = document.querySelector("#saveStatus");
const form = document.querySelector("#preqForm");
const preview = document.querySelector("#preview");
const roleQuestionSet = document.querySelector("#roleQuestionSet");
const customRoleSetWrap = document.querySelector("#customRoleSetWrap");

function setStatus(text, type = "") {
  statusEl.textContent = text;
  statusEl.className = `status ${type}`.trim();
}

function renderQuestions(section, questions) {
  const container = document.querySelector(`[data-section="${section}"]`);
  container.innerHTML = "";
  questions.forEach((question, index) => {
    const fieldName = `${section}_${index + 1}`;
    const isRequired = requiredQuestions.has(fieldName);
    const wrapper = document.createElement("label");
    wrapper.className = isRequired ? "question requiredQuestion" : "question";
    const label = document.createElement("p");
    label.textContent = `${index + 1}. ${question}${isRequired ? " *" : ""}`;
    const hint = document.createElement("span");
    hint.className = "questionHint";
    hint.textContent = questionHints[question] || "평소 업무를 떠올려 편하게 적어주세요. 완벽한 문장일 필요는 없습니다.";
    const textarea = document.createElement("textarea");
    textarea.name = fieldName;
    textarea.rows = 3;
    textarea.dataset.question = question;
    if (isRequired) textarea.required = true;
    wrapper.append(label, hint, textarea);
    container.appendChild(wrapper);
  });
}

function selectedRoleQuestions() {
  return roleSpecificSets[roleQuestionSet.value] || roleSpecificSets.custom;
}

function updateRoleSetUI() {
  const isCustom = roleQuestionSet.value === "custom";
  customRoleSetWrap.hidden = !isCustom;
  const customField = form.elements.customRoleSet;
  if (customField) customField.required = isCustom;
}

function renderAllQuestions() {
  Object.entries(questionSets).forEach(([section, questions]) => renderQuestions(section, questions));
  updateRoleSetUI();
  renderQuestions("roleSpecific", selectedRoleQuestions());
}

function valueOf(name) {
  const field = form.elements[name];
  return field ? String(field.value || "").trim() : "";
}

function collectFormData() {
  const data = {};
  [...form.elements].forEach((field) => {
    if (!field.name) return;
    data[field.name] = field.value || "";
  });
  return data;
}

function applyFormData(data) {
  Object.entries(data || {}).forEach(([name, value]) => {
    const field = form.elements[name];
    if (field) field.value = value;
  });
}

function roleSetLabel() {
  const selected = roleQuestionSet.options[roleQuestionSet.selectedIndex]?.textContent || "-";
  if (roleQuestionSet.value !== "custom") return selected;
  return valueOf("customRoleSet") || "직접 입력";
}

function saveDraft(showMessage = false) {
  const payload = {
    savedAt: new Date().toISOString(),
    values: collectFormData()
  };
  localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
  if (showMessage) setStatus("임시저장 완료", "ok");
}

function loadDraft() {
  const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
  if (!raw) return false;

  try {
    const payload = JSON.parse(raw);
    applyFormData(payload.values);
    setStatus("임시저장 내용 불러옴", "ok");
    return true;
  } catch {
    localStorage.removeItem(DRAFT_STORAGE_KEY);
    return false;
  }
}

function resetDraft() {
  const confirmed = window.confirm("현재 작성 내용과 임시저장 내용을 모두 지우고 새로 작성할까요?");
  if (!confirmed) return;

  localStorage.removeItem(DRAFT_STORAGE_KEY);
  form.reset();
  form.elements.date.value = getLocalDateValue();
  renderAllQuestions();
  preview.hidden = true;
  preview.textContent = "";
  preview.classList.remove("successPreview");
  setStatus("새 작성 시작");
}

function answerBlock(section) {
  const fields = [...form.querySelectorAll(`[name^="${section}_"]`)];
  if (!fields.length) return "";

  const lines = [`## ${sectionTitles[section]}`, ""];
  fields.forEach((field, index) => {
    const answer = field.value.trim();
    lines.push(`### Q${index + 1}. ${field.dataset.question}`);
    lines.push(answer || "-");
    lines.push("");
  });
  return lines.join("\n");
}

function fieldBlock(title, entries) {
  const lines = [`## ${title}`, ""];
  entries.forEach(([label, name]) => {
    lines.push(`### ${label}`);
    lines.push(valueOf(name) || "-");
    lines.push("");
  });
  return lines.join("\n");
}

function buildMarkdown() {
  const date = valueOf("date") || getLocalDateValue();
  const interviewee = valueOf("interviewee") || "이름 미입력";
  const role = valueOf("role") || "역할 미입력";

  const parts = [
    `# AX 사전 인터뷰 - ${interviewee}`,
    "",
    `작성일: ${date}`,
    `인터뷰 대상: ${interviewee}`,
    `역할: ${role}`,
    `역할별 추가 질문 세트: ${roleSetLabel()}`,
    `소속/팀: ${valueOf("team") || "-"}`,
    `인터뷰어: ${valueOf("interviewer") || "-"}`,
    `인터뷰 방식: ${valueOf("interviewMethod") || "-"}`,
    "",
    "## 인터뷰 목적 메모",
    "",
    valueOf("interviewGoal") || "-",
    "",
    answerBlock("role"),
    answerBlock("recent"),
    answerBlock("data"),
    answerBlock("pain"),
    answerBlock("decision"),
    answerBlock("ai"),
    answerBlock("roleSpecific"),
    fieldBlock("8. 자동화·워크플로우·에이전트 후보", [
      ["가장 먼저 자동화하고 싶은 업무", "topAutomation"],
      ["AI가 하면 안 되는 업무", "doNotAutomate"],
      ["매주 자동 생성되면 좋은 리포트", "weeklyReport"],
      ["AI가 감지해야 하는 이상 신호", "alerts"],
      ["AI 에이전트 후보 상세", "agentCandidate"]
    ]),
    fieldBlock("9. Google Drive와 Markdown 표준화", [
      ["Google Drive에 반드시 모아야 할 자료", "driveData"],
      ["현재 흩어져 있는 자료 위치", "scatteredData"],
      ["필요한 .md 업무기록 양식", "mdTemplateNeed"],
      ["파일명/폴더명 규칙 제안", "namingRule"]
    ]),
    "## 10. 인터뷰 후 분석 메모",
    "",
    "### Entity",
    "-",
    "",
    "### Relationship",
    "-",
    "",
    "### Workflow",
    "-",
    "",
    "### Decision",
    "-",
    "",
    "### Data",
    "-",
    "",
    "### AI Opportunity",
    "-",
    "",
    "### Agent Candidate",
    "-",
    ""
  ];

  return parts.filter(Boolean).join("\n").replace(/\n{3,}/g, "\n\n");
}

function fileName() {
  const date = (valueOf("date") || getLocalDateValue()).replaceAll("-", "");
  const person = (valueOf("interviewee") || "unknown").replace(/[\\/:*?"<>|\s]+/g, "_");
  const role = (valueOf("role") || "role").replace(/[\\/:*?"<>|\s]+/g, "_");
  return `${date}_사전인터뷰_${person}_${role}.md`;
}

function downloadMarkdownContent(markdown, targetFileName = fileName()) {
  const blob = new Blob([markdown + "\n"], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = targetFileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return targetFileName;
}

function downloadMarkdown() {
  return downloadMarkdownContent(buildMarkdown());
}

async function saveMarkdownWithFilePicker(markdown) {
  if (!("showSaveFilePicker" in window)) return null;

  const fileHandle = await window.showSaveFilePicker({
    suggestedName: fileName(),
    types: [
      {
        description: "Markdown 문서",
        accept: { "text/markdown": [".md"] }
      }
    ]
  });
  const writable = await fileHandle.createWritable();
  await writable.write(markdown + "\n");
  await writable.close();

  return fileHandle.name;
}

function openMailDraft(markdown, savedPath) {
  const subject = `[AX 사전인터뷰] ${valueOf("interviewee") || "이름미상"} / ${valueOf("role") || "역할미상"}`;
  const savedLine = savedPath ? `저장 파일명: ${savedPath}\n` : "";
  const body = [
    "AX 사전 인터뷰 응답 파일을 전달드립니다.",
    "",
    savedLine + "작성 완료된 .md 파일을 이 메일에 첨부해서 발송해주세요.",
    "",
    "감사합니다."
  ].join("\n");

  const mailto = `mailto:${encodeURIComponent(MAIL_TO)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

async function shareMarkdownFile(markdown, savedFileName) {
  if (!navigator.share || !window.File) return false;

  const attachment = new File([markdown + "\n"], savedFileName || fileName(), {
    type: "text/markdown"
  });

  if (navigator.canShare && !navigator.canShare({ files: [attachment] })) {
    return false;
  }

  try {
    await navigator.share({
      title: `[AX 사전인터뷰] ${valueOf("interviewee") || "이름미상"}`,
      text: "AX 사전 인터뷰 응답 파일입니다. Gmail 또는 Outlook을 선택해 발송해주세요.",
      files: [attachment]
    });
    return true;
  } catch (error) {
    return error.name === "AbortError";
  }
}

function showSuccessMessage(savedFileName, usedShareSheet) {
  preview.hidden = false;
  preview.classList.add("successPreview");
  const lines = [`내 PC 저장 완료: ${savedFileName || fileName()}`, ""];

  if (usedShareSheet) {
    lines.push("파일 첨부 공유창을 열었습니다. Gmail이나 Outlook을 선택해 발송해주세요.");
  } else {
    lines.push("이 브라우저에서는 파일 자동 첨부가 지원되지 않아 메일 작성 화면을 열었습니다.");
    lines.push("저장된 .md 파일을 메일에 직접 첨부한 뒤 발송해주세요.");
    lines.push(`메일 작성 링크: mailto:${MAIL_TO}`);
  }

  preview.textContent = lines.join("\n");
}

function showNoticeMessage(lines) {
  preview.hidden = false;
  preview.classList.remove("successPreview");
  preview.textContent = lines.join("\n");
}

async function submitForm(event) {
  event.preventDefault();
  if (!validateRequiredFields()) return;

  const markdown = buildMarkdown();
  setStatus("내 PC에 저장 중...");
  let savedFileName = null;

  try {
    savedFileName = await saveMarkdownWithFilePicker(markdown);
    if (!savedFileName) {
      savedFileName = downloadMarkdownContent(markdown);
    }
  } catch (error) {
    if (error.name === "AbortError") {
      setStatus("파일 저장 취소", "error");
      showNoticeMessage([
        "파일 저장을 취소했습니다.",
        "",
        "작성 내용은 현재 화면 입력칸에 그대로 남아 있습니다.",
        "다시 저장하려면 '작성 완료: 저장 및 발송'을 누르거나 '.md 다운로드'를 사용하세요."
      ]);
      return;
    }
    setStatus("내 PC 파일 저장 실패", "error");
    showNoticeMessage([
      "내 PC에 .md 파일을 저장하지 못했습니다.",
      error.message,
      "",
      "대안:",
      "1. '.md 다운로드' 버튼으로 파일을 직접 저장하세요.",
      "2. Chrome 또는 Edge 최신 버전에서 다시 시도하세요."
    ]);
    return;
  }

  const shared = await shareMarkdownFile(markdown, savedFileName);
  if (!shared) {
    openMailDraft(markdown, savedFileName);
  }
  setStatus(shared ? "저장 완료 / 파일 첨부 공유창 열림" : "저장 완료 / 메일 창에서 파일 첨부 후 발송", "ok");
  showSuccessMessage(savedFileName, shared);
  saveDraft(false);
}

function validateRequiredFields() {
  const missing = [];
  [...requiredFields, ...requiredQuestions].forEach((name) => {
    const field = form.elements[name];
    if (field && !String(field.value || "").trim()) {
      missing.push(field);
    }
  });

  if (!missing.length) return true;

  setStatus("필수 질문을 확인하세요", "error");
  const first = missing[0];
  first.focus();
  if (typeof first.reportValidity === "function") {
    first.reportValidity();
  }
  return false;
}

function getLocalDateValue() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

renderAllQuestions();
form.elements.date.value = getLocalDateValue();
if (loadDraft()) {
  renderAllQuestions();
  applyFormData(JSON.parse(localStorage.getItem(DRAFT_STORAGE_KEY)).values);
}

roleQuestionSet.addEventListener("change", () => {
  updateRoleSetUI();
  renderQuestions("roleSpecific", selectedRoleQuestions());
  saveDraft(false);
});

form.addEventListener("input", () => saveDraft(false));
form.addEventListener("change", () => saveDraft(false));

document.querySelector("#previewBtn").addEventListener("click", () => {
  preview.hidden = !preview.hidden;
  preview.classList.remove("successPreview");
  preview.textContent = buildMarkdown();
});

document.querySelector("#draftSaveBtn").addEventListener("click", () => saveDraft(true));
document.querySelector("#resetDraftBtn").addEventListener("click", resetDraft);
document.querySelector("#downloadBtn").addEventListener("click", downloadMarkdown);
form.addEventListener("submit", submitForm);
