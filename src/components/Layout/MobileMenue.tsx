import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`fixed top-0 right-0 h-full w-64 bg-navbar z-50 p-4 ${
        isOpen ? "block" : "hidden"
      }`}
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-white"
      >
        x
      </button>
      <nav className="mt-12">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <a
        href="/Alifiyah_Shahid_Resume.pdf"
        download
        className="block mt-8 bg-accent-teal text-black px-4 py-2 rounded-lg text-center"
      >
        Download My Resume
      </a>
      <div className="mt-8 flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/alifiyahshahid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://github.com/alifiyah29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/images/github.png" alt="GitHub" width={24} height={24} />
        </a>
        <a
          href="https://instagram.com/alifiyah_shahid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
          />
        </a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
