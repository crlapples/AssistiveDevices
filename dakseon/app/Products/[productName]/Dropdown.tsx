'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Dropdown.module.css';
import "./globals.css";
import Image from "next/image";

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
      <Link href="/"><div className={styles.horizOri}>
          <p>Home</p>
          <Image src="/home-icon.png" width={512} height={512} alt="" className={styles.icon} />
        </div></Link>
        <Link href="/Products/Walker"><div className={styles.horizOri}>
          <p>Walker</p>
          <Image src="/walkerIcon.png" width={512} height={512} alt="" className={styles.icon} />
        </div></Link>
        <Link href="/Products/Shower-Seat"><div className={styles.horizOri}>
          <p>Shower Seat</p>
          <Image src="/disabled-person.png" width={512} height={512} alt="" className={styles.icon} />
        </div></Link>
        <Link href="/About"><div className={styles.horizOri}>
          <p>About Us</p>
          <Image src="/building-icon.png" width={512} height={512} alt="" className={styles.icon} />
        </div></Link>
        <Link href="/Contact"><div className={styles.horizOri}>
          <p>Contact Us</p>
          <Image src="/landline-line-icon.png" width={512} height={512} alt="" className={styles.icon} />
        </div></Link>
        <Link href="/Orders"><div className={styles.horizOri}>
          <p>Orders</p>
          <Image src="/purchase-order-icon.png" width={512} height={512} alt="" className={styles.icon} />
        </div></Link>
      </div>
    </div>
  );
};

export default Dropdown;
