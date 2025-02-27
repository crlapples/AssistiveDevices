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
