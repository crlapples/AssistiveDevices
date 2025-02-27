import { useEffect, useState } from 'react';
import styles from './LetterFromTopAnimation.module.css'; // Assuming you have a CSS module

interface LetterFromTopAnimationProps {
  text: string; // Add a text prop to allow dynamic text input
}

const LetterFromTopAnimation: React.FC<LetterFromTopAnimationProps> = ({ text }) => {
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
      <p>
        {text.split("").map((letter, index) => (
          <span key={index} className={`animatedLetter ${styles.letter}`}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};

export default LetterFromTopAnimation;
