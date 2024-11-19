import React from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ContactForm from '../components/Contact/ContactForm';

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Get in Touch
        </motion.h1>
        <ContactForm />
      </motion.div>
    </Layout>
  );
};

export default ContactPage;