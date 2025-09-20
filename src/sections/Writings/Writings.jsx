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
      excerpt: 'Transformer 모델 아키텍처의 근간을 이루는 Attention Mechanism을 Dot-product Attention 기반으로 이해합니다. 기존 RNN 기반 Seq2Seq 구조의 문제점, Attention의 콘셉트, 한계점을 요약합니다.',
      date: '2025.06.07',
      category: '개인 학습',
      tags: ['Transformer', 'Attention', 'NLP', 'Deep Learning'],
      url: 'https://8000gam.tistory.com/11'
    },
    {
      title: '[Mock] BERT vs GPT: 사전 훈련된 언어 모델의 패러다임 비교',
      excerpt: 'BERT의 양방향 인코더 구조와 GPT의 자기회귀적 디코더 구조를 비교 분석합니다. 각 모델의 강점과 적용 분야, 그리고 실무에서의 선택 기준에 대해 데이터와 실험 결과를 바탕으로 설명합니다.',
      date: '2024.02.28',
      category: '논문 리뷰',
      tags: ['BERT', 'GPT', 'Pre-training', 'Language Model'],
      url: 'https://8000gam.tistory.com/3'
    },
    {
      title: '[Mock] PyTorch vs TensorFlow: 실무 프로젝트 관점에서의 프레임워크 선택 가이드',
      excerpt: '2년간의 실무 경험을 바탕으로 PyTorch와 TensorFlow의 장단점을 객관적으로 비교합니다. 프로젝트 규모, 팀 구성, 배포 환경에 따른 최적의 선택 기준을 제시하고, 실제 마이그레이션 경험도 공유합니다.',
      date: '2024.02.10',
      category: '기술 분석',
      tags: ['PyTorch', 'TensorFlow', 'Framework', 'MLOps'],
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