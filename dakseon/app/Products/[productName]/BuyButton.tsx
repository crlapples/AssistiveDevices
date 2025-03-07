"use client";

import React from "react";
import Link from 'next/link';
import styles from "./BuyButton.module.css";

interface BuyButtonProps {
  sessionKey: string;
  link: string;
  linkClassName?: string;
  buttonClassName?: string;
}

const BuyButton: React.FC<BuyButtonProps> = ({ sessionKey, link, linkClassName, buttonClassName }) => {
  const handleBuy = () => {
    sessionStorage.setItem(sessionKey, "true");
  };

  return (
    <a href={link} className={linkClassName}>
      <button className={buttonClassName} onClick={handleBuy}>Buy Now</button>
    </a>
  );
};

export default BuyButton;
