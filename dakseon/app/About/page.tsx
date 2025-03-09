import React from 'react';
import styles from "./About.module.css";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Dropdown from '../Dropdown';
import LetterFromTopAnimation from '../LetterFromTopAnimation';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.topContainer}>
        <Image src="/logo.png" alt="Dakseon Logo" width={512} height={512} className={styles.logo} />
        <Image src="/Food_and_Drug_Administration_icon_2016.svg.png" alt="" width={480} height={720} className={styles.fda} />
        <Dropdown />
      </div>
      <div className={styles.firstIcon}>
        <h1>About Dakseon</h1>
        <Image src="/medicine-wellness-icon.png" alt="" width={512} height={512} className={styles.firstIcon2} />
      </div>
      
      <LetterFromTopAnimation className={styles.letters1} text="At Dakseon, we are committed to providing high-quality mobility and safety products that help individuals live with greater independence and confidence." />
      
      <div className={styles.aboutRow}>
        <div className={styles.aboutVer}>
          <Image src="/ten-years-icon.png" alt="" width={512} height={512} className={styles.secondIcon} />
          <p>Celebrating 10 years of excellence in medical equipment, delivering trusted solutions and unparalleled customer satisfaction.</p>
        </div>
        <div className={styles.aboutVer}>
          <Image src="/quality-assurance-icon.png" alt="" width={512} height={512} className={styles.thirdIcon} />
          <p>Committed to quality assurance, delivering reliable and durable mobility aids for enhanced safety and comfort.</p>
        </div>
        <div className={styles.aboutVer}>
          <Image src="/rocket-launch-line-icon.png" alt="" width={512} height={512} className={styles.thirdIcon} />
          <p>Our mission is to provide high-quality, reliable mobility aids and healthcare solutions, ensuring safety, comfort, and independence for every customer.</p>
        </div>
      </div>

      {/* Image of happy seniors using mobility aids */}
      <div className={styles.imageContainer}>
        <Image 
          src="/image_fx_ (28).jpg" 
          alt="Happy senior using mobility aids" 
          width={1600} 
          height={902} 
          className={styles.aboutImage}
        />
      </div>

      <h2>Our Story</h2>
      <LetterFromTopAnimation className={styles.letters2} text="With a decade of experience in the assistive device industry, we understand the importance of reliable and well-designed products. Our carefully selected mobility and bathroom safety solutions are built to enhance everyday life, ensuring both safety and comfort." />

      <h2 className={styles.secondh2}>Our Commitment</h2>
      <LetterFromTopAnimation className={`${styles.letters3} ${styles.thirdp}`} text="We believe that everyone deserves to move freely and feel secure in their home. Our products are designed to offer durability, ease of use, and peace of mind for individuals and caregivers alike."/>

      <h2>Need Help?</h2>
      <p className={styles.lastP}>Have questions about our products? Contact our team <Link href="/contact"><span style={{ color: "#2f7ab6" }}>here</span></Link>, and we’ll be happy to assist you.</p>
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
              <Image src="/LI-In-Bug.png" width={512} height={512} alt="" />
              <Image src="/Facebook_Logo_Primary.png" width={512} height={512} alt="" />
            </div>
          </div>
        </footer>
    </div>
  );
};

export default About;
