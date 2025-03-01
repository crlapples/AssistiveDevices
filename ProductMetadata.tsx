import React from 'react';
import { productMData } from "./ProductMData";
import Image from 'next/image';

interface ProductMetadataProps {
  params: {
    productName: string;
  }
}

interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface ProductMetaData {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: Image[];
  }
}

export function generateStaticParams() {
  return Object.keys(productMData).map((productName) => ({
    productName
  }));
}

