import React from 'react';
import styles from './Writings.module.css';

const WritingCard = ({ writing }) => {
  return (
    <article className={styles.writingCard}>
      <div className={styles.cardContent}>
        <div className={styles.dateAndCategory}>
          <span className={styles.date}>{writing.date}</span>
          <span className={styles.category}>{writing.category}</span>
        </div>

        <h3 className={styles.writingTitle}>{writing.title}</h3>

        <p className={styles.writingExcerpt}>{writing.excerpt}</p>

        <div className={styles.tags}>
          {writing.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>

        <a
          href={writing.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readMoreLink}
        >
          더 읽어보기
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15,3 21,3 21,9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </article>
  );
};

const Writings = () => {
  const writings = [
    {
      title: '[AI&ML] Attention Mechanism',
      excerpt: 'Transformer 모델 아키텍처의 근간을 이루는 Attention Mechanism을 Dot-product Attention 기반으로 이해합니다.',
      date: '2025.06.07',
      category: '학습 기록',
      tags: ['Transformer', 'Attention', 'NLP', 'Deep Learning'],
      url: 'https://8000gam.tistory.com/11'
    },
    {
      title: '[플레이데이터 SK네트웍스 Family AI 캠프 13기] 3주차 회고',
      excerpt: 'SQL 기초와 Python requests 라이브러리 기반 웹 스크래핑 학습 내용, 그리고 부트캠프 첫 팀 프로젝트의 총평과 후기를 기록합니다.',
      date: '2025.04.13',
      category: '학습 기록',
      tags: ['Python', 'SQL', 'Web Scrapping', 'Streamlit'],
      url: 'https://8000gam.tistory.com/3'
    },
    {
      title: '[플레이데이터 SK네트웍스 Family AI 캠프 13기] 월간 회고: 5월',
      excerpt: '여러 순환 신경망, Encoder-Decoder 구조의 Seq2Seq 아키텍처, Attention Mechanism, Transformer에 대해 배운 내용을 기록합니다.',
      date: '2025.05.31',
      category: '학습 기록',
      tags: ['RNN', 'Attention', 'Transformer', 'NLP', 'Deep Learning'],
      url: 'https://8000gam.tistory.com/10'
    }
  ];

  return (
    <section id="writings" className={`${styles.writings} section`}>
      <div className="container">
        <h2 className={`${styles.title} text-center`}>Writings & Studies</h2>

        <p className={styles.subtitle}>
          AI와 머신러닝 분야의 최신 논문을 리뷰하고, 배우고 있는 IT 기술을 기록합니다.
        </p>

        <div className={styles.writingsGrid}>
          {writings.map((writing) => (
            <WritingCard key={writing.title} writing={writing} />
          ))}
        </div>

        <div className={styles.blogLinkContainer}>
          <a
            href="https://8000gam.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.blogLink}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            모든 글 보기 (Tistory)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Writings;