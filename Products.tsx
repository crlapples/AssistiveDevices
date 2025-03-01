import React from 'react';
import styles from './ProductPage.module.css';
import "./globals.css";
import generateMetadata from "./metadata";
import ProductMetadata from "./ProductMetadata";
import BreadcrumbMetadata from "./Breadcrumb";

generateMetadata();

const Walker = () => {
  <ProductMetadata />
  <BreadcrumbMetadata />
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <img src="/images/walker.jpg" alt="GoAid Foldable Walker" className={styles.productImage} />
        <h1>GoAid Foldable Walker – Lightweight & Portable Mobility Aid</h1>
        <p className={styles.tagline}>Walk with confidence – stable, secure, and easy to fold.</p>
      </div>

      {/* Key Benefits */}
      <ul className={styles.benefits}>
        <li>✅ Lightweight & Sturdy: Durable aluminum frame</li>
        <li>✅ Foldable & Portable: Quick folding mechanism</li>
        <li>✅ Comfortable Hand Grips: Secure, non-slip grip</li>
        <li>✅ Smooth Movement: Two front wheels & anti-slip feet</li>
      </ul>

      {/* Call to Action */}
      <div className={styles.cta}>
        <button className={styles.buyButton}>Buy Now</button>
        <p className={styles.shippingInfo}>🚚 Fast Shipping | Secure Checkout</p>
      </div>

      {/* Detailed Product Description */}
      <div className={styles.description}>
        <h2>The GoAid Advantage</h2>
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

export default Walker;
