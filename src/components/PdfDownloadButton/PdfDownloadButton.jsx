import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { site } from '../../data/portfolio';
import styles from './PdfDownloadButton.module.css';

const PdfDownloadButton = () => {
  const { user } = useAuth();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleDownload = async () => {
    if (!user || status === 'loading') {
      return;
    }

    setStatus('loading');
    setError('');

    try {
      const token = await user.getIdToken();
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
    } catch (err) {
      setError(err.message || 'PDF 생성 중 오류가 발생했습니다.');
    } finally {
      setStatus('idle');
    }
  };

  const label = !user
    ? '로그인 후 PDF 다운로드'
    : status === 'loading'
    ? 'PDF 생성 중...'
    : 'PDF 다운로드';

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        onClick={handleDownload}
        disabled={!user || status === 'loading'}
      >
        {label}
      </button>
      {!user && <span className={styles.hint}>Firebase 로그인 후 다운로드가 활성화됩니다.</span>}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default PdfDownloadButton;
