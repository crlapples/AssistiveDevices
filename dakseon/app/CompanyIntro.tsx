'use client';

import { useEffect, useState } from 'react';
import styles from './CompanyIntro.module.css'; // Import your CSS module

const CompanyIntro: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [hideContent, setHideContent] = useState<boolean>(false);

  useEffect(() => {
    // Set a timer to mark animation as complete after 1 second
    const timer = setTimeout(() => {
      setAnimationComplete(true); // Animation complete (fade-in)
    }, 1000); // 1000ms = 1 second (fade-in)

    // Set another timer to hide the content after 3 seconds
    const hideTimer = setTimeout(() => {
      setHideContent(true); // Hide the entire content
    }, 3000); // 3000ms = 3 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    }; // Cleanup timers
  }, []);

  return (
    <div className={`${styles.container} ${hideContent ? styles.hidden : ''}`}>
      <p className={`${styles.companyName} ${animationComplete ? styles.hidden : ''}`}>
        Da<span style={{ color: "rgb(155, 248, 140)" }}>k</span>seon
      </p>
    </div>
  );
};

export default CompanyIntro;
