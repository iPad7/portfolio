import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const mainSkills = [
    {
      name: 'Python',
      level: 90,
      icon: '🐍'
    },
    {
      name: 'PyTorch',
      level: 85,
      icon: '🔥'
    },
    {
      name: 'TensorFlow',
      level: 80,
      icon: '🧠'
    },
    {
      name: 'Scikit-learn',
      level: 88,
      icon: '📊'
    }
  ];

  const subSkills = [
    {
      name: 'React',
      level: 85,
      icon: '⚛️'
    },
    {
      name: 'JavaScript',
      level: 80,
      icon: '📝'
    },
    {
      name: 'CSS',
      level: 75,
      icon: '🎨'
    },
    {
      name: 'Firebase',
      level: 70,
      icon: '🔥'
    }
  ];

  const SkillItem = ({ skill }) => (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillIcon}>{skill.icon}</span>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.skillBar}>
        <div
          className={styles.skillProgress}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <h2 className={`${styles.title} text-center`}>Skills</h2>

        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>🤖</span>
              Main Skills (AI & Data Science)
            </h3>
            <div className={styles.skillsList}>
              {mainSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>💻</span>
              Sub Skills (Web & Etc.)
            </h3>
            <div className={styles.skillsList}>
              {subSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.additionalInfo}>
          <p className={styles.infoText}>
            지속적인 학습을 통해 최신 기술 트렌드를 따라가며,
            실무 프로젝트를 통해 이론과 실제를 연결하는 데 중점을 두고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;