import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15133F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/254-capital-logo.jpg" 
                alt="254 Capital" 
                className="h-12 w-auto bg-white rounded-md p-1" 
              />
            </Link>
            <p className="text-gray-300 mt-4">
              254 Capital provides innovative financial solutions to help businesses grow through supply chain financing, bridging loans, and more.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-[#48A7A7] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#48A7A7] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#48A7A7] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#48A7A7] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#48A7A7]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#48A7A7]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#48A7A7] flex-shrink-0 mt-1" />
                <span className="text-gray-300">IPS Building, 7th Floor Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#48A7A7] flex-shrink-0" />
                <a href="tel:+254700123456" className="text-gray-300 hover:text-white transition-colors">+254 700 123 456</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#48A7A7] flex-shrink-0" />
                <a href="mailto:info@254-capital.com" className="text-gray-300 hover:text-white transition-colors">info@254-capital.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <Button 
                onClick={() => window.location.href = '/contacts'}
                className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white rounded-md px-4 py-2 text-sm"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#48A7A7]">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on our services, offers, and financial tips.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-2 bg-[#15133F]/80 border border-gray-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#48A7A7] text-white"
                />
                <button
                  type="submit"
                  className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white px-3 rounded-r-md flex items-center justify-center"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
            <div className="mt-6">
              <Button 
                onClick={() => window.open('/apply', '_blank')}
                className="bg-white hover:bg-gray-100 text-[#15133F] rounded-md px-4 py-2 text-sm font-medium"
              >
                Apply For Financing
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} 254 Capital. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy-policy" className="hover:text-[#48A7A7] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#48A7A7] transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-[#48A7A7] transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
