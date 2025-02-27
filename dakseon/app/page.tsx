import React from 'react';
import Link from 'next/link';
import styles from "./Dakseon.module.css";
import "./globals.css";
import type { Metadata } from "next";
import Image from 'next/image';
import CompanyIntro from './CompanyIntro';
import Dropdown from "./Dropdown";

export const metadata: Metadata = {
  title: "Dakseon - Premium Walker & Bathroom Seat for Safety and Comfort",
  description: "Discover Dakseon's high-quality walker and bathroom seat designed for stability, safety, and comfort. Affordable pricing with reliable shipping.",
  openGraph: {
    title: "Mobility Walker & Shower Seat for Independent Living",
    description: "Dakseon offers a premium walker for enhanced mobility and a secure bathroom seat for added safety. Designed for comfort and durability.",
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
      <CompanyIntro />
      <div className={styles.homeContainer}>
        <div className={styles.topContainer}>
          <img src="/logo.png" alt="Dakseon Logo" className={styles.logo} />
          <Dropdown />
        </div>
        <header className={styles.heroSection}>
          <h1>Reliable Mobility & Safety Products</h1>
          <div className={styles.imageContainer1}>
            <Image 
              src="/images/happy-senior.jpg" 
              alt="Happy senior enjoying mobility support" 
              width={1600} 
              height={902} 
              className={styles.heroImage1}
            />
          </div>
          <p>Enhance your independence and safety with Dakseon’s top-quality walker and shower seat.</p>
          <div className={styles.buttonContainer}>
            <button className={styles.shopButton}><Link href="/walker">Shop Now</Link></button>
          </div>
        </header>

        {/* ✅ Make the Smart Choice with GoAid */}
        <section className={styles.whyChooseUs}>
          <p>At Dakseon, we are dedicated to enhancing mobility and safety for individuals who value independence. We offer premium-quality walkers and shower seats designed for comfort, stability, and ease of use. Our mission is to provide affordable, reliable solutions that empower our customers to live with greater confidence and security, every day.</p>
          <div className={styles.imageContainer2}>
            <Image 
              src="/images/happy-senior.jpg" 
              alt="Happy senior enjoying mobility support" 
              width={1600} 
              height={902} 
              className={styles.heroImage2}
            />
          </div>
          <h2>Make the Smart Choice with GoAid</h2>
          <ul>
            <li>100% Satisfaction Guarantee</li>
            <li>Minimal Expenses</li>
            <li>Designed for Comfort & Safety</li>
          </ul>
        </section>

        {/* ✅ Featured Products */}
        <section className={styles.featuredProducts}>
          <h2>Our Bestsellers</h2>
          
          {/* Walker */}
          <div className={styles.productCard}>
            <img src="/images/walker.jpg" alt="GoAid Mobility Walker" />
            <h3>Dakseon Mobility Walker</h3>
            <p>Lightweight, foldable support for everyday mobility.</p>
            <button><Link href="/walker">View Product</Link></button>
          </div>

          {/* Shower Seat */}
          <div className={styles.productCard}>
            <img src="/images/shower-seat.jpg" alt="GoAid Shower Safety Seat" />
            <h3>Dakseon Shower Safety Seat</h3>
            <p>Secure and comfortable shower seating for added safety.</p>
            <button><Link href="/shower-seat">View Product</Link></button>
          </div>

          <p>Dakseon furthermore provides wholesale pricing on walkers and shower seats, offering businesses cost-effective solutions with reliable shipping and consistent product quality to support growth and meet customer demand.</p>
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

        <footer>
          <div className={styles.verticalOri}>

          </div>
          <div className={styles.verticalOri}>

          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
