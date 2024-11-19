import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface NavbarProps {
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsMobileMenuOpen }) => {
  const router = useRouter();

  const navItems = [
    { name: "About", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-navbar rounded-full p-4 mb-4 max-w-2xl mx-auto flex justify-between items-center">
      <div className="flex items-center md:hidden">
        <Image src="/images/ProfilePic.jpg" alt="Profile" width={32} height={32} className="rounded-full mr-2" />
        <span className="text-white">Alifiyah Shahid</span>
      </div>
      <ul className="hidden md:flex justify-center space-x-8 flex-grow">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>
              <motion.span
                className={`text-white cursor-pointer ${
                  router.pathname === item.path ? "text-accent-teal font-bold" : ""
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;