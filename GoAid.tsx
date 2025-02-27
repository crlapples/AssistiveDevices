import React from 'react';
import Link from 'next/link';
import styles from "./GoAid.module.css";
import "./globals.css";
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "GoAid - Premium Walker & Bathroom Seat for Safety and Comfort",
  description: "Discover GoAid's high-quality walker and bathroom seat designed for stability, safety, and comfort. Affordable pricing with reliable shipping.",
  openGraph: {
    title: "Mobility Walker & Shower Seat for Independent Living",
    description: "GoAid offers a premium walker for enhanced mobility and a secure bathroom seat for added safety. Designed for comfort and durability.",
    url: "",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 600,
        alt: "GoAid Mobility Walker"
      },
      {
        url: "",
        width: 1200,
        height: 600,
        alt: "GoAid Shower Seat"
      }
    ]
  }
};

const Home: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "GoAid",
            "url": "https://yourwebsite.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yourwebsite.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      <div className={styles.homeContainer}>
        <nav className={styles.navBar}>
          <img src="/logo.png" alt="GoAid Logo" className={styles.logo} />
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/walker">Walker</Link></li>
            <li><Link href="/shower-seat">Shower Seat</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* ✅ Hero Section */}
        <header className={styles.heroSection}>
          <h1>Reliable Mobility & Safety Products</h1>
          <p>Enhance your independence and safety with GoAid’s top-quality walker and shower seat.</p>
          <button className={styles.shopButton}><Link href="/walker">Shop Now</Link></button>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/happy-seniors.jpg" 
              alt="Happy seniors enjoying mobility support" 
              width={800} 
              height={500} 
              className={styles.heroImage}
            />
          </div>
        </header>

        {/* ✅ Featured Products */}
        <section className={styles.featuredProducts}>
          <h2>Our Bestsellers</h2>
          
          {/* Walker */}
          <div className={styles.productCard}>
            <img src="/images/walker.jpg" alt="GoAid Mobility Walker" />
            <h3>GoAid Mobility Walker</h3>
            <p>Lightweight, foldable support for everyday mobility.</p>
            <button><Link href="/walker">View Product</Link></button>
          </div>

          {/* Shower Seat */}
          <div className={styles.productCard}>
            <img src="/images/shower-seat.jpg" alt="GoAid Shower Safety Seat" />
            <h3>GoAid Shower Safety Seat</h3>
            <p>Secure and comfortable shower seating for added safety.</p>
            <button><Link href="/shower-seat">View Product</Link></button>
          </div>
        </section>

        {/* ✅ Make the Smart Choice with GoAid */}
        <section className={styles.whyChooseUs}>
          <h2>Make the Smart Choice with GoAid</h2>
          <ul>
            <li>🔹 100% Satisfaction Guarantee</li>
            <li>🔹 Fast & Reliable Shipping</li>
            <li>🔹 Designed for Comfort & Safety</li>
          </ul>
        </section>

        {/* ✅ Customer Testimonials */}
        <section className={styles.testimonials}>
          <h2>What Our Customers Say</h2>
          <div className={styles.review}>
            <p>⭐⭐⭐⭐⭐ "Amazing quality, my dad loves the walker!" – <strong>Sarah K.</strong></p>
          </div>
          <div className={styles.review}>
            <p>⭐⭐⭐⭐⭐ "The shower seat is stable and comfortable." – <strong>James L.</strong></p>
          </div>
        </section>

        {/* ✅ Call to Action */}
        <section className={styles.ctaSection}>
          <h2>Ready to Improve Your Mobility & Safety?</h2>
          <button className={styles.shopButton}><Link href="/walker">Shop Now</Link></button>
        </section>
      </div>
    </>
  );
};

export default Home;
