import React from 'react';
import styles from './About.module.css';
import profileImage from '../../assets/images/profile.jpg';

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
            <div className={styles.profileImageContainer}>
              <img
                src={profileImage}
                alt="Jaebeom Lee Profile"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;