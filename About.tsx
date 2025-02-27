import React from 'react';
import styles from "./About.module.css";
import "./globals.css";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About GoAid</h1>
      <p>At GoAid, we are committed to providing high-quality mobility and safety products that help individuals live with greater independence and confidence.</p>
      
      {/* Image of happy seniors using mobility aids */}
      <div className={styles.imageContainer}>
        <Image 
          src="/images/happy-seniors.jpg" 
          alt="Happy seniors using mobility aids" 
          width={800} 
          height={500} 
          className={styles.aboutImage}
        />
      </div>

      <h2>Our Story</h2>
      <p>With a decade of experience in the assistive device industry, we understand the importance of reliable and well-designed products. Our carefully selected mobility and bathroom safety solutions are built to enhance everyday life, ensuring both safety and comfort.</p>

      <h2>Our Commitment</h2>
      <p>We believe that everyone deserves to move freely and feel secure in their home. Our products are designed to offer durability, ease of use, and peace of mind for individuals and caregivers alike.</p>

      <h2>Need Help?</h2>
      <p>Have questions about our products? Contact our team <a href="/contact">here</a>, and we’ll be happy to assist you.</p>
    </div>
  );
};

export default About;
