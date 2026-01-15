import React from 'react';
import A4Page from '../../components/A4Page/A4Page';
import { site, metrics, focusAreas, profile } from '../../data/portfolio';
import styles from './Home.module.css';

const Home = ({ pageNumber }) => (
  <A4Page
    kicker="LLM Agent Quality Engineer Portfolio"
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
      <div className={styles.heroPanel}>
        <span className={styles.panelTitle}>Snapshot</span>
        <div className={styles.statGrid}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.stat}>
              <span className={styles.statValue}>{metric.value}</span>
              <span className={styles.statLabel}>{metric.label}</span>
              <span className={styles.statDetail}>{metric.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className={styles.profileGrid}>
      <div className={styles.profileSummary}>
        <span className={styles.sectionLabel}>Positioning</span>
        <h3 className={styles.profileHeadline}>{profile.headline}</h3>
        {profile.summary.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className={styles.profileSide}>
        <div className={styles.profileCard}>
          <span className={styles.sectionLabel}>Strengths</span>
          <ul className={styles.list}>
            {profile.strengths.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.profileCard}>
          <span className={styles.sectionLabel}>Values</span>
          <ul className={styles.list}>
            {profile.values.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.profileCard}>
          <span className={styles.sectionLabel}>Quick Facts</span>
          <div className={styles.factList}>
            {profile.facts.map((fact) => (
              <div key={fact.label} className={styles.factItem}>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
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
