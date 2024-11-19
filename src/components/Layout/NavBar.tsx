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
        <Image
          src="/images/ProfilePic.jpg"
          alt="Profile"
          width={20}
          height={20}
          className="rounded-full mr-2"
        />
        <span className="text-white">Alifiyah Shahid</span>
      </div>
      <ul className="hidden md:flex justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>
              <motion.span
                className={`text-white cursor-pointer ${
                  router.pathname === item.path
                    ? "text-accent-teal font-bold"
                    : ""
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
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden text-white"
      >
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
