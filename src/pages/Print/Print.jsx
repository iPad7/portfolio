import React, { useEffect, useMemo } from 'react';
import { projects } from '../../data/portfolio';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Career from '../Career/Career';
import TechStack from '../TechStack/TechStack';
import Projects from '../Projects/Projects';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import Contact from '../Contact/Contact';
import styles from './Print.module.css';

const Print = () => {
  useEffect(() => {
    document.documentElement.classList.add('print-mode');
    return () => document.documentElement.classList.remove('print-mode');
  }, []);

  const pages = useMemo(() => {
    const basePages = [
      { key: 'home', component: Home },
      { key: 'profile', component: Profile },
      { key: 'career', component: Career },
      { key: 'tech-stack', component: TechStack },
      { key: 'projects', component: Projects }
    ];

    const projectPages = projects.map((project) => ({
      key: `project-${project.slug}`,
      component: ProjectDetail,
      props: { project }
    }));

    return [...basePages, ...projectPages, { key: 'contact', component: Contact }];
  }, []);

  return (
    <div className={styles.printRoot}>
      {pages.map((page, index) => {
        const PageComponent = page.component;
        const pageNumber = String(index + 1).padStart(2, '0');
        return <PageComponent key={page.key} pageNumber={pageNumber} {...page.props} />;
      })}
    </div>
  );
};

export default Print;
