import React, { useState } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Sidebar2 from '../components/Layout/Sidebar2';
import AboutMe from '../components/About/AboutMe';
import Education from '../components/About/Education';
import Experience from '../components/About/Experience';
import RecentWork from '../components/About/RecentWork';
import Skills from '../components/About/Skills';
import Hobbies from '../components/About/Hobbies';
import Achievements from '../components/About/Achievements';
import Certifications from '../components/About/Certifications';

const AboutPage: NextPage = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'About Me': return <AboutMe />;
      case 'Education': return <Education />;
      case 'Experience': return <Experience />;
      case 'Recent Work': return <RecentWork />;
      case 'Skills': return <Skills />;
      case 'Hobbies': return <Hobbies />;
      case 'Achievements': return <Achievements />;
      case 'Certifications': return <Certifications />;
      default: return <AboutMe />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <motion.div 
          className="md:w-3/4 bg-[#212121] p-6 rounded-lg mr-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderActiveSection()}
        </motion.div>
        <div className="md:w-1/4 mt-4 md:mt-0">
          <Sidebar2 activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;