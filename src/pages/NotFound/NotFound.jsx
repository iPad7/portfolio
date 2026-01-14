import React from 'react';
import { Link } from 'react-router-dom';
import A4Page from '../../components/A4Page/A4Page';
import { site } from '../../data/portfolio';
import styles from './NotFound.module.css';

const NotFound = () => (
  <A4Page
    kicker="Oops"
    title="Page Not Found"
    subtitle="요청한 페이지를 찾을 수 없습니다."
    footerLeft={site.name}
    footerRight="404"
  >
    <div className={styles.content}>
      <p>입력하신 주소가 변경되었거나 존재하지 않습니다.</p>
      <Link to="/" className={styles.link}>
        홈으로 이동
      </Link>
    </div>
  </A4Page>
);

export default NotFound;
