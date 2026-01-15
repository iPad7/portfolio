import React from 'react';
import A4Page from '../../components/A4Page/A4Page';
import { career, site } from '../../data/portfolio';
import styles from './Career.module.css';

const Career = ({ pageNumber }) => {
  const sections = [
    { title: 'Experience', items: career.experience },
    { title: 'Education & Programs', items: career.programs }
  ];

  return (
    <A4Page
      kicker="Programs"
      title="Experience & Programs"
      subtitle="Training & Applied Work"
      pageNumber={pageNumber}
      footerLeft={site.name}
      footerRight="Programs"
    >
      <div className={styles.sections}>
        {sections.map((section) => {
          if (!section.items || section.items.length === 0) {
            return null;
          }

          return (
            <section key={section.title} className={styles.section}>
              <h3 className={styles.sectionHeading}>{section.title}</h3>
              <div className={styles.timeline}>
                {section.items.map((item) => (
                  <div key={item.company} className={styles.card}>
                    <div className={styles.header}>
                      <div>
                        <h4 className={styles.company}>{item.company}</h4>
                        <p className={styles.role}>{item.role}</p>
                      </div>
                      <div className={styles.meta}>
                        <span>{item.period}</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p className={styles.summary}>{item.summary}</p>
                    <ul className={styles.highlights}>
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className={styles.highlightItem}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </A4Page>
  );
};

export default Career;
