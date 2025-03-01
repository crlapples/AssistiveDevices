import React from "react";
import breadcrumbMData from "./breadcrumbData";

interface BreadcrumbMetadataProps {
  params: {
    pageName: string;
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
  return Object.keys(breadcrumbMData).map((pageName) => ({
    pageName
  }));
}

const BreadcrumbMetadata = ({ params }: BreadcrumbMetadataProps) => {
  const { pageName } = params;
  const bread = breadcrumbMData[pageName as keyof typeof breadcrumbMData];
  
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
