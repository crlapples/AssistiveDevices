import React from 'react';
import styles from './Products.module.css';
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { generateMetadata as getMetadata } from "./metadata";
import ProductMetadata from "./ProductMetadata";
import BreadcrumbMetadata from "./Breadcrumb";
import { productPageData } from "./ProductData2";
import Dropdown from './Dropdown';
import LetterFromTopAnimation from './LetterFromTopAnimation';

interface ProductPageProps {
  params: {
    productName: string;
    breadPageName: string;
    pageName: string;
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
  const productParams = Object.keys(productPageData).map((productName) => ({
    productName
  }));

  const productMetaParams = Object.keys(ProductMetadata).map((productName) => ({
    productName
  }));

  const breadcrumbParams = Object.keys(BreadcrumbMetadata).map((breadPageName) => ({
    breadPageName
  }));

  return [...productParams, ...productMetaParams, ...breadcrumbParams];
}

const ProductPage = ({ params }: ProductPageProps ) => {
  const { productName, breadPageName, pageName } = params;
  const product = productPageData[productName as keyof typeof productPageData];
  const metadata = getMetadata({ pageName: productName });

  return (
    <>
      <ProductMetadata productName={productName} />
      <BreadcrumbMetadata breadPageName={productName} />
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Image src="/logo.png" alt="Dakseon Logo" width={512} height={512} className={styles.logo} />
          <Image src="/Food_and_Drug_Administration_icon_2016.svg.png" alt="" width={480} height={720} className={styles.fda} />
          <Dropdown />
        </div>

       {/* Hero Section */}
        <div className={styles.hero}>
          <p className={styles.pageTitle}>Featured</p>
          <Image src={product.image} width={451} height={800} alt={product.imageAlt} className={styles.productImage} />
          <h1>{product.title}</h1>
          <p className={styles.tagline}>{product.tagline}</p>
        </div>

            {/* Detailed Product Description */}
        <div className={styles.description}>
          <h2>{product.descriptionTagline}</h2>
          <LetterFromTopAnimation className={styles.letters1} text={product.description} />
        </div>

                      {/* Call to Action */}
        <div className={styles.cta}>
          <Link href={product.link}><button className={styles.buyButton}>Buy Now</button></Link>
          <p className={styles.shippingInfo}>🚚 Fast Shipping | Secure Checkout</p>
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
          </div>
        </div>

      {/* Customer Reviews */}
        <div className={styles.testimonials}>
          <h2>What Our Customers Say</h2>
          <div className={styles.reviews}>
            <div className={styles.review}>
              <p>{product.review1}</p>
            </div>
            <div className={styles.review}>
              <p>{product.review2}</p>
            </div>
          </div>
        </div>

      {/* FAQs */}
        <div className={styles.faq}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqVer}>
            <p><strong>{product.q1}</strong></p>
            <p>{product.a1}</p>

            <p><strong>{product.q2}</strong></p>
            <p>{product.a2}</p>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.verticalOriA}>
            <strong>
              <p>Return to Top</p>
            </strong>
            <Image src="/wheelchair-icon.png" width={512} height={512} alt="" className={styles.wheelchairIcon} />
            <p>© Copyright</p>
          </div>
          <div className={styles.verticalOriB}>
            <div className={styles.horizontalOri}>
              <Image src="/instagram.1024x1024.png" width={512} height={512} alt="" />
              <Image src="/logo-black.png" width={512} height={512} alt="" className={styles.x} />
              <Image src="/tiktok.946x1024.png" width={512} height={512} alt="" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProductPage;
