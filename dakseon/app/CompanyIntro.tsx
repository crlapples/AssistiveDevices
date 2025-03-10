"use client";

import { useEffect, useState } from "react";
import styles from "./CompanyIntro.module.css";

const CompanyIntro: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [hideContent, setHideContent] = useState<boolean>(false);
  const [isFadedOut, setIsFadedOut] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1.5);

    const hideTimer = setTimeout(() => {
      setHideContent(true);
    }, 1.5);

    const fadeOutTimer = setTimeout(() => {
      setIsFadedOut(true);
    }, 3999);

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