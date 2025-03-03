'use client';

import React, { useState } from 'react';
import styles from "./Contact.module.css";
import "./globals.css";

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
        setStatus("Thank you for contacting me!");
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
      <h1>Contact Us</h1>
      <p className={styles.query}>Have a question? Need help with an order? Reach out and we'll be happy to assist!</p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label>Name</label>
        <input className={styles.name} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email</label>
        <input className={styles.email} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Message</label>
        <textarea className={styles.message} name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />

        <button type="submit">Send</button>
      </form>

      <h2>Direct Contact</h2>
      <p className={styles.contactEmail}>Email: support@goaid.com</p>
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

export default Contact;
