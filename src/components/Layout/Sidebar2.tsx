import React from 'react';
import { motion } from 'framer-motion';

interface Sidebar2Props {
  setActiveSection: (section: string) => void;
}

const Sidebar2: React.FC<Sidebar2Props> = ({ setActiveSection }) => {
  const sections = [
    'Education',
    'Experience',
    'Recent Work',
    'Skills',
    'Hobbies',
    'Achievements',
    'Certifications',
  ];

  return (
    <motion.aside
      className="bg-[#1F1F1F] p-4 rounded-lg"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section}>
            <motion.button
              onClick={() => setActiveSection(section)}
              className="w-full text-left text-white py-2 px-4 rounded-lg hover:bg-[#212121]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section}
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
};

export default Sidebar2;