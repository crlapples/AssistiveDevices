import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./GoAid.module.css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoAid - Premium Walker & Bathroom Seat for Safety and Comfort",
  description: "Discover GoAid's high-quality walker and bathroom seat designed for stability, safety, and comfort. Affordable pricing with reliable shipping.",
  
}

const Home: React.FC = () -> {
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <Image
          className={styles.logo} 
          src=""
          alt="GoAid Logo - Trusted Assistive Devices"
        />
        <ul className={styles.navBar}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About Us</Link></li>
          <li><Link href="/Contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};
