'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Dropdown.module.css';
import "./globals.css";

const Dropdown: React.FC = () => {
  console.log("Dropdown component loaded");
  const [isOpen, setIsOpen] = useState(false);
  console.log("Dropdown state:", isOpen);

  // Toggle the dropdown menu
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the click event from propagating to the document
    console.log("Menu clicked!");
    setIsOpen((prevState) => !prevState);
  };

  // Close dropdown when clicked outside
  const closeDropdown = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.dropdown}>
      <img src="/menu.png" alt="Menu" className={styles.menu} onClick={(e) => {
        console.log("Menu clicked!");
        toggleDropdown(e);
      }} />
      <div className={`${styles.dropdownList} ${isOpen ? styles.open : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/walker">Walker</Link>
        <Link href="/shower-seat">Shower Seat</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Dropdown;