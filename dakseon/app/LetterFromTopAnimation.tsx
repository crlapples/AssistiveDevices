import { useEffect, useState } from 'react';
import styles from './LetterFromTopAnimation.module.css'; // Assuming you have a CSS module

const LetterFromTopAnimation: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // Set the mounted state to true after the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, render nothing (or render loading)
  if (!mounted) {
    return null;
  }

  // Animate text letters from the top
  useEffect(() => {
    const letters = document.querySelectorAll('.animatedLetter');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('moveDown');
      }, index * 100); // Delay the animation for each letter
    });
  }, []);

  return (
    <div className={styles.textContainer}>
      <h1>
        {"Hello World".split("").map((letter, index) => (
          <span key={index} className={`animatedLetter ${styles.letter}`}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default LetterFromTopAnimation;
