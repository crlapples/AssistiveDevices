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

      {/* Key Benefits */}
      <div className={styles.benefits}>
        <div className={styles.benefitBlock}>
          <Image src={product.icon1} width={512} height={512} alt="" className={styles.icon} />
          <p>Lightweight & Sturdy: Durable aluminum frame</p>
          <div className={styles.seperatorLineA} />
        </div>
        <div className={styles.benefitBlock}>
          <Image src="" width={512} height={512} alt="" className={styles.icon} />
          <p>Foldable & Portable: Quick folding mechanism</p>
          <div className={styles.seperatorLineA} />
        </div>
        <div className={styles.benefitBlock}>
          <Image src="" width={512} height={512} alt="" className={styles.icon} />
          <p>Comfortable Hand Grips: Secure, non-slip grip</p>
          <div className={styles.seperatorLineA} />
        </div>
        <div className={styles.benefitBlock}>
          <Image src="" width={512} height={512} alt="" className={styles.icon} />
          <p>Smooth Movement: Two front wheels & anti-slip feet</p>
          <div className={styles.seperatorLineA} />
        </div>
      </div>

      {/* Call to Action */}
      <div className={styles.cta}>
        <Link href=""><button className={styles.buyButton}>Buy Now</button></Link>
        <p className={styles.shippingInfo}>🚚 Fast Shipping | Secure Checkout</p>
      </div>

      {/* Detailed Product Description */}
      <div className={styles.description}>
        <h2>The Dakseon Advantage</h2>
        <p>
          Experience greater mobility and independence with the GoAid Foldable Walker. Designed for ease of use, 
          this lightweight and durable walker provides stability and comfort for everyday movement. 
          Whether indoors or outdoors, its sturdy aluminum frame and foldable design ensure convenience and reliability.
        </p>
      </div>

      {/* Customer Reviews */}
      <div className={styles.reviews}>
        <h2>What Our Customers Say</h2>
        <p>⭐⭐⭐⭐⭐ "This walker is a lifesaver! Lightweight yet sturdy." – Jane D.</p>
        <p>⭐⭐⭐⭐⭐ "Folds easily and is very stable. Great for my mom!" – Mark S.</p>
      </div>

      {/* FAQs */}
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <p><strong>Q: Is the walker adjustable?</strong></p>
        <p>A: No, this model is foldable but has a fixed height.</p>

        <p><strong>Q: How fast is shipping?</strong></p>
        <p>A: We ship within 2 business days with fast delivery options available.</p>
      </div>
    </div>
  );
};

export default ProductPage;
