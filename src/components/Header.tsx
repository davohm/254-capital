
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white w-full py-4 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="mr-2 text-softgreen">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#4CD4A2" />
              <path d="M19.6 9.8C19.6 7.7 17.9 6 15.8 6H9.8V22H15.8C17.9 22 19.6 20.3 19.6 18.2V9.8Z" fill="white" />
            </svg>
          </div>
          <h1 className="text-2xl font-medium">Softipay</h1>
        </Link>
      </div>

      <nav className="hidden lg:flex items-center space-x-6">
        <Link to="/" className="text-darkgray hover:text-primary">Home</Link>
        <Link to="/services" className="text-darkgray hover:text-primary">Services</Link>
        <Link to="/about-us" className="text-darkgray hover:text-primary">About Us</Link>
        <Link to="/faqs" className="text-darkgray hover:text-primary">FAQs</Link>
        <Link to="/contacts" className="text-darkgray hover:text-primary">Contacts</Link>
      </nav>

      <div className="flex items-center">
        <Button variant="outline" className="rounded-full">Contact</Button>
      </div>
    </header>
  );
};

export default Header;
