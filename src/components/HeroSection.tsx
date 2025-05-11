
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import LoanCalculator from './LoanCalculator';
import LoanApplicationForm from './LoanApplicationForm';
import ModalPortal from './ModalPortal';
import { Play, X } from 'lucide-react';

const HeroSection = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isLoanApplicationOpen, setIsLoanApplicationOpen] = useState(false);
  
  const openCalculator = () => {
    setIsCalculatorOpen(true);
    setIsLoanApplicationOpen(false);
  };
  
  const closeCalculator = () => {
    setIsCalculatorOpen(false);
  };
  
  const openLoanApplication = () => {
    setIsLoanApplicationOpen(true);
    setIsCalculatorOpen(false);
  };
  
  const closeLoanApplication = () => {
    setIsLoanApplicationOpen(false);
  };
  return (
    <section className="relative py-20 px-4 md:px-20 lg:px-24 mx-4 my-6 rounded-3xl bg-[#15133F] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/warehouse-hero-image.jpg"
          alt="Tax professionals working together"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="border border-white/20 rounded-full inline-flex px-6 py-2 mb-6">
          <p className="text-sm text-white tracking-wide uppercase">YOUR SUCCESS, OUR PRIORITY</p>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Get the Funding <br/> You Need - Same <br/> Day Approval
        </h1>
        
        <p className="text-white/80 mb-8 max-w-md text-base">
          At 254-Capital, we simplify access to credit so you can grow your business
          manage emergencies, and achieve financial - <b>without the hassle.</b>
        </p>
        
        <div className="flex items-center space-x-6 mb-[70px]">
          <Button 
            onClick={openCalculator}
            className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 border-0 text-white rounded-full px-8 py-6 font-medium"
          >
            Loan Calculator
          </Button>
          <Button 
            onClick={openLoanApplication}
            className="bg-white hover:bg-gray-100 text-[#15133F] border-2 border-white rounded-full px-8 py-6 font-medium"
          >
            Apply Now
          </Button>
        </div>
        
        {/* Loan Calculator Modal */}
        <LoanCalculator 
          isOpen={isCalculatorOpen} 
          onClose={closeCalculator} 
          openLoanApplication={openLoanApplication} 
        />
        
        {/* Loan Application Modal */}
        <ModalPortal isOpen={isLoanApplicationOpen}>
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 backdrop-blur-sm">
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
    </section>
  );
};

export default HeroSection;
