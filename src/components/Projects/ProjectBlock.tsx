import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectBlockProps {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ name, description, imageUrl, link }) => {
  return (
    <motion.div
      className="bg-[#212121] rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={imageUrl} alt={name} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-[#B0BEC5] mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1DE9B6] hover:text-[#64FFDA]"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectBlock;