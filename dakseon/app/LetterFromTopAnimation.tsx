'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './LetterFromTopAnimation.module.css';

interface LetterFromTopAnimationProps {
  text: string;
  className?: string;
}

const LetterFromTopAnimation: React.FC<LetterFromTopAnimationProps> = ({ text, className }) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 } // Adjust threshold for when animation should trigger
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.textContainer} ${className || ''}`}>
      <p>
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className={styles.word}>
            {word.split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className={`${styles.letter} ${animate ? styles.moveDown : ''}`}
                style={{ transitionDelay: `${(wordIndex * 100) + (letterIndex * 15)}ms` }}
              >
                {letter}
              </span>
            ))}
            <span>&nbsp;</span> {/* Preserve space between words */}
          </span>
        ))}
      </p>
    </div>
  );
};

export default LetterFromTopAnimation;
