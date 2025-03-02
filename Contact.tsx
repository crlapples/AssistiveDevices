import React, { useState } from 'react';
import styles from "./Contact.module.css";
import "./globals.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.topContainer}>
        <Image src="/logo.png" alt="Dakseon Logo" width={512} height={512} className={styles.logo} />
        <Image src="/Food_and_Drug_Administration_icon_2016.svg.png" alt="" width={480} height={720} className={styles.fda} />
        <Dropdown />
      </div>
      <h1>Contact Us</h1>
      <p>Have a question? Need help with an order? Reach out and we'll be happy to assist!</p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Send Message</button>
      </form>

      <h2>Direct Contact</h2>
      <p>Email: support@goaid.com</p>
    </div>
  );
};

export default Contact;
