export const site = {
  name: 'Jaebeom Lee',
  role: 'LLM-based Agent Engineer',
  title: 'LLM-based Agent Engineer',
  tagline: 'LLM Agent를 설계·개선하며 품질과 성능을 함께 다루는 AI 엔지니어입니다.',
  location: 'Seoul, KR',
  email: '8000gam@gmail.com',
  github: 'https://github.com/iPad7',
  blog: 'https://8000gam.tistory.com',
  pdfFilename: 'jaebeom-lee-portfolio.pdf'
};

export const navigation = [
  { label: 'Main', path: '/' },
  { label: 'Programs', path: '/career' },
  { label: 'Tech Stack', path: '/tech-stack' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' }
];

export const metrics = [
  {
    label: 'Evaluation',
    value: 'Quant + Qual',
    detail: 'BERTScore · ROUGE · LLM Judge'
  },
  {
    label: 'Safety Tests',
    value: 'Adversarial',
    detail: 'Prompt Attack · Policy Check'
  },
  {
    label: 'Benchmarks',
    value: 'Framework',
    detail: 'LangGraph vs LCEL · Latency'
  }
];

export const focusAreas = [
  {
    title: 'LLM SFT & Evaluation',
    description: 'PEFT 미세 조정 & 정량/정성 평가 지표 설계.'
  },
  {
    title: 'Agent Reliability',
    description: '안전성·회귀 테스트로 응답 품질 안정화.'
  },
  {
    title: 'Experiment Design',
    description: '비교 실험과 재현 가능한 테스트 스크립트 설계.'
  }
];

export const profile = {
  headline: 'LLM Agent 품질을 정의하고 검증하는 AI 엔지니어.',
  summary: [
    '정량 지표(BERTScore, ROUGE)와 정성 평가(LLM-as-a-Judge)를 결합해 품질 기준을 세웁니다.',
    '안전성·어드버서리얼 테스트와 프레임워크 비교 실험으로 재현 가능한 평가 파이프라인을 구축합니다.'
  ],
  strengths: [
    '평가 지표/프로토콜 설계 및 실험 비교',
    'LLM-as-a-Judge 기반 정성 평가',
    'Latency·비용 측정 포함 성능 벤치마킹',
    '실험 로그와 테스트 스크립트로 재현성 확보'
  ],
  values: [
    '평가 기준을 먼저 정의하고 구현을 검증합니다.',
    '정량과 정성을 균형 있게 사용합니다.',
    '재현 가능한 실험과 근거 기반 개선을 우선합니다.'
  ],
  facts: [
    { label: 'Base', value: 'Seoul, Korea' },
    { label: 'Focus', value: 'LLM Agent Quality & Evaluation' },
    { label: 'GitHub', value: 'github.com/iPad7' },
    { label: 'Blog', value: '8000gam.tistory.com' }
  ]
};

export const career = {
  experience: [],
  programs: [
    {
      company: 'SK Networks Family AI Camp',
      role: 'AI Engineer Trainee',
      period: '2025.03 - 2025.09',
      summary: '팀 프로젝트에서 LLM Agent 품질 평가와 실험 설계를 중심으로 수행했습니다.',
      highlights: [
        'NLP, LLM, Agentic AI 학습',
        '프로젝트 로컬 LLM 정량/정성 평가 지표 설계 및 결과 리포팅',
        '프로젝트 Agent Pipeline LangGraph vs LCEL 비교 실험 및 병목 분석',
      ]
    },
    {
      company: 'Meta Llama Academy: LLM Agent and On-device AI Workshop',
      role: 'Workshop Participant',
      period: '2025.09 - 2025.10',
      summary: '팀 프로젝트에서 LLM Agent tool을 설계하고 MCP Client와 DB를 구축했습니다.',
      highlights: [
        'RAG, Model Compression 학습',
        'LangGraph 기반 Agentic Pipeline 설계',
        'MCP Client & DB 구축 및 MCP 통신 & DB Look-up tool 구축'

      ]
    }
  ]
};

export const techStack = [
  {
    title: 'Core Technologies',
    items: [
      { name: 'Python', note: 'AI-applied backend 설계 및 구현.' },
      { name: 'LangChain', note: 'Agent Workflow 구성과 체인 설계.' },
      { name: 'HuggingFace', note: '모델/토크나이저 실험 및 파인튜닝.' },
      { name: 'RAG', note: '검색-생성 결합 설계와 성능 검증.' },
      { name: 'Docker', note: '환경 재현과 배포 자동화.' }
    ]
  },
  {
    title: 'Familiar With',
    items: [
      { name: 'JavaScript', note: '프론트엔드/툴링 보조 개발.' },
      { name: 'AWS', note: 'EC2/RDS/ElastiCache 중심 운영 경험.' },
      { name: 'MCP', note: 'MCP 클라이언트 설계 및 구현' },
      { name: 'GitHub Actions', note: 'CI/CD 파이프라인 자동화.' }
    ]
  }
];

export const projects = [
  {
    slug: 'ai-influencer-streaming',
    title: 'Love Language Model',
    period: '2025',
    summary: 'Fine-tuned sLLM 기반 Agent를 구축하고 평가·검증 프로세스로 품질을 안정화한 스트리밍 플랫폼.',
    role: 'Project Leader / AI-applied Backend Engineer',
    responsibilities: [
      '정량 지표(BERTScore, ROUGE)와 정성 평가(LLM-as-a-Judge) 설계',
      'Safety/Adversarial 테스트 케이스 설계 및 회귀 점검',
      'LangGraph vs LCEL 비교 실험 및 병목 분석',
      'LangGraph Agent Pipeline 및 LM 추론 서버 개발'
    ],
    evaluation: [
      'BERTScore/ROUGE/Latency 기반 정량 평가 파이프라인 구성',
      'LLM-as-a-Judge로 답변 적합도·일관성 정성 평가',
      'Adversarial 입력 및 안전성 테스트 설계',
    ],
    highlights: [
      '평가 기준을 기반으로 응답 품질 변동성 점검',
      'Latency 측정과 비용 추정으로 배포 기준 마련',
      '실험 로그 정리로 비교 평가 재현성 확보'
    ],
    outcomes: [
      'LCEL to LangGraph로 구조 변경 후 처리 속도 20% 향상',
      '추론 서버 격리로 새로운 SFT에 즉각 대응 가능한 MSA 구현'
    ],
    stack: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    links: {
      reference: {
        label: 'GitHub',
        url: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-final-4team'
      }
    },
    featured: true
  },
  {
    slug: 'ai-agent-orchestrator',
    title: 'Maphack: Context Orchestration Agent',
    period: '2025',
    summary: '분산된 업무 데이터를 MCP로 수집하여 일일 업무 우선 순위 리포트를 자동 생성하는 Agent.',
    role: 'AI-applied Backend Engineer(Infra & MCP)',
    responsibilities: [
      'MCP 클라이언트 설계 및 구현(w/ Notion, Slack, Gmail MCP 서버)',
      'Context Registry(SQLite) 스키마와 저장/조회 로직 구축',
      'MCP Client 호출 Tool 구현'
    ],
    highlights: [
      '클라이언트 → MCP → Orchestrator → 보고서 작성 DB 저장 end-to-end 파이프라인 구현',
      'Chatbot 간 Context 공유 '
    ],
    outcomes: [
      '다중 AI 클라이언트 입력을 공통 포맷으로 수집/정규화',
      '데모용 자동 요약/추출 파이프라인 안정화'
    ],
    stack: ['Python', 'MCP', 'LangGraph', 'FastAPI', 'SQLite', 'Notion', 'APScheduler'],
    links: {
      reference: {
        label: 'Demo',
        url: 'https://youtu.be/NgpVF3NpKDw'
      }
    }
  },
  {
    slug: 'skincare-chatbot',
    title: '기초 화장품 추천 챗봇',
    period: '2025',
    summary: '리뷰 데이터 기반으로 개인화 추천을 제공하는 챗봇 구축.',
    role: 'ML Engineer',
    responsibilities: [
      '리뷰 데이터 크롤링 및 정제',
      '감성 분석 모델 Fine-tuning',
      'RAG 기반 추천 응답 생성'
    ],
    highlights: [
      'Few-shot Prompting을 통한 Train & Test Data Augmentation',
      'Local Sentiment Analysis 모델 SFT(Full Fine-tuning)'
    ],
    outcomes: [
      '리뷰 데이터에 감성 Labeling으로 검색 효율 향상',
      '추천 정확도 향상',
      '응답 생성 지연 시간 감소',
    ],
    stack: ['Python', 'Selenium', 'Pandas', 'OpenAI', 'Hugging Face'],
    links: {
      reference: {
        label: 'GitHub',
        url: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-3rd-3team'
      }
    }
  }
];

export const contact = {
  headline: '함께 문제를 풀 파트너를 찾습니다.',
  message: 'LLM QA, Agentic Pipeline 관련 협업이 필요하시면 언제든지 연락 주세요.',
  channels: [
    { label: 'Email', value: '8000gam@gmail.com', href: 'mailto:8000gam@gmail.com' },
    { label: 'GitHub', value: 'github.com/iPad7', href: 'https://github.com/iPad7' },
    { label: 'Blog', value: '8000gam.tistory.com', href: 'https://8000gam.tistory.com' }
  ]
};
