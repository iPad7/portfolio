import React from 'react';
import styles from './A4Page.module.css';

const A4Page = ({
  kicker,
  title,
  subtitle,
  pageNumber,
  headerRight,
  footerLeft,
  footerRight,
  className = '',
  children
}) => {
  const showHeader = kicker || title || subtitle || pageNumber || headerRight;
  const showFooter = footerLeft || footerRight;

  return (
    <section className={`${styles.page} ${className}`}>
      {showHeader && (
        <header className={styles.header}>
          <div className={styles.headerText}>
            {kicker && <span className={styles.kicker}>{kicker}</span>}
            {title && <h1 className={styles.title}>{title}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <div className={styles.headerMeta}>
            {headerRight}
            {pageNumber && <span className={styles.pageNumber}>Page {pageNumber}</span>}
          </div>
        </header>
      )}

      <div className={styles.body}>{children}</div>

      {showFooter && (
        <footer className={styles.footer}>
          <span>{footerLeft}</span>
          <span>{footerRight}</span>
        </footer>
      )}
    </section>
  );
};

export default A4Page;
