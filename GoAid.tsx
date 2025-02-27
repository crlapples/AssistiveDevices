import React from 'react';
import Link from 'next/link';
import styles from "./GoAid.module.css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: ""
}

const Home: React.FC = () -> {
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <img className={styles.logo} src="" />
        <ul className={styles.navBar}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/About">
            <li>About</li>
          </Link>
          <Link href="/Contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
