import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    contactMethod: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_7nu57kn",
        "template_px55uby",
        formData,
        "ORCDkb-QzLh9naqnF"
      );
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
        contactMethod: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-section p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-white mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-background text-white p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-background text-white p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-white mb-2">
          Contact Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-background text-white p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactMethod" className="block text-white mb-2">
          Preferred Contact Method
        </label>
        <select
          id="contactMethod"
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
          required
          className="w-full bg-background text-white p-2 rounded"
        >
          <option value="">Select a method</option>
          <option value="call">Call</option>
          <option value="message">Message</option>
          <option value="email">Email</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full bg-background text-white p-2 rounded h-32"
        ></textarea>
      </div>
      <motion.button
        type="submit"
        className="bg-accent-teal text-black px-4 py-2 rounded"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
