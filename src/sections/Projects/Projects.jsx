import React from 'react';
import styles from './Projects.module.css';

const ProjectCard = ({ project, isMain = false }) => {
  return (
    <div className={`${styles.projectCard} ${isMain ? styles.mainProject : styles.miniProject}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        {isMain && <span className={styles.mainBadge}>Main Project</span>}
      </div>

      <p className={styles.projectDescription}>{project.description}</p>

      <div className={styles.projectRole}>
        <h4>My Role</h4>
        <p>{project.role}</p>
      </div>

      <div className={styles.techStack}>
        <h4>Tech Stack</h4>
        <div className={styles.techTags}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.projectLinks}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-secondary ${styles.projectButton}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.projectButton}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15,3 21,3 21,9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const mainProject = {
    title: 'AI-Powered Content Analysis Platform',
    description: '자연어 처리와 머신러닝을 활용하여 대용량 텍스트 데이터를 실시간으로 분석하고 인사이트를 추출하는 플랫폼입니다. 사용자 친화적인 대시보드를 통해 복잡한 AI 분석 결과를 직관적으로 시각화합니다.',
    role: 'Full-stack AI Engineer로서 NLP 모델 개발부터 웹 인터페이스 구현까지 전체 프로젝트를 주도했습니다. 특히 모델 최적화와 실시간 처리 파이프라인 구축에 중점을 두었습니다.',
    technologies: ['Python', 'PyTorch', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/your-username/ai-content-platform',
    liveUrl: 'https://your-ai-platform.vercel.app'
  };

  const miniProjects = [
    {
      title: 'Stock Price Prediction Model',
      description: 'LSTM과 Transformer 아키텍처를 비교 분석하여 주식 가격을 예측하는 딥러닝 모델입니다. 실시간 데이터 수집과 모델 학습 자동화를 구현했습니다.',
      role: 'Data Science 연구원으로서 모델 설계, 하이퍼파라미터 튜닝, 백테스팅 시스템 구축을 담당했습니다.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'yfinance', 'Streamlit'],
      githubUrl: 'https://github.com/your-username/stock-prediction',
      liveUrl: 'https://stock-prediction-demo.streamlit.app'
    },
    {
      title: 'Real-time Chat App with Sentiment Analysis',
      description: '실시간 채팅과 동시에 메시지의 감정을 분석하여 시각화하는 웹 애플리케이션입니다. Firebase를 활용한 실시간 동기화와 사전 훈련된 감정 분석 모델을 통합했습니다.',
      role: '프론트엔드 개발과 AI 모델 통합을 담당하여 사용자 경험과 AI 기능을 매끄럽게 연결했습니다.',
      technologies: ['React', 'Firebase', 'Python', 'Flask', 'Chart.js'],
      githubUrl: 'https://github.com/your-username/sentiment-chat',
      liveUrl: 'https://sentiment-chat-app.vercel.app'
    }
  ];

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className="container">
        <h2 className={`${styles.title} text-center`}>Projects</h2>

        <div className={styles.projectsContainer}>
          <div className={styles.mainProjectContainer}>
            <ProjectCard project={mainProject} isMain={true} />
          </div>

          <div className={styles.miniProjectsContainer}>
            <h3 className={styles.sectionSubtitle}>Mini Projects</h3>
            <div className={styles.miniProjectsGrid}>
              {miniProjects.map((project) => (
                <ProjectCard key={project.title} project={project} isMain={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;