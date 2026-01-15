import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { site } from '../../data/portfolio';
import styles from './PdfDownloadButton.module.css';

const PdfDownloadButton = () => {
  const { user, signIn, signOut } = useAuth();
  const [isFormActive, setIsFormActive] = useState(false);
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const adminEmail = site.email;

  useEffect(() => {
    if (isFormActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFormActive]);

  const downloadPdf = async (authUser) => {
    const token = await authUser.getIdToken();
    const response = await fetch('/api/pdf', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('PDF 생성에 실패했습니다.');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = site.pdfFilename || 'portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  const handleAction = async (event) => {
    if (event) {
      event.preventDefault();
    }

    if (status !== 'idle') {
      return;
    }

    setError('');

    if (!user) {
      if (!isFormActive) {
        setIsFormActive(true);
        return;
      }

      if (!password.trim()) {
        setError('비밀번호를 입력해주세요.');
        return;
      }

      setStatus('signing-in');
      let signedInUser = null;

      try {
        const credential = await signIn(adminEmail, password);
        signedInUser = credential?.user;

        if (!signedInUser) {
          throw new Error('로그인에 실패했습니다.');
        }

        setStatus('downloading');
        await downloadPdf(signedInUser);
        setPassword('');
        setIsFormActive(false);
      } catch (err) {
        if (!signedInUser) {
          const code = err && typeof err === 'object' ? err.code : '';
          const isAuthError = typeof code === 'string' && code.startsWith('auth/');
          setError(isAuthError ? '비밀번호를 확인해주세요.' : '로그인에 실패했습니다.');
        } else {
          setError(err?.message || 'PDF 생성 중 오류가 발생했습니다.');
        }
      } finally {
        setStatus('idle');
        if (signedInUser) {
          try {
            await signOut();
          } catch (signOutError) {
            console.error(signOutError);
          }
        }
      }

      return;
    }

    setStatus('downloading');

    try {
      await downloadPdf(user);
    } catch (err) {
      setError(err?.message || 'PDF 생성 중 오류가 발생했습니다.');
    } finally {
      setStatus('idle');
      try {
        await signOut();
      } catch (signOutError) {
        console.error(signOutError);
      }
      setPassword('');
      setIsFormActive(false);
    }
  };

  const label = 'Save as PDF';
  const hint =
    status === 'signing-in'
      ? '로그인 중...'
      : status === 'downloading'
      ? 'PDF 생성 중...'
      : !user && !isFormActive
      ? 'Save as PDF를 누르면 비밀번호 입력이 활성화됩니다.'
      : !user
      ? '비밀번호 입력 후 다시 Save as PDF를 누르세요.'
      : '클릭하면 PDF를 다운로드하고 자동 로그아웃됩니다.';

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleAction}>
        {!user && isFormActive && (
          <input
            ref={inputRef}
            type="password"
            className={styles.input}
            placeholder="비밀번호"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
        )}
        <button type="submit" className={styles.button} disabled={status !== 'idle'}>
          {label}
        </button>
      </form>
      <span className={styles.hint}>{hint}</span>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default PdfDownloadButton;
