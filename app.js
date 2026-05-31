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
    "숫자로 보는 기준이 있나요? 예: 원가율, 매출 하락률, 가맹점 수, 처리일수",
    "정성적으로 보는 기준이 있나요? 예: 대표 성향, 협업 가능성, 브랜드 감각, 점주 반응",
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
  "그 업무는 어떤 요청에서 시작됐나요?": "누가, 어떤 말이나 상황으로 일을 시작하게 했는지 적어주세요. 예: 대표 지시, 가맹점 문의, 회의 후속.",
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
  "숫자로 보는 기준이 있나요? 예: 원가율, 매출 하락률, 가맹점 수, 처리일수": "기준으로 보는 숫자가 있다면 적어주세요. 정확한 공식이 없어도 됩니다.",
  "정성적으로 보는 기준이 있나요? 예: 대표 성향, 협업 가능성, 브랜드 감각, 점주 반응": "숫자로 표현하기 어렵지만 판단에 중요한 느낌이나 기준을 적어주세요.",
  "어떤 조건이면 즉시 대표에게 보고해야 하나요?": "바로 위로 올려야 하는 상황을 적어주세요. 예: 큰 클레임, 법적 리스크, 매출 급락.",
  "어떤 조건이면 진행 중단, 보류, 추가 확인이 필요한가요?": "일단 멈추고 확인해야 하는 기준을 적어주세요.",

  "AI가 하루에 30분을 줄여준다면 어떤 업무에 쓰고 싶나요?": "가장 먼저 덜어내고 싶은 작은 업무를 적어주세요.",
  "AI가 일주일에 반나절을 줄여준다면 어떤 업무가 가장 효과가 클까요?": "조금 큰 업무 중 시간이 크게 줄면 좋은 것을 적어주세요.",
  "AI가 대신 초안을 만들어도 되는 업무는 무엇인가요?": "사람이 검토한다는 전제로 AI가 먼저 써줘도 되는 것을 적어주세요. 예: 회의록, 보고서 초안.",
  "AI가 대신하면 안 되는 업무는 무엇인가요?": "AI가 결정하면 위험한 일을 적어주세요. 예: 최종 금액 확정, 법률 판단, 인사 평가.",
  "AI가 답변할 때 반드시 근거를 보여줘야 하는 업무는 무엇인가요?": "출처가 꼭 필요한 일을 적어주세요. 예: 계약서 내용, 매출 수치, 법률/회계 이슈.",
  "AI가 자동으로 감지해줬으면 하는 이상 신호는 무엇인가요?": "미리 알려주면 좋은 위험 신호를 적어주세요. 예: 매출 급락, 원가율 이상, 클레임 증가.",
  "AI가 매일 또는 매주 만들어주면 좋은 리포트는 무엇인가요?": "정기적으로 자동으로 받으면 좋은 보고서를 적어주세요.",

  "인수 후보 브랜드가 들어오면 첫날 무엇부터 확인하나요?": "처음 보는 브랜드에서 가장 먼저 보는 항목을 적어주세요.",
  "자료 요청 리스트는 어떻게 만들고, 누가 관리하나요?": "요청자료 목록을 만드는 방식과 관리자를 적어주세요.",
  "후보 브랜드별 진행 상태는 어디에 기록하나요?": "진행 중, 보류, 완료 같은 상태를 어디에 적는지 알려주세요.",
  "NDA 이후 자료 작성이 지연되는 가장 큰 이유는 무엇인가요?": "자료가 늦어지는 현실적인 이유를 적어주세요.",
  "실사 Q&A에서 답변 출처를 어떻게 연결하나요?": "질문에 대한 답이 어떤 파일에서 나왔는지 표시하는 방식을 적어주세요.",
  "추가 질문서는 누가 어떤 기준으로 작성하나요?": "추가로 물어볼 내용을 정하는 기준을 적어주세요.",
  "인수 후보 간 비교표가 있다면 어떤 항목이 들어가야 하나요?": "브랜드끼리 비교할 때 필요한 칸 제목을 적어주세요.",
  "AI가 자동으로 만들어주면 좋은 것은 자료 요청서, 리스크 요약, 대표 보고, 일정 추적 중 무엇인가요?": "가장 도움이 될 자동 산출물을 골라 적어주세요.",

  "매출, 원가, 사입, 정산 자료는 각각 어디서 나오나요?": "각 숫자의 출처 시스템이나 파일을 적어주세요.",
  "데이터 형식이 매번 같은가요, 매장/브랜드마다 다른가요?": "파일 양식이 통일되어 있는지, 매번 다른지 적어주세요.",
  "월마감 또는 정산에서 가장 시간이 오래 걸리는 단계는 무엇인가요?": "마감 업무에서 제일 오래 걸리는 부분을 적어주세요.",
  "이상치로 봐야 하는 숫자 기준은 무엇인가요?": "정상 범위를 벗어났다고 보는 기준을 적어주세요.",
  "AI가 자동으로 찾아줬으면 하는 오류는 무엇인가요?": "계산 오류, 누락, 중복처럼 자동으로 잡아줬으면 하는 것을 적어주세요.",
  "회계사에게 넘기기 전에 내부에서 먼저 확인해야 하는 항목은 무엇인가요?": "외부 전문가에게 넘기기 전 내부 체크리스트를 적어주세요.",
  "대표 보고용 재무 요약은 어떤 형식이 가장 좋나요?": "표, 그래프, 한 문단 요약 등 보기 좋은 형식을 적어주세요.",
  "숫자 분석에서 AI가 절대 단정하면 안 되는 영역은 무엇인가요?": "AI가 추정하면 위험한 숫자나 판단을 적어주세요.",

  "매장 방문 전 어떤 자료를 확인하나요?": "방문 전에 보는 매출, 클레임, 이전 방문 기록 등을 적어주세요.",
  "방문 후 기록은 어디에 남기나요?": "방문 결과를 적는 위치를 알려주세요.",
  "가맹점 이슈는 접수, 처리, 완료가 어떻게 추적되나요?": "이슈가 들어오고 끝날 때까지의 흐름을 적어주세요.",
  "점주 VOC나 클레임은 어떤 기준으로 분류하나요?": "문의, 불만, 요청, 긴급 같은 분류 기준을 적어주세요.",
  "매출 하락 매장을 발견하면 어떤 순서로 원인을 확인하나요?": "매출이 떨어졌을 때 확인하는 순서를 적어주세요.",
  "점포 등급이나 방문 주기는 어떤 기준으로 정하나요?": "어떤 매장을 자주 가고 덜 가는지 기준을 적어주세요.",
  "AI가 방문 전 브리핑을 만들어준다면 어떤 내용이 필요하나요?": "방문 전에 미리 받아보면 좋은 요약 정보를 적어주세요.",
  "AI가 방문 후 리포트를 만들어준다면 어떤 양식이어야 하나요?": "방문 후 자동 리포트에 들어갈 항목을 적어주세요.",

  "경쟁 브랜드 조사는 어떤 주기로 하나요?": "매주, 매월, 필요할 때 등 조사 주기를 적어주세요.",
  "시장 트렌드 자료는 어디서 찾나요?": "뉴스, 블로그, 유튜브, 리포트 등 주로 보는 곳을 적어주세요.",
  "콘텐츠나 캠페인 성과는 어떤 지표로 판단하나요?": "조회수, 매출, 문의, 댓글 등 보는 기준을 적어주세요.",
  "백채김치찌개 브랜드 운영에서 반복적으로 만드는 자료는 무엇인가요?": "정기적으로 만드는 마케팅/브랜드 자료를 적어주세요.",
  "신규 인수 브랜드를 볼 때 브랜드 감각이나 소구점은 어떻게 평가하나요?": "좋은 브랜드라고 느끼는 포인트를 적어주세요.",
  "AI가 경쟁사 페이지를 수집하고 비교표를 만들면 어떤 항목이 필요하나요?": "메뉴, 가격, 매장 수, 가맹 조건 등 비교할 칸을 적어주세요.",
  "브랜드 리포지셔닝 아이디어를 만들 때 반드시 지켜야 할 기준은 무엇인가요?": "브랜드를 바꿀 때 건드리면 안 되는 원칙을 적어주세요.",
  "AI가 만든 마케팅 문구에서 가장 경계해야 할 점은 무엇인가요?": "과장, 톤앤매너, 법적 표현 등 조심할 점을 적어주세요.",

  "회의록, 일정, 요청사항, 의사결정은 어디에 남나요?": "회의 후 결정사항이 어디에 기록되는지 적어주세요.",
  "누가 무엇을 언제까지 해야 하는지 추적하는 도구가 있나요?": "액션아이템 관리 방식이 있는지 알려주세요.",
  "반복적으로 리마인드하는 업무는 무엇인가요?": "매번 다시 알려줘야 하는 일을 적어주세요.",
  "문서 양식이나 파일명 규칙이 지켜지지 않아 생기는 문제는 무엇인가요?": "파일을 못 찾거나 버전이 헷갈린 사례를 적어주세요.",
  "AI가 회의록에서 Action Item을 자동 추출하면 어떤 필드가 필요하나요?": "담당자, 마감일, 할 일, 상태처럼 필요한 칸을 적어주세요.",
  "Google Drive 폴더 구조를 정리한다면 가장 먼저 손볼 곳은 어디인가요?": "가장 헷갈리는 폴더나 먼저 정리할 위치를 적어주세요.",

  "우리 조직에서 AI를 도입하는 최종 목적은 무엇인가요?": "대표 관점에서 AI 도입으로 꼭 달성하고 싶은 결과를 적어주세요.",
  "현재 대표님만 보고 판단하는 정보 중 직원들도 같은 기준으로 볼 수 있어야 하는 것은 무엇인가요?": "직원들도 같은 기준으로 봐야 위임 가능한 정보를 적어주세요.",
  "최근 만든 대시보드는 어떤 문제를 해결하기 위해 만들었나요?": "대시보드를 만든 이유와 보고 싶었던 답을 적어주세요.",
  "신규 인수 후보를 볼 때 첫 10분 안에 확인하는 기준은 무엇인가요?": "처음 10분 안에 보는 핵심 기준을 적어주세요.",
  "인수 후보에서 즉시 탈락시키는 신호는 무엇인가요?": "더 볼 필요 없다고 판단하는 위험 신호를 적어주세요.",
  "직원들이 스스로 판단해도 되는 영역과 대표 승인 없이는 안 되는 영역은 어떻게 나뉘나요?": "위임 가능한 일과 반드시 승인받아야 하는 일을 구분해 주세요.",
  "AI가 들어오면 직원들에게 새로 위임하고 싶은 업무는 무엇인가요?": "AI 도움을 전제로 직원들이 맡아주면 좋은 일을 적어주세요.",
  "30일 후 이번 교육이 효과 있었다고 판단할 기준은 무엇인가요?": "교육 후 무엇이 바뀌면 성공이라고 볼지 적어주세요."
};

const roleSpecificSets = {
  ma: [
    "인수 후보 브랜드가 들어오면 첫날 무엇부터 확인하나요?",
    "자료 요청 리스트는 어떻게 만들고, 누가 관리하나요?",
    "후보 브랜드별 진행 상태는 어디에 기록하나요?",
    "NDA 이후 자료 작성이 지연되는 가장 큰 이유는 무엇인가요?",
    "실사 Q&A에서 답변 출처를 어떻게 연결하나요?",
    "추가 질문서는 누가 어떤 기준으로 작성하나요?",
    "인수 후보 간 비교표가 있다면 어떤 항목이 들어가야 하나요?",
    "AI가 자동으로 만들어주면 좋은 것은 자료 요청서, 리스크 요약, 대표 보고, 일정 추적 중 무엇인가요?"
  ],
  finance: [
    "매출, 원가, 사입, 정산 자료는 각각 어디서 나오나요?",
    "데이터 형식이 매번 같은가요, 매장/브랜드마다 다른가요?",
    "월마감 또는 정산에서 가장 시간이 오래 걸리는 단계는 무엇인가요?",
    "이상치로 봐야 하는 숫자 기준은 무엇인가요?",
    "AI가 자동으로 찾아줬으면 하는 오류는 무엇인가요?",
    "회계사에게 넘기기 전에 내부에서 먼저 확인해야 하는 항목은 무엇인가요?",
    "대표 보고용 재무 요약은 어떤 형식이 가장 좋나요?",
    "숫자 분석에서 AI가 절대 단정하면 안 되는 영역은 무엇인가요?"
  ],
  ops: [
    "매장 방문 전 어떤 자료를 확인하나요?",
    "방문 후 기록은 어디에 남기나요?",
    "가맹점 이슈는 접수, 처리, 완료가 어떻게 추적되나요?",
    "점주 VOC나 클레임은 어떤 기준으로 분류하나요?",
    "매출 하락 매장을 발견하면 어떤 순서로 원인을 확인하나요?",
    "점포 등급이나 방문 주기는 어떤 기준으로 정하나요?",
    "AI가 방문 전 브리핑을 만들어준다면 어떤 내용이 필요하나요?",
    "AI가 방문 후 리포트를 만들어준다면 어떤 양식이어야 하나요?"
  ],
  marketing: [
    "경쟁 브랜드 조사는 어떤 주기로 하나요?",
    "시장 트렌드 자료는 어디서 찾나요?",
    "콘텐츠나 캠페인 성과는 어떤 지표로 판단하나요?",
    "백채김치찌개 브랜드 운영에서 반복적으로 만드는 자료는 무엇인가요?",
    "신규 인수 브랜드를 볼 때 브랜드 감각이나 소구점은 어떻게 평가하나요?",
    "AI가 경쟁사 페이지를 수집하고 비교표를 만들면 어떤 항목이 필요하나요?",
    "브랜드 리포지셔닝 아이디어를 만들 때 반드시 지켜야 할 기준은 무엇인가요?",
    "AI가 만든 마케팅 문구에서 가장 경계해야 할 점은 무엇인가요?"
  ],
  pm: [
    "회의록, 일정, 요청사항, 의사결정은 어디에 남나요?",
    "누가 무엇을 언제까지 해야 하는지 추적하는 도구가 있나요?",
    "반복적으로 리마인드하는 업무는 무엇인가요?",
    "문서 양식이나 파일명 규칙이 지켜지지 않아 생기는 문제는 무엇인가요?",
    "AI가 회의록에서 Action Item을 자동 추출하면 어떤 필드가 필요하나요?",
    "Google Drive 폴더 구조를 정리한다면 가장 먼저 손볼 곳은 어디인가요?"
  ],
  ceo: [
    "우리 조직에서 AI를 도입하는 최종 목적은 무엇인가요?",
    "현재 대표님만 보고 판단하는 정보 중 직원들도 같은 기준으로 볼 수 있어야 하는 것은 무엇인가요?",
    "최근 만든 대시보드는 어떤 문제를 해결하기 위해 만들었나요?",
    "신규 인수 후보를 볼 때 첫 10분 안에 확인하는 기준은 무엇인가요?",
    "인수 후보에서 즉시 탈락시키는 신호는 무엇인가요?",
    "직원들이 스스로 판단해도 되는 영역과 대표 승인 없이는 안 되는 영역은 어떻게 나뉘나요?",
    "AI가 들어오면 직원들에게 새로 위임하고 싶은 업무는 무엇인가요?",
    "30일 후 이번 교육이 효과 있었다고 판단할 기준은 무엇인가요?"
  ]
};

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

const statusEl = document.querySelector("#saveStatus");
const form = document.querySelector("#preqForm");
const preview = document.querySelector("#preview");
const roleQuestionSet = document.querySelector("#roleQuestionSet");
let selectedDirectoryHandle = null;

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

function renderAllQuestions() {
  Object.entries(questionSets).forEach(([section, questions]) => renderQuestions(section, questions));
  renderQuestions("roleSpecific", roleSpecificSets[roleQuestionSet.value]);
}

function valueOf(name) {
  const field = form.elements[name];
  return field ? String(field.value || "").trim() : "";
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
  const date = valueOf("date") || new Date().toISOString().slice(0, 10);
  const interviewee = valueOf("interviewee") || "이름 미입력";
  const role = valueOf("role") || "역할 미입력";

  const parts = [
    `# AX 사전 인터뷰 - ${interviewee}`,
    "",
    `작성일: ${date}`,
    `인터뷰 대상: ${interviewee}`,
    `역할: ${role}`,
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
  const date = (valueOf("date") || new Date().toISOString().slice(0, 10)).replaceAll("-", "");
  const person = (valueOf("interviewee") || "unknown").replace(/[\\/:*?"<>|\s]+/g, "_");
  const role = (valueOf("role") || "role").replace(/[\\/:*?"<>|\s]+/g, "_");
  return `${date}_사전인터뷰_${person}_${role}.md`;
}

function downloadMarkdown() {
  const blob = new Blob([buildMarkdown() + "\n"], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName();
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function pickSaveFolder() {
  if (!("showDirectoryPicker" in window)) {
    setStatus("이 브라우저는 폴더 직접 저장을 지원하지 않습니다", "error");
    preview.hidden = false;
    preview.textContent = [
      "현재 브라우저에서는 폴더 선택 저장을 지원하지 않습니다.",
      "",
      "대안:",
      "1. Chrome 또는 Edge 최신 버전에서 다시 열기",
      "2. node server.js로 실행 후 http://localhost:4173 접속",
      "3. .md 다운로드 버튼으로 파일 저장"
    ].join("\n");
    return;
  }

  try {
    selectedDirectoryHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    await selectedDirectoryHandle.getDirectoryHandle("submissions", { create: true });
    setStatus("저장 폴더 선택 완료", "ok");
  } catch (error) {
    if (error.name === "AbortError") {
      setStatus("저장 폴더 선택 취소");
      return;
    }
    setStatus("저장 폴더 선택 실패", "error");
    preview.hidden = false;
    preview.textContent = `저장 폴더를 선택하지 못했습니다.\n${error.message}`;
  }
}

async function saveMarkdownToPickedFolder(markdown) {
  if (!selectedDirectoryHandle) return null;

  const submissionsHandle = await selectedDirectoryHandle.getDirectoryHandle("submissions", { create: true });
  const fileHandle = await submissionsHandle.getFileHandle(fileName(), { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(markdown + "\n");
  await writable.close();

  return `${selectedDirectoryHandle.name}/submissions/${fileName()}`;
}

async function submitForm(event) {
  event.preventDefault();
  if (!validateRequiredFields()) return;

  const markdown = buildMarkdown();
  setStatus("저장/발송 중...");
  let pickedFolderPath = null;

  try {
    pickedFolderPath = await saveMarkdownToPickedFolder(markdown);
  } catch (error) {
    setStatus("선택한 폴더 저장 실패", "error");
    preview.hidden = false;
    preview.textContent = [
      "선택한 폴더에 저장하지 못했습니다.",
      error.message,
      "",
      "브라우저 권한이 끊겼을 수 있습니다. '내 PC 저장 폴더 선택'을 다시 눌러주세요.",
      "",
      markdown
    ].join("\n");
    return;
  }

  try {
    const response = await fetch("/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: valueOf("date").replaceAll("-", ""),
        interviewee: valueOf("interviewee"),
        role: valueOf("role"),
        markdown
      })
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    if (!result.ok) throw new Error(result.error || "Save failed");

    const localText = pickedFolderPath ? `선택 폴더 저장 완료: ${pickedFolderPath}` : "서버 폴더 저장 완료";
    const mailText = result.mail?.sent ? "이메일 발송 완료" : `이메일 미발송: ${result.mail?.reason || "SMTP 미설정"}`;
    setStatus(`저장 완료 / ${mailText}`, "ok");
    preview.hidden = false;
    preview.textContent = `${localText}\n서버 저장 파일: ${result.fileName}\n서버 저장 경로: ${result.filePath}\n${mailText}\n\n` + markdown;
  } catch (error) {
    if (pickedFolderPath) {
      setStatus("내 PC 저장 완료 / 서버 연결 없음", "ok");
      preview.hidden = false;
      preview.textContent = [
        `내 PC 저장 완료: ${pickedFolderPath}`,
        "",
        "서버 저장과 메일 발송은 실행되지 않았습니다.",
        "페이지를 파일로 열었거나 GitHub 정적 페이지에서 실행 중이면 정상적인 상황입니다.",
        "메일 발송까지 필요하면 node server.js로 실행하고 SMTP 설정을 해야 합니다.",
        "",
        markdown
      ].join("\n");
      return;
    }

    setStatus("저장 실패: 폴더 선택 또는 다운로드 필요", "error");
    preview.hidden = false;
    preview.textContent = [
      "저장 서버에 연결하지 못했습니다.",
      error.message,
      "",
      "해결 방법:",
      "1. '내 PC 저장 폴더 선택'을 누른 뒤 다시 작성 완료를 누르세요.",
      "2. 또는 '.md 다운로드' 버튼으로 파일을 직접 저장하세요.",
      "3. 메일 발송까지 필요하면 node server.js로 실행하고 SMTP 설정을 해야 합니다.",
      "",
      markdown
    ].join("\n");
  }
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

renderAllQuestions();
form.elements.date.value = new Date().toISOString().slice(0, 10);

roleQuestionSet.addEventListener("change", () => {
  renderQuestions("roleSpecific", roleSpecificSets[roleQuestionSet.value]);
});

document.querySelector("#previewBtn").addEventListener("click", () => {
  preview.hidden = !preview.hidden;
  preview.textContent = buildMarkdown();
});

document.querySelector("#pickFolderBtn").addEventListener("click", pickSaveFolder);
document.querySelector("#downloadBtn").addEventListener("click", downloadMarkdown);
form.addEventListener("submit", submitForm);
