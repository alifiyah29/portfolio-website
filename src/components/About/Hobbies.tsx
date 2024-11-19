import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hobbies: React.FC = () => {
  const hobbies = [
    { name: "Motor-Bike Riding", image: "/images/motorbike-riding.jpg" },
    { name: "Hiking", image: "/images/hiking.jpg" },
    { name: "Reading", image: "/images/reading.jpg" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Hobbies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="bg-section p-4 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-32 h-32 mx-auto mb-2">
              <Image src={hobby.image} alt={hobby.name} layout="fill" objectFit="cover" className="rounded-full" />
            </div>
            <p className="text-text-secondary">{hobby.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hobbies;