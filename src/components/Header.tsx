
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white w-full py-4 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/254-capital-logo.jpg" 
            alt="254 Capital" 
            className="h-12 w-auto" />
        </Link>
      </div>

      <nav className="hidden lg:flex items-center space-x-6">
        <Link to="/" className="text-darkgray hover:text-[#48A7A7]">Home</Link>
        <Link to="/services" className="text-darkgray hover:text-[#48A7A7]">Services</Link>
        <Link to="/about-us" className="text-darkgray hover:text-[#48A7A7]">About Us</Link>
        <Link to="/faqs" className="text-darkgray hover:text-[#48A7A7]">FAQs</Link>
        <Link to="/contacts" className="text-darkgray hover:text-[#48A7A7]">Contacts</Link>
      </nav>

      <div className="flex items-center">
        <Button variant="outline" className="rounded-full border-[#48A7A7] text-[#15133F] hover:bg-[#48A7A7]/10 hover:text-[#48A7A7]">Loan Calculator</Button>
      </div>
    </header>
  );
};

export default Header;
