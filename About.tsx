import React from 'react';
import styles from "./About.module.css";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Dakseon</h1>
      <p>At Dakseon, we are committed to providing high-quality mobility and safety products that help individuals live with greater independence and confidence.</p>
      
      {/* Image of happy seniors using mobility aids */}
      <div className={styles.imageContainer}>
        <Image 
          src="/images/happy-seniors.jpg" 
          alt="Happy seniors using mobility aids" 
          width={1600} 
          height={902} 
          className={styles.aboutImage}
        />
      </div>

      <h2>Our Story</h2>
      <p>With a decade of experience in the assistive device industry, we understand the importance of reliable and well-designed products. Our carefully selected mobility and bathroom safety solutions are built to enhance everyday life, ensuring both safety and comfort.</p>

      <h2>Our Commitment</h2>
      <p>We believe that everyone deserves to move freely and feel secure in their home. Our products are designed to offer durability, ease of use, and peace of mind for individuals and caregivers alike.</p>

      <h2>Need Help?</h2>
      <p>Have questions about our products? Contact our team <Link href="/contact">here</Link>, and we’ll be happy to assist you.</p>
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
  );
};

export default About;
