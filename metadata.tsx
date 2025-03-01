import React from 'react';
import type { Metadata } from 'next';
import { mData } from "./mData";
import Image from 'next/image';

interface metadataProps {
  params: {
    pageName: string;
  }
}

interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
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

export function generateStaticParams() {
  return Object.keys(mData).map((pageName) => ({
    pageName
  }));
}

export const generateMetadata = ({ params }: metadataProps): Metadata => {
  const { pageName } = params;
  const meta = mData[pageName as keyof typeof mData];
  return {
    title: meta.title,
    description: meta.description,
    other: {
      keywords:
        meta.other.keywords
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: meta.openGraph.url,
      type: meta.openGraph.type,
      images: meta.openGraph.images
    },
  };
};
