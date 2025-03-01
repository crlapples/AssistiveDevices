import React from 'react';
import { productMData } from "./ProductMData";

interface ProductMetadataProps {
  params: {
    productName: string;
  }
}

interface ProductMetaData {
  name: string;
  image: string;
  description: string;
  brand: {
    @type: string,
    name: string
  },
  sku: string,
  offers: {
    @type: string,
    url: string,
    priceCurrency: string,
    price: string,
    availability: string,
    seller: {
      @type: string,
      name: string
    }
  }
}

export function generateStaticParams() {
  return Object.keys(productMData).map((productName) => ({
    productName
  }));
}

const ProductMetadata = ({ params }: { ProductMetadataProps } => {
  const productName = params;
  const product = productMData[productName as keyof typeof productMData];
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": product.image,
            "description": product.description,
            "brand": {
              "@type": product.brand.@type,
              "name": product.brand.name
            },
            "sku": product.sku,
            "offers": {
              "@type": product.offers.@type,
              "url": product.offers.url,
              "priceCurrency": product.offers.priceCurrency,
              "price": product.offers.price,
              "availability": product.offers.availability,
              "seller": {
                "@type": product.offers.seller.@type,
                "name": product.offers.seller.name
              }
            }
          })
        }}
      />
    </>
  );
};

export default ProductMetadata;
