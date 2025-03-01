import React from 'react';
import styles from './ProductPage.module.css';
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { generateMetadata } from "./metadata";
import ProductMetadata from "./ProductMetadata";
import BreadcrumbMetadata from "./Breadcrumb";
import { productPageData } from "./ProductData2";

export { generateMetadata };

interface ProductPageProps {
  params: {
    productName: string;
  }
}

interface ProductPageData {
  image: string;
  imageAlt: string;
  title: string;
  tagline: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  descriptionTagline: string;
  description: string;
  review1: string;
  review2: string;
  q1: string;
  a1: string;
  q2: string;
  a2: string;
}

export function generateStaticParams() {

  return Object.keys(productPageData).map((productName) => ({
    productName
  }));
}

const ProductPage = ({ params }: ProductPageProps ) => {
  const { productName } = params;
  const product = productPageData[productName as keyof typeof productPageData];
    <ProductMetadata />
    <BreadcrumbMetadata />
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <Image src={product.image} width={451} height={800} alt={product.imageAlt} className={styles.productImage} />
        <h1>{product.title}</h1>
        <p className={styles.tagline}>{product.tagline}</p>
      </div>

            {/* Detailed Product Description */}
      <div className={styles.description}>
        <h2>{product.descriptionTagline}</h2>
        <p>{product.description}</p>
      </div>

      {/* Key Benefits */}
      <div className={styles.benefits}>
        <div className={styles.benefitBlock}>
          <Image src={product.icon1} width={512} height={512} alt={product.icon1Alt} className={styles.icon} />
          <p>{product.benefit1}</p>
          <div className={styles.seperatorLineA} />
        </div>
        <div className={styles.benefitBlock}>
          <Image src={product.icon2} width={512} height={512} alt={product.icon2Alt} className={styles.icon} />
          <p>{product.benefit2}</p>
          <div className={styles.seperatorLineA} />
        </div>
        <div className={styles.benefitBlock}>
          <Image src={product.icon3} width={512} height={512} alt={product.icon3Alt} className={styles.icon} />
          <p>{product.benefit3}</p>
          <div className={styles.seperatorLineA} />
        </div>
        <div className={styles.benefitBlock}>
          <Image src={product.icon4} width={512} height={512} alt={product.icon4Alt} className={styles.icon} />
          <p>{product.benefit4}</p>
          <div className={styles.seperatorLineA} />
        </div>
      </div>

      {/* Call to Action */}
      <div className={styles.cta}>
        <Link href={product.link}><button className={styles.buyButton}>Buy Now</button></Link>
        <p className={styles.shippingInfo}>🚚 Fast Shipping | Secure Checkout</p>
      </div>

      {/* Customer Reviews */}
      <div className={styles.reviews}>
        <h2>What Our Customers Say</h2>
        <p>{product.review1}</p>
        <p>{product.review2}</p>
      </div>

      {/* FAQs */}
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <p><strong>{product.q1}</strong></p>
        <p>{product.a1}</p>

        <p><strong>{product.q2}</strong></p>
        <p>{product.a2}</p>
      </div>
    </div>
  );
};

export default ProductPage;
