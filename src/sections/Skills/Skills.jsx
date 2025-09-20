import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const mainSkills = [
    {
      name: 'Python',
      icon: '🐍',
      capabilities: [
        '모듈화 기반 객체 지향 프로그래밍',
        'ML Pipeline 설계 및 구현',
      ]
    },
    {
      name: 'Scikit Learn',
      icon: '📊',
      capabilities: [
        '분류/회귀 모델 구축 및 성능 최적화',
        'Feature Engineering 및 교차 검증 수행'
      ]
    },
    {
      name: 'PyTorch',
      icon: '🔥',
      capabilities: [
        '딥러닝 모델 설계 및 분산 학습',
        'Custom Dataset, DataLoader 및 손실함수 구현'
      ]
    },
    {
      name: 'LangChain',
      icon: '🔗',
      capabilities: [
        'LCEL&LangGraph 기반 Agent Pipeline 설계',
        'RAG 시스템 구축 및 프롬프트 엔지니어링'
      ]
    },
    {
      name: 'HuggingFace',
      icon: '🤗',
      capabilities: [
        'Pre-trained sLLM Fine-tuning 및 성능 평가',
        'Sentiment Analysis, Text Summarization 등 자연어 처리 작업'
      ]
    }
  ];

  const subSkills = [
    {
      name: 'React',
      icon: '⚛️',
      capabilities: [
        '컴포넌트 기반 웹 애플리케이션 개발',
        'Context API 및 상태 관리 구현'
      ]
    },
    {
      name: 'Django',
      icon: '🎸',
      capabilities: [
        'REST API 설계 및 구현',
        'Channels 기반 실시간 WebSocket 채팅 시스템 구현'
      ]
    },
    {
      name: 'FastAPI',
      icon: '⚡',
      capabilities: [
        'Clean Architecture Backend 설계',
        'ML 및 언어 모델 추론 서버 구축'
      ]
    },
    {
      name: 'Docker',
      icon: '🐳',
      capabilities: [
        '컨테이너 기반 개발 환경 구축',
        'CI/CD 파이프라인 구성'
      ]
    },
    {
      name: 'AWS',
      icon: '☁️',
      capabilities: [
        'EC2, RDS, Elasticache 등 클라우드 인프라 운영',
        'SageMaker를 활용한 ML 모델 배포'
      ]
    }
  ];

  const SkillItem = ({ skill }) => (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillIcon}>{skill.icon}</span>
        <span className={styles.skillName}>{skill.name}</span>
      </div>
      <ul className={styles.capabilitiesList}>
        {skill.capabilities.map((capability, index) => (
          <li key={index} className={styles.capability}>
            {capability}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <h2 className={`${styles.title} text-center`}>Skills</h2>

        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>🤖</span>
              Main Skills (AI & Data Science)
            </h3>
            <div className={styles.skillsList}>
              {mainSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>💻</span>
              Sub Skills (Web & Etc.)
            </h3>
            <div className={styles.skillsList}>
              {subSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.additionalInfo}>
          <p className={styles.infoText}>
            지속적인 학습을 통해 최신 기술 트렌드를 따라가며,
            실무 프로젝트를 통해 이론과 실제를 연결하는 데 중점을 두고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;