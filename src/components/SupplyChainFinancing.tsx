import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import LoanApplicationForm from './LoanApplicationForm';
import ModalPortal from './ModalPortal';
import { X } from 'lucide-react';

const SupplyChainFinancing = () => {
  const [isLoanApplicationOpen, setIsLoanApplicationOpen] = useState(false);
  
  const openLoanApplication = () => {
    setIsLoanApplicationOpen(true);
  };
  
  const closeLoanApplication = () => {
    setIsLoanApplicationOpen(false);
  };
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#48A7A7] font-medium mb-2">Supply Chain Financing</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Fuel Your Growth with Fast, Flexible Financing
              </h2>
              <p className="text-gray-700 mb-8">
                Need working capital to buy inventory, pay suppliers, or fulfill large orders? 254 Capital provides supply chain financing to help SMEs, distributors, and agribusinesses bridge cash flow gaps and seize growth opportunities—without lengthy bank processes.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Same-day Approval & Disbursement</h3>
                  <p className="text-gray-700 mt-1">
                    Get funds when you need them without delays.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Flexible Financing Range</h3>
                  <p className="text-gray-700 mt-1">
                    From KES 100,000 to KES 20M+ to match your needs.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">No Fixed Collateral Required</h3>
                  <p className="text-gray-700 mt-1">
                    Invoice & purchase order financing options available.
                  </p>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Industry-Tailored Solutions</h3>
                  <p className="text-gray-700 mt-1">
                    Designed for manufacturers, retailers, and agri-businesses.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 flex items-center space-x-4">
              <Button 
                onClick={openLoanApplication}
                className="bg-[#15133F] hover:bg-[#15133F]/90 text-white rounded-full px-8 py-6 font-medium text-base uppercase tracking-wide shadow-lg flex items-center gap-2"
              >
                Apply Now
              </Button>
              <span className="text-[#48A7A7] font-medium">Get Funded In Hours</span>
            </div>
            
            {/* Loan Application Modal */}
            <ModalPortal isOpen={isLoanApplicationOpen}>
              <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 backdrop-blur-sm z-[9999]">
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-auto max-h-[90vh] my-4">
                  <div className="bg-[#15133F] p-6 text-white flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Loan Application</h2>
                    <button 
                      onClick={closeLoanApplication}
                      className="text-white hover:text-[#48A7A7] transition-colors"
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
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/stockroom.jpg" 
                alt="Supply Chain Financing" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainFinancing;
