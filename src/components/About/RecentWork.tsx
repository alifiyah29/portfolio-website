import React from 'react';
import { motion } from 'framer-motion';

const RecentWork: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Recent Work</h2>
      <div className="bg-[#1F1F1F] p-4 rounded-lg">
        <h3 className="text-xl font-semibold text-[#1DE9B6]">Research Aid - Arizona State University</h3>
        <p className="text-[#FFB300] mb-2">Under Prof. Tamuchin McCreless (Sep &apos;24 – Present)</p>
        <ul className="list-disc list-inside text-[#E0E0E0] space-y-2">
          <li>Contributing to spatial data & machine learning project for optimal restaurant location prediction.</li>
          <li>Leveraging Python and Scikit-learn to analyze large sets of spatial data from New York City.</li>
          <li>Developing geospatial visualizations using Folium library for interactive data representation.</li>
          <li>Reduced prediction errors by 15% through model optimization and feature selection techniques.</li>
          <li>Creating tools and resources to empower entrepreneurs in making data-driven decisions for restaurant locations.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default RecentWork;