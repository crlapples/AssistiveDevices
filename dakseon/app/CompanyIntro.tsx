"use client";

import { useEffect, useState } from "react";
import styles from "./CompanyIntro.module.css"; // Import your CSS module

const CompanyIntro: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [hideContent, setHideContent] = useState<boolean>(false);
  const [isFadedOut, setIsFadedOut] = useState<boolean>(false);

  useEffect(() => {
    // Set a timer to mark animation as complete after 1 second (fade-in)
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 5); // 1s fade-in duration

    // Set another timer to hide the content after 3 seconds (fade-out starts)
    const hideTimer = setTimeout(() => {
      setHideContent(true);
    }, 5); // 4s in total (1s fade-in + 3s delay before fade-out starts)

    // Set another timer to mark fade-out as complete after 6 seconds
    const fadeOutTimer = setTimeout(() => {
      setIsFadedOut(true);
    }, 5000); // 7s total (1s fade-in + 3s delay + 3s fade-out)

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div
      className={`${styles.container} ${hideContent ? styles.hidden : ""} ${
        isFadedOut ? styles.onFadeComplete : ""
      }`}
    >
      <p className={styles.companyName}>
        Da<span style={{ color: "rgb(155, 248, 140)" }}>k</span>seon
      </p>
    </div>
  );
};

export default CompanyIntro;