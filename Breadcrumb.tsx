import React from "react";
import { breadcrumbMData } from "./breadcrumbData";

interface BreadcrumbMetadataProps {
  params: {
    breadPageName: string;
  }
}

interface ItemList {
  "@type": string;
  "position": number;
  "name": string;
  "item": string;
}

interface BreadcrumbMetaData {
  "@type": string;
  itemListElement: ItemList[];
}

export function generateStaticParams() {
  return Object.keys(breadcrumbMData).map((breadPageName) => ({
    breadPageName
  }));
}

const BreadcrumbMetadata = ({ params }: BreadcrumbMetadataProps) => {
  const { breadPageName } = params;
  const bread = breadcrumbMData[breadPageName as keyof typeof breadcrumbMData];
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": bread["@type"],
            "itemListElement": bread.itemListElement
          })
        }}
      />
    </>
  );
};

export default BreadcrumbMetadata;
