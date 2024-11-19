import React from "react";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Master of Science in Information Technology
        </h3>
        <p>Arizona State University, Tempe, AZ</p>
        <p>May 2024</p>
        <p>GPA: 3.97/4.00</p>
        <p>
          Relevant Coursework: Advanced DBMS, Cloud Architecture, Software
          Engineering
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">
          Bachelor of Technology in Computer Science
        </h3>
        <p>Rajiv Gandhi Technical University, India</p>
        <p>May 2021</p>
        <p>GPA: 3.79/4.00</p>
        <p>
          Relevant Coursework: Data Structure, Analysis and Designing of
          Algorithms, DBMS, Programming Languages, OOP&apos;s
        </p>
      </div>
    </motion.div>
  );
};

export default Education;
