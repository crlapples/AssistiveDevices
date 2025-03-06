"use client";

import React from "react";
import Link from 'next/link';

interface BuyButtonProps {
  sessionKey: string;
  link: string;
  className?: string;
}

const BuyButton: React.FC<BuyButtonProps> = ({ sessionKey, link, className }) => {
  const handleBuy = () => {
    sessionStorage.setItem(sessionKey, "true");
  };

  return (
    <Link href={link}>
      <button className={className} onClick={handleBuy}>Buy Now</button>
    </Link>
  );
};

export default BuyButton;
