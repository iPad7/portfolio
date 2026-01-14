import React from 'react';
import A4Page from '../../components/A4Page/A4Page';
import { techStack, site } from '../../data/portfolio';
import styles from './TechStack.module.css';

const TechStack = ({ pageNumber }) => (
  <A4Page
    kicker="Tech Stack"
    title="Tech Stack"
    subtitle="Tools & Platforms"
    pageNumber={pageNumber}
    footerLeft={site.name}
    footerRight="Core Toolkit"
  >
    <div className={styles.grid}>
      {techStack.map((category) => (
        <div key={category.title} className={styles.card}>
          <h3 className={styles.cardTitle}>{category.title}</h3>
          <div className={styles.tagList}>
            {category.items.map((item) => (
              <span key={item} className={styles.tag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </A4Page>
);

export default TechStack;
