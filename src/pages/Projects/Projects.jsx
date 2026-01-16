import React from 'react';
import { Link } from 'react-router-dom';
import A4Page from '../../components/A4Page/A4Page';
import { projects, site } from '../../data/portfolio';
import styles from './Projects.module.css';

const Projects = ({ pageNumber }) => {
  const featured = projects.find((project) => project.featured) || projects[0];
  const rest = projects.filter((project) => project.slug !== featured.slug);

  return (
    <A4Page
      kicker="Projects"
      title="Projects"
      subtitle="Selected Work"
      pageNumber={pageNumber}
      footerLeft={site.name}
      footerRight="Project Archive"
    >
      <div className={styles.layout}>
        {featured && (
          <div className={styles.featured}>
            <div className={styles.featuredHeader}>
              <div>
                <span className={styles.featuredBadge}>Featured</span>
                <h3 className={styles.projectTitle}>{featured.title}</h3>
                <p className={styles.projectSummary}>{featured.summary}</p>
              </div>
              <div className={styles.featuredMeta}>
                <span>{featured.period}</span>
                <span>{featured.role}</span>
              </div>
            </div>
            <div className={styles.tagList}>
              {featured.stack.slice(0, 6).map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.actions}>
              <Link to={`/projects/${featured.slug}`} className={`${styles.link} no-print`}>
                상세 보기
              </Link>
              {featured.links?.reference && (
                <span className={styles.linkHint}>
                  {featured.links.reference.label}: {' '}
                  {featured.links.reference.url.replace('https://', '')}
                </span>
              )}
            </div>
          </div>
        )}
        <div className={styles.grid}>
          {rest.map((project) => (
            <div key={project.slug} className={styles.card}>
              <div className={styles.cardHeader}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <span className={styles.cardPeriod}>{project.period}</span>
              </div>
              <p className={styles.projectSummary}>{project.summary}</p>
              <div className={styles.tagList}>
                {project.stack.slice(0, 5).map((tech) => (
                  <span key={tech} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
              <Link to={`/projects/${project.slug}`} className={`${styles.link} no-print`}>
                상세 보기
              </Link>
            </div>
          ))}
        </div>
      </div>
    </A4Page>
  );
};

export default Projects;
