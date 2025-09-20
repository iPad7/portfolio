import React from 'react';
import styles from './Onboarding.module.css';

const Onboarding = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="onboarding" className={styles.onboarding}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.catchphrase}>
            AI로 문제 해결을 탐구하는 엔지니어, <span className={styles.name}>[Your Name]</span>
          </h1>
          <p className={styles.subtitle}>
            데이터 사이언스와 웹 개발의 경계에서 혁신적인 솔루션을 만들어갑니다
          </p>
        </div>

        <div className={styles.scrollIndicator}>
          <button onClick={scrollToAbout} className={styles.scrollButton}>
            <span className={styles.scrollText}>아래로 스크롤</span>
            <div className={styles.scrollArrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 13L12 18L17 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;