import React from 'react';
import type { Metadata } from 'next';
import { mData } from "./mData.ts";
import Image from 'next/image';

interface Image {
  url: string;
  width: number;
  height: number;
  alt: string!
}

interface MData {
  title: string;
  description: string;
  other: {
    keywords: string;
  };
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: Image[];
  }
}

export const metadata: Metadata = {
  title: "GoAid Foldable Walker - Lightweight & Portable Mobility Aid",
  description: "Stay mobile with the GoAid Foldable Walker. Sturdy, lightweight, and easy to fold for storage and transport. Designed for stability and ease of use."
  other: {
    keywords:
      "walker, wheeled walker, foldable walker, walking frame, E0141, E0143, E0149, durable medical equipment, DME, mobility aid",
  },
  openGraph: {
    title: "GoAid Foldable Walker - Lightweight & Portable Mobility Aid",
    description: "A reliable foldable walker designed for comfort and stability. Features an aluminum frame, easy folding mechanism, and non-slip rubber feet.",
    url: "https://goaid.com/walker",
    type: "website",
    images: [
      {
        url: "https://goaid.com/walker.jpg", // Replace with actual walker image URL
        width: 1200,
        height: 630,
        alt: "GoAid Foldable Walker - Lightweight & Portable Mobility Aid",
      },
    ],
  },
};
