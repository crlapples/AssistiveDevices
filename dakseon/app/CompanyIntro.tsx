'use client';

import { useEffect, useState } from 'react';
import styles from './CompanyIntro.module.css';

const CompanyIntro: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    // Set a timer to mark animation as complete after 1 second (fade-in)
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    // Set another timer to fade out everything after 3 seconds
    const hideTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`${styles.container} ${fadeOut ? styles.hidden : ''}`}>
      <p className={`${styles.companyName} ${fadeOut ? styles.fadeOut : ''}`}>
        Da<span style={{ color: "rgb(155, 248, 140)" }}>k</span>seon
      </p>
    </div>
  );
};

export default CompanyIntro;
