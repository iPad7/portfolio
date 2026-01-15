export const site = {
  name: 'Jaebeom Lee',
  role: 'LLM Agent Quality Engineer',
  title: 'LLM Agent Quality Engineer',
  tagline: 'LLM 기반 Agent 시스템의 품질과 신뢰성을 설계·검증하는 AI 엔지니어',
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
    title: 'LLM Evaluation',
    description: '정량/정성 지표 설계와 평가 프로토콜 구축.'
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
    'LLM-as-a-Judge 기반 정성 평가 자동화',
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
      period: '2025.03 - 2025.08',
      location: 'Seoul, KR',
      summary: '팀 프로젝트에서 LLM 에이전트 품질 평가와 실험 설계를 중심으로 수행했습니다.',
      highlights: [
        '정량/정성 평가 지표 설계 및 결과 리포팅',
        'LangGraph vs LCEL 비교 실험 및 병목 분석',
        '안전성 테스트 시나리오 구성 및 회귀 점검'
      ]
    },
    {
      company: 'Meta Llama Academy',
      role: 'Workshop Participant',
      period: '2025',
      location: 'Remote',
      summary: 'LLM/Agent 활용 사례와 평가 흐름을 학습한 워크숍 프로그램 참여.',
      highlights: [
        '평가 기준 수립과 실험 설계 사례 학습',
        'LLM 응답 품질/안전성 점검 방법 논의'
      ]
    }
  ]
};

export const techStack = [
  {
    title: 'Core Technologies',
    items: ['Python', 'LangGraph', 'LangChain', 'RAG', 'FastAPI', 'PostgreSQL', 'Docker', 'BERTScore', 'ROUGE']
  },
  {
    title: 'Familiar With',
    items: ['PyTorch', 'Hugging Face', 'Redis', 'AWS (EC2, RDS, S3)', 'Django', 'React', 'GitHub Actions']
  }
];

export const projects = [
  {
    slug: 'ai-influencer-streaming',
    title: 'AI 인플루언서 기반 실시간 상담 스트리밍',
    period: '2025',
    summary: 'Fine-tuned sLLM 기반 상담 에이전트를 구축하고 평가·검증 파이프라인으로 품질을 안정화한 스트리밍 플랫폼.',
    role: 'Project Lead / LLM Evaluation Engineer',
    responsibilities: [
      '정량 지표(BERTScore, ROUGE)와 정성 평가(LLM-as-a-Judge) 설계',
      'Safety/Adversarial 테스트 케이스 설계 및 회귀 점검',
      'LangGraph vs LCEL 비교 실험 및 병목 분석',
      'LangGraph 리팩터링 및 속도 테스트 스크립트 구축'
    ],
    evaluation: [
      'BERTScore/ROUGE/Latency 기반 정량 평가 파이프라인 구성',
      'LLM-as-a-Judge로 답변 적합도·일관성 정성 평가',
      'Adversarial 입력 및 안전성 테스트 설계',
      '프레임워크 전환 시 품질/성능 리그레션 체크'
    ],
    highlights: [
      '평가 기준을 기반으로 응답 품질 변동성 점검',
      'Latency 측정과 비용 추정으로 배포 기준 마련',
      '실험 로그 정리로 비교 평가 재현성 확보'
    ],
    outcomes: [
      '평가 결과를 근거로 프롬프트/에이전트 정책 개선',
      '품질 리그레션 점검 루틴을 확보'
    ],
    growth: '현재는 모델/프레임워크 단위 평가 중심이며, agent module interaction에 대한 system-level testing으로 확장 중.',
    stack: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
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
