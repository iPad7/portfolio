import React from 'react';
import styles from './About.module.css';

const About = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/iPad7',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Tistory',
      url: 'https://8000gam.tistory.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/your-profile',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Me</h2>

            <div className={styles.description}>
              <p>
                안녕하세요! 저는 AI와 머신러닝 기술을 활용하여 실질적인 문제를 해결하는 것에 열정을 가진 엔지니어입니다.
                데이터 사이언스의 깊이와 웹 개발의 실용성을 결합하여 사용자 중심의 혁신적인 솔루션을 만들어가고 있습니다.
              </p>

              <p>
                React로 이 포트폴리오를 제작한 이유는 단순히 기술 스택을 보여주기 위함이 아닙니다.
                AI 모델의 복잡한 결과물을 직관적이고 아름다운 인터페이스로 전달하는 것이 얼마나 중요한지 깨달았기 때문입니다.
                최적의 알고리즘도 사용자가 쉽게 접근할 수 없다면 그 가치가 반감됩니다.
              </p>

              <p>
                현재는 Agentic AI와 MLOps/LLMOps에 특별한 관심을 가지고 있으며,
                연구 결과를 실제 프로덕션 환경에 안정적으로 배포하는 방법을 탐구하고 있습니다.
              </p>
            </div>

            <div className={styles.socialLinks}>
              <h3>Connect with me</h3>
              <div className={styles.linksContainer}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={styles.linkIcon}>{link.icon}</span>
                    <span className={styles.linkText}>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.profileImagePlaceholder}>
              <div className={styles.placeholderIcon}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <p className={styles.placeholderText}>Profile Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;