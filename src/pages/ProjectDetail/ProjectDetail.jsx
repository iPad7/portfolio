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
        {project.links?.reference && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>{project.links.reference.label}</span>
            <span className={styles.metaValue}>
              {project.links.reference.url.replace('https://', '')}
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
          {project.evaluation?.length ? (
            <>
              <span className={styles.sectionTitle}>Evaluation & Quality</span>
              <ul className={styles.list}>
                {project.evaluation.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <span className={styles.sectionTitle}>Highlights</span>
              <ul className={styles.list}>
                {project.highlights.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className={styles.section}>
          {project.evaluation?.length ? (
            <>
              <span className={styles.sectionTitle}>Highlights</span>
              <ul className={styles.list}>
                {project.highlights.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
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
      {project.growth ? <p className={styles.growth}>{project.growth}</p> : null}
      {!projectProp && (
        <Link to="/projects" className={`${styles.backLink} no-print`}>
          ← 프로젝트 목록으로
        </Link>
      )}
    </A4Page>
  );
};

export default ProjectDetail;
