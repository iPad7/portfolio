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
      </div>
    </div>
  );
};

const Projects = () => {
  const mainProject = {
    title: 'AI 인플루언서 연애 상담 스트리밍 플랫폼',
    description: '톤앤매너가 Fine-tuning된 여러 AI 스트리머(sLLM)과 Agent Pipeline을 통해 여러 시청자와 실시간으로 소통할 수 있는 플랫폼입니다',
    role: '프로젝트 매니저 및 Full-stack 시스템 엔지니어로서, 프로젝트 기획 및 AI 기술 총괄/지원을 담당하고, FastAPI 기반 LM 추론 서버 설계 및 구현을 담당했습니다. 톤앤매너 데이터 생성, 학습 및 정량적 성능 평가 프로세스를 디자인하고, AI 엔지니어가 설계한 Agent Pipeline을 메인 시스템(Django)에 객체화하여 주입했습니다.',
    technologies: ['Python', 'JavaScript', 'HuggingFace', 'React', 'Django', 'Django Channels', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    githubUrl: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-final-4team'
  };

  const miniProjects = [
    {
      title: '서울특별시 폐업사업자 분류 예측',
      description: '서울특별시 자영업자들의 추정 매출, 상권 정보 공공 데이터를 활용해 ML 기반 폐업률 예측 모델을 개발했습니다',
      role: '기획 및 데이터 수집&전처리를 담당했으며, 탐색적 데이터 분석 단계에서 반응 변수 Label의 불균형성을 확인하고, 설명변수 간 상관분석을 통해 다중공선성을 최소화했습니다. EDA와 전처리 결과를 모델 학습 담당자에게 전달하여, Recall을 평가 지표로 채택하여 실제로 폐업할 가능성이 높은 사업자를 놓치지 않는 것에 집중하도록 모델을 설계할 것을 제언했습니다.',
      technologies: ['Python', 'Numpy', 'Pandas', 'Scikit-Learn', 'Streamlit'],
      githubUrl: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-2nd-4team'
    },
    {
      title: '기초 화장품 추천 챗봇',
      description: '온라인 화장품 쇼핑몰에서 제품 정보, 제품 리뷰 정보를 스크랩하여, 고객 경험 기반 기초 화장품 추천 챗봇을 개발했습니다',
      role: '데이터 전처리 담당자로서, 스크랩한 데이터를 Vector DB에 적재할 수 있는 JSON 형태로 가공하였습니다. 리뷰 데이터에 사용자의 만족도를 추가하기 위해, Sentiment Analysis 모델을 Full Fine-tuning하여 리뷰 데이터를 긍정/중립/부정으로 Labeling했습니다. OPENAI API로 Few-shot Prompting을 활용하여 학습 데이터를 구축했습니다.',
      technologies: ['Python', 'Selenium', 'Numpy', 'Pandas', 'OpenAI', 'HuggingFace'],
      githubUrl: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-3rd-3team'
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