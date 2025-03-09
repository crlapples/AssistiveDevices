"use client";

import React, { useState } from 'react';
import styles from "./Contact.module.css";
import "./globals.css";
import Image from "next/image";
import Dropdown from '../Dropdown';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("https://formspree.io/f/xzzdkbny", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("Your message has been sent.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Something went wrong, failed to send message");
      }
    } catch (error) {
      setStatus("Something went wrong, failed to send message");
      console.error("Error submitting form:", error);
    }
  };
  
  return (
    <div className={styles.contactContainer}>
      <div className={styles.topContainer}>
        <Image src="/logo.png" alt="Dakseon Logo" width={512} height={512} className={styles.logo} />
        <Image src="/Food_and_Drug_Administration_icon_2016.svg.png" alt="" width={480} height={720} className={styles.fda} />
        <Dropdown />
      </div>
      <div className={styles.mainIcon}>
        <Image src="/headphone-headset-icon.png" alt="" width={512} height={512} className={styles.mainIcon2} />
      </div>
      <h1>Contact Us</h1>
      <p className={styles.query}>Have a question? Need help with an order? Reach out and we will be happy to assist!</p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.together}>
          <Image src="/account-grey-icon.png" alt="" width={512} height={512} className={styles.contactIcon} />
          <div className={styles.togetherV}>
            <label className={styles.label2}>Name</label>
            <input className={styles.name} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
        </div>
        <div className={styles.together}>
          <Image src="/envelope-line-icon.png" alt="" width={512} height={512} className={styles.contactIcon} />
          <div className={styles.togetherV}>
            <label className={styles.label2}>Email</label>
            <input className={styles.email} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>
        <label className={styles.label1}>Message</label>
        <textarea className={styles.message} name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />

        <button type="submit">Send Message</button>

        <p className={styles.status}>{status}</p>
      </form>

      <h2>Direct Contact</h2>
      <p className={styles.contactEmail}>Email: alexwylee@gmail.com</p>
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

export default Contact;
