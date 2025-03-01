import React from "react";
import breadcrumbMData from "./breadcrumbData";

interface BreadcrumbMetadataProps {
  params: {
    pageName: string;
  }
}

interface BreadcrumbMetaData {
  "@type": string;
  itemListElement: ;
  image: string;
  description: string;
  brand: {
    "@type": string,
    name: string
  },
  sku: string,
  offers: {
    "@type": string,
    url: string,
    priceCurrency: string,
    price: string,
    availability: string,
    seller: {
      "@type": string,
      name: string
    }
  }
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
      <script>
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yourwebsite.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Walker",
                "item": "https://yourwebsite.com/walker"
              } 
            ]
          })
        }}
      />
    </>
  );
};

export default BreadcrumbMetadata;
