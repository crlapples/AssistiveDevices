'use client';

import { useEffect, useState } from 'react';
import styles from './LetterFromTopAnimation.module.css'; // Assuming you have a CSS module

interface LetterFromTopAnimationProps {
  text: string; // Allow dynamic text input
  className?: string;
}

const LetterFromTopAnimation: React.FC<LetterFromTopAnimationProps> = ({ text, className }) => {
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Set the mounted state to true after the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger animation after component mounts once and prevent unnecessary state changes
  useEffect(() => {
    if (mounted) {
      setAnimate(true); // This triggers the animation once mounted
    }
  }, [mounted]); // Depend on `mounted` state to ensure only one effect is called

  if (!mounted) {
    return null; // Ensuring component is not rendered before mounted
  }

  return (
    <div className={`${styles.textContainer} ${className || ''}`}>
      <p>
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className={`${styles.letter} ${animate ? styles.moveDown : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }} // Optional for staggered animation
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};

export default LetterFromTopAnimation;
