import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import useA4Scale from '../../hooks/useA4Scale';
import styles from './AppShell.module.css';

const AppShell = () => {
  const pageRef = useRef(null);
  useA4Scale(pageRef);

  return (
    <div className={styles.shell}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.pageArea} ref={pageRef}>
          <div className={styles.pageViewport}>
            <div className={styles.pageScale}>
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppShell;
