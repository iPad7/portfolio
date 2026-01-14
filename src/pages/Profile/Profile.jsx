import React from 'react';
import A4Page from '../../components/A4Page/A4Page';
import { profile, site } from '../../data/portfolio';
import profileImage from '../../assets/images/profile.jpg';
import styles from './Profile.module.css';

const Profile = ({ pageNumber }) => (
  <A4Page
    kicker="Profile"
    title="Profile"
    subtitle="Background & Strengths"
    pageNumber={pageNumber}
    footerLeft={site.name}
    footerRight={site.role}
  >
    <div className={styles.layout}>
      <div className={styles.summary}>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Summary</span>
          <h3 className={styles.headline}>{profile.headline}</h3>
          {profile.summary.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Strengths</span>
          <ul className={styles.list}>
            {profile.strengths.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Values</span>
          <ul className={styles.list}>
            {profile.values.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.side}>
        <div className={styles.photoCard}>
          <img src={profileImage} alt={`${site.name} profile`} />
        </div>
        <div className={styles.factCard}>
          <span className={styles.sectionTitle}>Quick Facts</span>
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
  </A4Page>
);

export default Profile;
