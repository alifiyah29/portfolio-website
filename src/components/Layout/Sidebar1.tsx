import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Sidebar1: React.FC = () => {
  return (
    <motion.aside
      className="bg-navbar p-4 rounded-lg"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/images/ProfilePic.jpg"
          alt="Alifiyah Shahid"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold text-[#FFB300] mb-2">
          Alifiyah Shahid
        </h2>
        <p className="mb-4 text-center text-[#4eabda]">
          Passionate Software Engineer and Web Developer
        </p>
        <Image
          src="/images/aws-badge.png"
          alt="AWS Badge"
          width={100}
          height={100}
          className="mb-4"
        />
        <p className="text-text-secondary mb-4 text-center">
          I&apos;m a software developer specializing in full-stack development,
          cloud infrastructure, and DevOps.
        </p>
        <motion.a
          href="/resume.pdf"
          download
          className="bg-accent-gold text-black px-4 py-2 rounded-lg mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download My Resume
        </motion.a>
        <div className="flex space-x-4">
          <SocialIcon
            href="https://linkedin.com/in/alifiyahshahid/"
            icon="linkedin"
          />
          <SocialIcon href="https://github.com/alifiyah29" icon="github" />
          <SocialIcon
            href="https://instagram.com/alifiyah_shahid/"
            icon="instagram"
          />
        </div>
      </div>
    </motion.aside>
  );
};

const SocialIcon: React.FC<{ href: string; icon: string }> = ({
  href,
  icon,
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Image
      src={`/images/${icon}.png`}
      alt={`${icon} icon`}
      width={20}
      height={20}
    />
  </motion.a>
);

export default Sidebar1;
