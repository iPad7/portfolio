import React from 'react';
import A4Page from '../../components/A4Page/A4Page';
import { career, site } from '../../data/portfolio';
import styles from './Career.module.css';

const Career = ({ pageNumber }) => (
  <A4Page
    kicker="Career"
    title="Career"
    subtitle="Timeline"
    pageNumber={pageNumber}
    footerLeft={site.name}
    footerRight="Experience"
  >
    <div className={styles.timeline}>
      {career.map((item) => (
        <div key={item.company} className={styles.card}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.company}>{item.company}</h3>
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
  </A4Page>
);

export default Career;
