import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navigation, site } from '../../data/portfolio';
import { useAuth } from '../../context/AuthContext';
import PdfDownloadButton from '../PdfDownloadButton/PdfDownloadButton';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const { user, signOut } = useAuth();

  return (
    <aside className={`${styles.sidebar} no-print`}>
      <div className={styles.brand}>
        <span className={styles.name}>{site.name}</span>
        <span className={styles.role}>{site.title}</span>
      </div>

      <nav className={styles.nav}>
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.actions}>
        <PdfDownloadButton />
        {user ? (
          <>
            <span className={styles.user}>{user.email}</span>
            <button type="button" className={styles.signOut} onClick={signOut}>
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login" className={styles.signIn}>
            Admin login
          </Link>
        )}
      </div>

      <div className={styles.footer}>
        <span>{site.location}</span>
        <span>{site.email}</span>
      </div>
    </aside>
  );
};

export default Sidebar;
