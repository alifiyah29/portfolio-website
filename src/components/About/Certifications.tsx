import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Certifications: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Certifications</h2>
      <div className="bg-section p-4 rounded-lg inline-block">
        <Image src="/images/aws-badge.png" alt="AWS Cloud Practitioner Certification" width={300} height={200} className="rounded-lg" />
        <p className="text-text-secondary mt-2">AWS Cloud Practitioner CLF C02</p>
      </div>
    </motion.div>
  );
};

export default Certifications;