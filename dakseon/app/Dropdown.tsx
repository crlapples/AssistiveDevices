import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Dropdown.module.css';
import "./globals.css";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close dropdown when clicked outside
  const closeDropdown = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener to close dropdown when clicked outside
    document.addEventListener('click', closeDropdown);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className={styles.dropdown}>
      <img src="/menu.png" alt="Menu" className={styles.menu} onClick={toggleDropdown} />
      {isOpen && ( 
        <div className={`${styles.dropdownList} ${isOpen ? styles.open : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/walker">Walker</Link>
          <Link href="/shower-seat">Shower Seat</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;