import React from 'react';
import type { Metadata } from 'next';
import { mData } from "./mData";
import Image from 'next/image';

interface metadataProps {
  pageName: string;
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
  return Object.keys(mData).map((pageName) => ({
    pageName
  }));
}

export const generateMetadata = ({ pageName }: metadataProps): Metadata => {
  const meta = mData[pageName as keyof typeof mData];
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: meta.openGraph.url,
      type: meta.openGraph.type as 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other',
      images: meta.openGraph.images
    },
  };
};
