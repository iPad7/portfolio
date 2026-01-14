import React from 'react';
import { useParams, Link } from 'react-router-dom';
import A4Page from '../../components/A4Page/A4Page';
import { projects, site } from '../../data/portfolio';
import styles from './ProjectDetail.module.css';

const ProjectDetail = ({ project: projectProp, pageNumber }) => {
  const { slug } = useParams();
  const project = projectProp || projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <A4Page
        kicker="Project"
        title="Project Not Found"
        subtitle="요청한 프로젝트를 찾을 수 없습니다."
        footerLeft={site.name}
        footerRight="404"
      >
        <p>URL을 확인하거나 프로젝트 목록으로 이동해주세요.</p>
        <Link to="/projects" className={`${styles.backLink} no-print`}>
          프로젝트 목록으로
        </Link>
      </A4Page>
    );
  }

  return (
    <A4Page
      kicker="Project Detail"
      title={project.title}
      subtitle={project.summary}
      pageNumber={pageNumber}
      footerLeft={site.name}
      footerRight={project.period}
    >
      <div className={styles.metaRow}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Role</span>
          <span className={styles.metaValue}>{project.role}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Period</span>
          <span className={styles.metaValue}>{project.period}</span>
        </div>
        {project.links?.github && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>GitHub</span>
            <span className={styles.metaValue}>
              {project.links.github.replace('https://', '')}
            </span>
          </div>
        )}
      </div>
      <div className={styles.grid}>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Responsibilities</span>
          <ul className={styles.list}>
            {project.responsibilities.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
          <span className={styles.sectionTitle}>Highlights</span>
          <ul className={styles.list}>
            {project.highlights.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Outcomes</span>
          <ul className={styles.list}>
            {project.outcomes.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
          <span className={styles.sectionTitle}>Tech Stack</span>
          <div className={styles.tagList}>
            {project.stack.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {!projectProp && (
        <Link to="/projects" className={`${styles.backLink} no-print`}>
          ← 프로젝트 목록으로
        </Link>
      )}
    </A4Page>
  );
};

export default ProjectDetail;
