import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Achievements: React.FC = () => {
  const achievements = [
    { title: "Best Intern Award at LMS", image: "/images/best-intern-award.jpg" },
    { title: "Chairman's Scholarship Award for Full Attendance", image: "/images/scholarship-award.jpg" },
    { title: "Top Event Organizer in Tech Fest", image: "/images/top-organizer.jpg" },
    { title: "Participated in Various Motorbike Rallies", image: "/images/motorbike-rally.jpg" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-section p-4 rounded-lg flex flex-col items-center h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-full h-48 mb-2">
              <Image 
                src={achievement.image} 
                alt={achievement.title} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
            </div>
            <p className="text-text-secondary text-center">{achievement.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;