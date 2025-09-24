import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const handleEmailClick = async (e) => {
    e.preventDefault();
    const email = '8000gam@gmail.com';

    try {
      await navigator.clipboard.writeText(email);
      alert('이메일 주소가 클립보드에 복사되었습니다!');
    } catch (err) {
      console.error('클립보드 복사에 실패했습니다:', err);
      alert('클립보드 복사에 실패했습니다. 이메일 주소: ' + email);
    }
  };

  const contactInfo = [
    {
      type: 'email',
      label: 'Email',
      value: '8000gam@gmail.com',
      href: 'mailto:8000gam@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'github.com/iPad7',
      href: 'https://github.com/iPad7',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Get In Touch</h2>

            <p className={styles.description}>
              AI 프로젝트 협업이나 기술 교류에 관심이 있으시다면 언제든 연락주세요.
              새로운 아이디어와 도전적인 문제를 함께 해결해 나가고 싶습니다.
            </p>

            <div className={styles.contactList}>
              {contactInfo.map((contact) => (
                <a
                  key={contact.type}
                  href={contact.href}
                  target={contact.type === 'email' ? '_self' : '_blank'}
                  rel={contact.type === 'email' ? '' : 'noopener noreferrer'}
                  className={styles.contactItem}
                  onClick={contact.type === 'email' ? handleEmailClick : undefined}
                >
                  <div className={styles.contactIcon}>
                    {contact.icon}
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>{contact.label}</span>
                    <span className={styles.contactValue}>{contact.value}</span>
                  </div>
                  <div className={styles.contactArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.messageBox}>
              <div className={styles.messageHeader}>
                <div className={styles.messageDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.messageBody}>
                <p>💡 "혁신적인 AI 솔루션으로<br />더 나은 세상을 만들어가요!"</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            © 2024 Jaebeom Lee. Made with React
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;