import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Programming & Markup Languages",
      skills: ["JavaScript", "jQuery", "Python", "Java", "TypeScript", ".NET", "Shell Scripting", "IDE Extensions", "Scala"]
    },
    {
      name: "Web Development & Frameworks",
      skills: ["React.js", "React-Native", "Next.js", "Angular.js", "Vue.js", "Node.js", "Express.js", "Django", "HTML/CSS", "WordPress", "RESTful API", "GraphQL", "Postman", "Flutter"]
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS - Terraform", "EC2", "Lambda", "S3", "Azure", "Kubernetes", "Docker", "Jenkins", "CI/CD pipelines"]
    },
    {
      name: "Databases & Systems",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Oracle", "DynamoDB", "Redshift", "S3", "Windows", "Linux/Unix"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h3 className="text-xl font-semibold text-[#1DE9B6] mb-2">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, idx) => (
              <span key={idx} className="bg-[#212121] text-[#E0E0E0] px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;