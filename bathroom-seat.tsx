import React from 'react';
import Link from 'next/link';
import styles from "./GoAid.module.css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoAid Bathroom Seat - Secure & Stable Shower Chair",
  description: "Stay safe and comfortable in the shower with the GoAid Bathroom Seat. Designed for stability with a non-slip base and durable, water-resistant materials.",
  openGraph: {
    title: "GoAid Bathroom Seat - Secure & Stable Shower Chair",
    description: "A reliable shower seat designed for safety and stability. Features a sturdy, rust-resistant frame with non-slip feet for maximum support.",
    url: "https://goaid.com/bathroom-seat",
    type: "website",
    images: [
      {
        url: "https://goaid.com/bathroom-seat.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "GoAid Bathroom Seat - Secure & Stable Shower Chair",
      },
    ],
  },
};

const ShowerSeat: React.FC = () => {

  <Head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "GoAid Bathroom Safety Seat",
        "image": "https://yourwebsite.com/images/shower-seat.jpg",
        "description": "Secure and comfortable shower seat for enhanced bathroom safety.",
        "brand": {
          "@type": "Brand",
          "name": "GoAid"
        },
        "sku": "GA-SS-001",
        "offers": {
          "@type": "Offer",
          "url": "https://yourwebsite.com/shower-seat",
          "priceCurrency": "USD",
          "price": "79.99",
          "availability": "https://schema.org/InStock"
        }
      })
    }}
  />
</Head>
<script
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
          "name": "Shower Seat",
          "item": "https://yourwebsite.com/shower-seat"
        }
      ]
    })
  }}
/>
  return (
    <div className={styles.productContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <img className={styles.productImage} src="/images/shower-seat.jpg" alt="GoAid Bathroom Safety Seat" />
        <h1>Secure & Comfortable Bathroom Safety Seat – Stability Where It Matters Most</h1>
        <p>Enjoy a safe and relaxing bath experience with the GoAid Bathroom Safety Seat. Designed for individuals needing extra stability, this shower seat provides comfort and security. The durable, water-resistant materials and non-slip feet ensure reliable support in any bathroom setting.</p>
        <button className={styles.buyButton}>Buy Now</button>
      </div>

      {/* Key Features */}
      <div className={styles.featuresSection}>
        <h2>Key Benefits</h2>
        <ul>
          <li>✅ <strong>Sturdy & Durable</strong> – Supports up to [weight capacity] lbs for reliability</li>
          <li>✅ <strong>Water-Resistant & Rust-Proof</strong> – Built for long-lasting use</li>
          <li>✅ <strong>Non-Slip Rubber Feet</strong> – Stays steady on wet surfaces</li>
          <li>✅ <strong>Comfortable Design</strong> – Ergonomic seat for stress-free bathing</li>
        </ul>
      </div>

      {/* Customer Reviews (Placeholders for Now) */}
      <div className={styles.reviewsSection}>
        <h2>What Our Customers Say</h2>
        <div className={styles.review}>
          <p>⭐⭐⭐⭐⭐ "This seat made showering so much easier for my dad!" – <strong>Anna R. (Verified Buyer)</strong></p>
        </div>
        <div className={styles.review}>
          <p>⭐⭐⭐⭐⭐ "Stable and secure, no more worries about slipping." – <strong>John T. (Verified Buyer)</strong></p>
        </div>
      </div>

      {/* Trust Elements */}
      <div className={styles.trustSection}>
        <h2>Why Choose GoAid?</h2>
        <ul>
          <li>🔹 100% Satisfaction Guarantee</li>
          <li>🔹 Fast & Reliable Shipping</li>
          <li>🔹 Secure Checkout (Visa, PayPal, etc.)</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <button className={styles.buyButton}>Buy Now</button>
      </div>
    </div>
  );
};

export default ShowerSeat;
