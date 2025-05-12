
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, User } from 'lucide-react';
import LoanApplicationForm from './LoanApplicationForm';
import ModalPortal from './ModalPortal';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoanApplicationOpen, setIsLoanApplicationOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { user } = useAuth();
  
  // Use localStorage to track if the initial animation has played across page navigations
  useEffect(() => {
    const hasInitialAnimationPlayed = localStorage.getItem('headerAnimationPlayed');
    if (hasInitialAnimationPlayed) {
      setHasAnimated(true);
    } else {
      // Set after a small delay to ensure animation plays properly
      const timer = setTimeout(() => {
        localStorage.setItem('headerAnimationPlayed', 'true');
        setHasAnimated(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about-us' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contacts', path: '/contacts' }
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const openLoanApplication = () => {
    setIsLoanApplicationOpen(true);
    setIsMenuOpen(false);
  };
  
  const closeLoanApplication = () => {
    setIsLoanApplicationOpen(false);
  };
  
  return (
    <header className={`bg-white w-full py-4 px-6 flex items-center justify-between shadow-sm relative z-20 ${!hasAnimated ? 'animate-fade-in' : ''}`}>
      <div className={`flex items-center ${!hasAnimated ? 'animate-slide-in' : ''}`}>
        <Link to="/" className="flex items-center hover-lift transition-transform duration-300">
          <img 
            src="/254-capital-logo.jpg" 
            alt="254 Capital" 
            className="h-12 w-auto transition-transform duration-300 hover:scale-105" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={`hidden lg:flex items-center space-x-6 ${!hasAnimated ? 'animate-slide-in' : ''}`} style={!hasAnimated ? {animationDelay: '0.1s'} : {}}>
        {navLinks.map((link, index) => (
          <Link 
            key={index}
            to={link.path} 
            className={`text-darkgray hover:text-[#48A7A7] transition-colors duration-200 relative group hover-lift ${!hasAnimated ? 'animate-slide-in' : ''}`}
            style={!hasAnimated ? {animationDelay: `${index * 0.05 + 0.2}s`} : {}}
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#48A7A7] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      <div className={`flex items-center space-x-4 ${!hasAnimated ? 'animate-slide-in' : ''}`} style={!hasAnimated ? {animationDelay: '0.3s'} : {}}>
        {/* Apply Loan Button - Desktop */}
        <Button 
          onClick={openLoanApplication} 
          variant="outline" 
          className={`hidden md:flex rounded-md border-[#48A7A7] text-[#15133F] hover:bg-[#48A7A7]/10 hover:text-[#48A7A7] px-4 py-2 text-sm hover-lift transition-transform duration-300 ${!hasAnimated ? 'animate-slide-in' : ''}`}
          style={!hasAnimated ? {animationDelay: '0.4s'} : {}}
        >
          Apply Loan
        </Button>
        
        {/* Dashboard or Login/Signup Buttons - Desktop */}
        {user ? (
          <Link to="/dashboard">
            <Button 
              variant="outline" 
              className={`hidden md:flex rounded-md border-[#15133F] text-[#15133F] hover:bg-[#15133F]/10 px-4 py-2 text-sm hover-lift transition-transform duration-300 ${!hasAnimated ? 'animate-slide-in' : ''}`}
              style={!hasAnimated ? {animationDelay: '0.5s'} : {}}
            >
              <User size={16} className="mr-2" />
              Dashboard
            </Button>
          </Link>
        ) : (
          <div className="hidden md:flex space-x-2">
            <Link to="/login">
              <Button 
                variant="outline" 
                className={`rounded-md border-[#15133F] text-[#15133F] hover:bg-[#15133F]/10 px-4 py-2 text-sm hover-lift transition-transform duration-300 ${!hasAnimated ? 'animate-slide-in' : ''}`}
                style={!hasAnimated ? {animationDelay: '0.5s'} : {}}
              >
                <LogIn size={16} className="mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                className={`bg-[#15133F] hover:bg-[#15133F]/90 text-white rounded-md px-4 py-2 text-sm hover-lift transition-transform duration-300 ${!hasAnimated ? 'animate-slide-in' : ''}`}
                style={!hasAnimated ? {animationDelay: '0.55s'} : {}}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        )}
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-[#15133F] hover:text-[#48A7A7] focus:outline-none transition-colors duration-200 hover-scale"
        >
          <div className="relative w-6 h-6">
            <X 
              size={24} 
              className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} 
            />
            <Menu 
              size={24} 
              className={`absolute transition-all duration-300 ${!isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} 
            />
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-md z-30 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <nav className="flex flex-col py-4 px-6">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              to={link.path} 
              className="py-3 text-darkgray hover:text-[#48A7A7] border-b border-gray-100 transition-colors duration-200 hover-lift"
              style={{}}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={openLoanApplication}
            className="mt-4 py-3 text-white bg-[#48A7A7] hover:bg-[#48A7A7]/90 rounded-md text-center transition-all duration-300 hover-lift animate-slide-in"
            style={{animationDelay: '0.4s'}}
          >
            Apply Loan
          </button>
          
          {/* Dashboard or Login/Signup Buttons - Mobile */}
          {user ? (
            <Link 
              to="/dashboard" 
              className="mt-3 py-3 text-[#15133F] border border-[#15133F] hover:bg-[#15133F]/10 rounded-md text-center transition-all duration-300 hover-lift animate-slide-in flex items-center justify-center"
              style={{animationDelay: '0.5s'}}
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={16} className="mr-2" />
              Dashboard
            </Link>
          ) : (
            <>
              <Link 
                to="/login" 
                className="mt-3 py-3 text-[#15133F] border border-[#15133F] hover:bg-[#15133F]/10 rounded-md text-center transition-all duration-300 hover-lift animate-slide-in flex items-center justify-center"
                style={{animationDelay: '0.5s'}}
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn size={16} className="mr-2" />
                Login
              </Link>
              <Link 
                to="/signup" 
                className="mt-3 py-3 text-white bg-[#15133F] hover:bg-[#15133F]/90 rounded-md text-center transition-all duration-300 hover-lift animate-slide-in flex items-center justify-center"
                style={{animationDelay: '0.55s'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
      
      {/* Loan Application Modal */}
      <ModalPortal isOpen={isLoanApplicationOpen}>
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 backdrop-blur-sm z-[9999] animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-auto max-h-[90vh] my-4 animate-slide-in">
            <div className="bg-[#15133F] p-6 text-white flex justify-between items-center">
              <h2 className="text-2xl font-bold">Loan Application</h2>
              <button 
                onClick={closeLoanApplication}
                className="text-white hover:text-[#48A7A7] transition-colors duration-200 hover-scale"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <LoanApplicationForm />
            </div>
          </div>
        </div>
      </ModalPortal>
    </header>
  );
};

export default Header;
