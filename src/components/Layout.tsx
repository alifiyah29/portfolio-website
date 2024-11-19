import React, { ReactNode, useState } from 'react';
import NavBar from './Layout/NavBar';
import Sidebar1 from './Layout/Sidebar1';
import Footer from './Layout/Footer';
import MobileMenu from './Layout/MobileMenue';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/4 mb-4 md:mb-0">
          <Sidebar1 />
        </div>
        <main className="md:w-3/4 md:pl-8">{children}</main>
      </div>
      <Footer />
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </div>
  );
};

export default Layout;