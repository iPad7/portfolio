import React, { useState } from 'react';
import A4Page from '../../components/A4Page/A4Page';
import { useAuth } from '../../context/AuthContext';
import { site } from '../../data/portfolio';
import styles from './Login.module.css';

const Login = () => {
  const { user, signIn, signOut } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      await signIn(email, password);
    } catch (err) {
      setError('로그인 정보를 확인해주세요.');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <A4Page
      kicker="Admin"
      title="Admin Login"
      subtitle="PDF 다운로드를 위한 인증"
      footerLeft={site.name}
      footerRight="Auth"
    >
      <div className={styles.layout}>
        {user ? (
          <div className={styles.loggedIn}>
            <h3>이미 로그인되어 있습니다.</h3>
            <p>{user.email}</p>
            <button type="button" onClick={signOut} className={styles.buttonSecondary}>
              Sign out
            </button>
            <p className={styles.helper}>좌측 메뉴에서 PDF 다운로드를 진행하세요.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.buttonPrimary} disabled={status === 'loading'}>
              {status === 'loading' ? '로그인 중...' : 'Login'}
            </button>
            {error && <p className={styles.error}>{error}</p>}
            <p className={styles.helper}>본인용 계정만 로그인 가능합니다.</p>
          </form>
        )}
      </div>
    </A4Page>
  );
};

export default Login;
