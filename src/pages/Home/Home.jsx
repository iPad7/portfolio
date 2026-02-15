import React from 'react';
import A4Page from '../../components/A4Page/A4Page';
import { site, focusAreas } from '../../data/portfolio';
import profileImage from '../../assets/images/profile.jpg';
import styles from './Home.module.css';

const Home = ({ pageNumber }) => (
  <A4Page
    kicker=""
    title={site.name}
    subtitle={`${site.title} · ${site.location}`}
    pageNumber={pageNumber}
    footerLeft={site.role}
    footerRight="Portfolio 2025"
    className={styles.home}
  >
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.tagline}>{site.tagline}</p>
        <div className={styles.contactRow}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email</span>
            <span>{site.email}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>GitHub</span>
            <span>{site.github.replace('https://', '')}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Blog</span>
            <span>{site.blog.replace('https://', '')}</span>
          </div>
        </div>
      </div>
      <div className={styles.photoCard}>
        <img src={profileImage} alt={`${site.name} profile`} />
      </div>
    </div>
    <div className={styles.focusGrid}>
      {focusAreas.map((area) => (
        <div key={area.title} className={styles.focusCard}>
          <span className={styles.focusTitle}>{area.title}</span>
          <p className={styles.focusDescription}>{area.description}</p>
        </div>
      ))}
    </div>
    <div className={styles.signature}>
      <span className={styles.signatureLine}>
        “평가 기준을 정립하고 검증해 신뢰할 수 있는 LLM Agent를 만듭니다.”
      </span>
      <span className={styles.signatureName}>{site.name}</span>
    </div>
  </A4Page>
);

export default Home;
