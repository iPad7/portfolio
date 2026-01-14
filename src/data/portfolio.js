export const site = {
  name: 'Jaebeom Lee',
  role: 'AI Engineer',
  title: 'AI Engineer / ML Engineer',
  tagline: 'Agentic AI와 실전 제품 사이를 잇는 엔지니어',
  location: 'Seoul, KR',
  email: '8000gam@gmail.com',
  github: 'https://github.com/iPad7',
  blog: 'https://8000gam.tistory.com',
  pdfFilename: 'jaebeom-lee-portfolio.pdf'
};

export const navigation = [
  { label: 'Main', path: '/' },
  { label: 'Profile', path: '/profile' },
  { label: 'Career', path: '/career' },
  { label: 'Tech Stack', path: '/tech-stack' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' }
];

export const metrics = [
  {
    label: 'End-to-end Projects',
    value: '3',
    detail: 'Data → Model → Product'
  },
  {
    label: 'LLM / Agent Pipelines',
    value: '2',
    detail: 'RAG + LangGraph'
  },
  {
    label: 'Deployment Focus',
    value: 'FastAPI & Docker',
    detail: 'Production-ready'
  }
];

export const focusAreas = [
  {
    title: 'Agentic AI',
    description: 'LangGraph 기반 멀티 에이전트 설계 및 운영.'
  },
  {
    title: 'LLMOps',
    description: '실험-검증-배포를 잇는 모델 라이프사이클 설계.'
  },
  {
    title: 'Product Thinking',
    description: '문제 정의부터 KPI까지 제품 관점으로 설계.'
  }
];

export const profile = {
  headline: '문제를 구조화해 실전형 AI 제품으로 연결하는 엔지니어.',
  summary: [
    '데이터 사이언스와 소프트웨어 엔지니어링 경계를 넘나들며 모델을 제품으로 완성하는 과정에 집중합니다.',
    'Agentic AI, MLOps/LLMOps를 바탕으로 실험-검증-배포 사이클을 단축하고, 지속 가능한 성능 개선을 지향합니다.'
  ],
  strengths: [
    '모델 성능과 제품 경험을 동시에 고려한 설계',
    '데이터 파이프라인부터 서비스 운영까지 풀스택 경험',
    '협업을 위한 문서화와 실험 기록 정리'
  ],
  values: [
    '작은 개선을 빠르게 쌓아 제품 품질을 끌어올립니다.',
    '문제 정의와 지표 설계를 명확히 합니다.',
    '재현 가능성과 유지보수를 최우선으로 둡니다.'
  ],
  facts: [
    { label: 'Base', value: 'Seoul, Korea' },
    { label: 'Focus', value: 'Agentic AI / MLOps' },
    { label: 'GitHub', value: 'github.com/iPad7' },
    { label: 'Blog', value: '8000gam.tistory.com' }
  ]
};

export const career = [
  {
    company: 'SK Networks Family AI Camp',
    role: 'AI Engineer Trainee',
    period: '2025.03 - 2025.08',
    location: 'Seoul, KR',
    summary: '실무형 AI 프로젝트를 중심으로 팀 기반 제품 개발과 모델 배포 경험을 확보했습니다.',
    highlights: [
      'LLM 기반 상담 플랫폼의 에이전트 설계 및 백엔드 구현',
      '데이터 수집-정제-학습-배포 파이프라인 구축',
      '프로젝트 문서화 및 데모 발표 리딩'
    ]
  },
  {
    company: 'Independent Projects',
    role: 'AI Engineer',
    period: '2024.06 - Present',
    location: 'Remote',
    summary: 'Agentic AI와 추천 시스템을 중심으로 개인 프로젝트를 수행했습니다.',
    highlights: [
      'Fine-tuning 및 평가 프로세스 설계',
      'RAG 기반 검색/요약 기능 구현',
      '프로덕션 관점의 성능 최적화 및 모니터링 설계'
    ]
  }
];

export const techStack = [
  {
    title: 'Core ML',
    items: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy']
  },
  {
    title: 'LLM & Agent',
    items: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'Hugging Face']
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Django', 'Django Channels', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Infra & MLOps',
    items: ['Docker', 'AWS (EC2, RDS, S3)', 'GitHub Actions', 'SageMaker']
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'CSS Modules']
  }
];

export const projects = [
  {
    slug: 'ai-influencer-streaming',
    title: 'AI 인플루언서 기반 실시간 상담 스트리밍',
    period: '2025',
    summary: 'Fine-tuned sLLM과 Agent Pipeline으로 실시간 상담을 제공하는 스트리밍 플랫폼.',
    role: 'Project Lead / Full-stack AI Engineer',
    responsibilities: [
      '멀티 에이전트 구조 설계 및 역할 분리',
      'FastAPI 기반 추론 서버 및 실시간 메시지 처리',
      'React 기반 상담 UI와 운영 대시보드 구축'
    ],
    highlights: [
      'Agentic AI 워크플로우 도입으로 응답 품질 안정화',
      '스트리밍 환경에서의 지연 시간 최소화',
      'Django Channels로 실시간 메시징 구현'
    ],
    outcomes: [
      '대화 응답 일관성 향상',
      '운영 대시보드로 시나리오 관리 효율화'
    ],
    stack: ['Python', 'React', 'Django', 'Django Channels', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    links: {
      github: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-final-4team'
    },
    featured: true
  },
  {
    slug: 'startup-risk-prediction',
    title: '서울시 업종별 창업 위험 예측',
    period: '2024',
    summary: '공공 데이터 기반 업종별 폐업 위험도를 예측하는 ML 모델 개발.',
    role: 'Data Scientist',
    responsibilities: [
      '데이터 수집 및 전처리 파이프라인 구축',
      '피처 엔지니어링 및 불균형 데이터 처리',
      '모델 성능 분석 및 지표 최적화'
    ],
    highlights: [
      'Recall 중심의 지표 설계로 위험군 포착 강화',
      '지역/업종별 변수 중요도 분석'
    ],
    outcomes: [
      '높은 위험군 분류 재현율 확보',
      '정책 의사결정용 리포트 자동화'
    ],
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Streamlit'],
    links: {
      github: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-2nd-4team'
    }
  },
  {
    slug: 'skincare-chatbot',
    title: '기초 화장품 추천 챗봇',
    period: '2024',
    summary: '리뷰 데이터 기반으로 개인화 추천을 제공하는 챗봇 구축.',
    role: 'ML Engineer',
    responsibilities: [
      '리뷰 데이터 크롤링 및 정제',
      '감성 분석 모델 Fine-tuning',
      'RAG 기반 추천 응답 생성'
    ],
    highlights: [
      'Few-shot Prompting을 통한 응답 품질 개선',
      'Vector DB 구성 및 질의 최적화'
    ],
    outcomes: [
      '추천 정확도 향상',
      '응답 생성 지연 시간 감소'
    ],
    stack: ['Python', 'Selenium', 'Pandas', 'OpenAI', 'Hugging Face'],
    links: {
      github: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-3rd-3team'
    }
  }
];

export const contact = {
  headline: '함께 문제를 풀 파트너를 찾습니다.',
  message: 'AI 제품화, MLOps, LLM 파이프라인 협업이 필요하시면 언제든지 연락 주세요.',
  channels: [
    { label: 'Email', value: '8000gam@gmail.com', href: 'mailto:8000gam@gmail.com' },
    { label: 'GitHub', value: 'github.com/iPad7', href: 'https://github.com/iPad7' },
    { label: 'Blog', value: '8000gam.tistory.com', href: 'https://8000gam.tistory.com' }
  ]
};
