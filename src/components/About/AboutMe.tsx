import React from "react";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
      <ul className="space-y-4 text-[#E0E0E0]">
        <li>
          <strong className="text-[#1DE9B6]">
            Tech Enthusiast & Developer:
          </strong>{" "}
          Software Developer with expertise in backend development, cloud
          computing, and full-stack technologies, including JavaScript, Node.js,
          React, and AWS.
        </li>
        <li>
          <strong className="text-[#1DE9B6]">Passionate About Learning:</strong>{" "}
          Holds a Master&apos;s in Information Technology from Arizona State
          University with a GPA of 3.93/4.00 and a recipient of the
          Chairman&apos;s Scholarship Award for full attendance.
        </li>
        <li>
          <strong className="text-[#1DE9B6]">Outdoor Enthusiast:</strong> Enjoys
          hiking and motorbike riding, actively participating in motorbike
          rallies and exploring nature.
        </li>
        <li>
          <strong className="text-[#1DE9B6]">
            Achiever in Professional and Academic Life:
          </strong>{" "}
          Awarded Best Intern at LMS Solutions and recognized as Top Event
          Organizer at Tech Fest.
        </li>
        <li>
          <strong className="text-[#1DE9B6]">Lifelong Learner:</strong> Avid
          reader, constantly seeking new knowledge to grow both personally and
          professionally.
        </li>
      </ul>
    </motion.div>
  );
};

export default AboutMe;
