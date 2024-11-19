import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "LMS Solutions Pvt. Ltd., India",
      period: "May '21 – Jun '22",
      responsibilities: [
        "Developed and maintained scalable backend services using Java Spring Boot and Node.js.",
        "Containerized applications using Docker and automated deployments with Kubernetes.",
        "Improved code quality and maintainability by 25% using JavaScript design patterns and ES6 features.",
        "Collaborated with cross-functional teams to address backend performance issues.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "OneHash Technologies Pvt. Ltd., India",
      period: "Oct '20 – Apr '21",
      responsibilities: [
        "Built custom UIs using Flutter and JavaScript.",
        "Integrated Salesforce and Mailchimp APIs into CRM and ERP systems.",
        "Developed Progressive Web Apps (PWAs) with offline capabilities.",
        "Participated in Agile development processes and sprint planning.",
        "Tested and troubleshot APIs using Postman, improving integration efficiency by 70%.",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-[#FFB300]">
        Professional Experience
      </h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="mb-6 bg-[#1F1F1F] p-4 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h3 className="text-xl font-semibold text-[#1DE9B6]">{exp.title}</h3>
          <p className="text-[#4eabda] mb-2">
            {exp.company} | {exp.period}
          </p>
          <ul className="list-disc text-[#E0E0E0]">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;
