import React from "react";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-[#FFB300]">Education</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#1DE9B6]">
          Master of Science in Information Technology
        </h3>
        <ul className="text-[#E0E0E0] space-x-3">
          <li></li>
          <li>
            <strong className="text-[#4eabda] ">University:</strong> Arizona
            State University, Tempe, AZ
          </li>
          <li>
            <strong className="text-[#4eabda]">Graduated:</strong> May 2024
          </li>
          <li>
            <strong className="text-[#4eabda]">GPA:</strong> 3.93/4.00
          </li>
          <li>
            <strong className="text-[#4eabda]">Relevant Coursework:</strong>{" "}
            Advanced DBMS, Cloud Architecture, Software Engineering
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#1DE9B6]">
          Bachelor of Technology in Computer Science
        </h3>
        <ul className="text-[#E0E0E0] space-x-3">
          <li></li>
          <li>
            <strong className="text-[#4eabda]">University:</strong> Rajiv Gandhi
            Technical University, India
          </li>
          <li>
            <strong className="text-[#4eabda]">Graduated:</strong> May 2021
          </li>
          <li>
            <strong className="text-[#4eabda]">GPA:</strong> 3.79/4.00
          </li>
          <li>
            <strong className="text-[#4eabda]">Relevant Coursework:</strong>{" "}
            Relevant Coursework: Data Structure, Analysis and Designing of
            Algorithms, DBMS, Programming Languages, OOP&apos;s
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Education;
