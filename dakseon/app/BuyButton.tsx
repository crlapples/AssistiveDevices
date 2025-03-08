"use client";

import React from "react";
import Link from 'next/link';
import styles from "./BuyButton.module.css";

interface BuyButtonProps {
  sessionKey1: string;
  sessionKey2: string;
  link: string;
  linkClassName?: string;
  buttonClassName?: string;
}

const BuyButton: React.FC<BuyButtonProps> = ({ sessionKey1, sessionKey2, link, linkClassName, buttonClassName }) => {
  const handleBuy = () => {
    sessionStorage.setItem(sessionKey1, "true");
    sessionStorage.setItem(sessionKey2, "true");
  };

  return (
    <a href={link} className={linkClassName}>
      <button className={buttonClassName} onClick={handleBuy}>Shop Now</button>
    </a>
  );
};

export default BuyButton;
