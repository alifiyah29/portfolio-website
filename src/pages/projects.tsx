import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProjectBlock from "../components/Projects/ProjectBlock";

const Projects: NextPage = () => {
  const projects = [
    {
      name: "SyncroVerse",
      description:
        "Developed a real-time collaborative platform with secure authentication, role-based permissions, and scalable AWS deployment, supporting low-latency editing, autosave, and real-time chat for seamless teamwork.",
      imageUrl: "/images/syncroverse.jpg",
      link: "https://github.com/alifiyah29/SyncroVerse",
    },
    {
      name: "Chatify",
      description:
        "Developed a real-time chat app using MVC architecture with Next.js and Socket.io, handling over 100 messages daily. Implemented a responsive UI with server-side rendering for improved performance and SEO, managed scalable user data and chat histories with MongoDB, and deployed on AWS, reducing deployment time by 50%.",
      imageUrl: "/images/Chatify.jpg",
      link: "https://github.com/alifiyah29/Chatify",
    },
    {
      name: "My Portfolio Website",
      description:
        "Built my personal portfolio website using Next.js and Tailwind CSS, delivering a sleek, responsive design to showcase projects & skills",
      imageUrl: "/images/portfolio.jpg",
      link: "https://github.com/alifiyah29",
    },
    {
      name: "Task-Alchemy",
      description:
        "Developed a ticketing system using Next.js for a seamless user experience and secure task management, leveraging Redux for state consistency and a backend API for reliable data handling.",
      imageUrl: "/images/task-alchemy.jpg",
      link: "https://github.com/alifiyah29/Task-Alchemy",
    },
    {
      name: "Game-Genre-Analysis",
      description:
        "Developed a hybrid database integrating MySQL and MongoDB for player behavior analysis, utilizing Apache Kafka for real-time data processing and Tableau to create interactive dashboards, providing actionable insights and improving decision-making.",
      imageUrl: "/images/GameGenre.png",
      link: "https://github.com/alifiyah29",
    },
    {
      name: "BlogVista",
      description:
        "Developed a scalable blogging platform using the MERN stack, leading the development and deployment while implementing user engagement features that drove platform growth.",
      imageUrl: "/images/blogvista.jpg",
      link: "https://github.com/alifiyah29",
    },
    {
      name: "Air Quality Monitoring System",
      description:
        "Developed an Arduino-based system for real-time air quality monitoring, built a web platform with interactive data visualization charts, and analyzed patterns to publish findings for improved air quality management.",
      imageUrl: "/images/AirQuality.png",
      link: "https://github.com/alifiyah29",
    },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Innovative Solutions, Creative Designs: My Journey in Tech
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectBlock
                name={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Projects;
