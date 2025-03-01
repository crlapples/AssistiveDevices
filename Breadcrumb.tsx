import React from "react";
import breadcrumbMData from "./breadcrumbData";

interface BreadcrumbMetadataProps {
  params: {
    pageName: string;
  }
}

interface BreadcrumbMetaData {
  "@type": string;
  name: string;
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": product["@type"],
            "name": product.name,
            "image": product.image,
            "description": product.description,
            "brand": {
              "@type": product.brand["@type"],
              "name": product.brand.name
            },
            "sku": product.sku,
            "offers": {
              "@type": product.offers["@type"],
              "url": product.offers.url,
              "priceCurrency": product.offers.priceCurrency,
              "price": product.offers.price,
              "availability": product.offers.availability,
              "seller": {
                "@type": product.offers.seller.["@type"],
                "name": product.offers.seller.name
              }
            }
          })
        }}
      />
    </>
  );
};

export default BreadcrumbMetadata;
