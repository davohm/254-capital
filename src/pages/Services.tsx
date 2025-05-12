
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronRight, Check, ArrowRight, X } from 'lucide-react';
import LoanApplicationForm from '../components/LoanApplicationForm';
import ModalPortal from '../components/ModalPortal';

const Services = () => {
  const [isLoanApplicationOpen, setIsLoanApplicationOpen] = useState(false);
  const { ref: scfRef, isVisible: scfVisible } = useScrollAnimation();
  
  const openLoanApplication = () => {
    setIsLoanApplicationOpen(true);
  };
  
  const closeLoanApplication = () => {
    setIsLoanApplicationOpen(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#15133F] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in" style={{animationDuration: '0.7s'}}>
            Our Financial Solutions
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDuration: '0.7s', animationDelay: '0.1s'}}>
            Tailored financing options designed to help your business grow, manage cash flow, and seize new opportunities.
          </p>
        </div>
      </section>

      {/* Supply Chain Financing Section */}
      <section 
        ref={scfRef as React.RefObject<HTMLElement>}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className={`text-center mb-16 transition-all duration-500 ease-out ${scfVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Supply Chain Financing</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Optimize your cash flow and strengthen supplier relationships with our flexible supply chain financing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-10">
              <div className={`transition-all duration-500 ease-out ${scfVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.1s'}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How Supply Chain Financing Works</h3>
                <p className="text-gray-700 mb-6">
                  Our supply chain financing bridges the gap between paying suppliers and getting paid by your buyers. We provide the funds you need to pay suppliers early, while you maintain your normal payment terms with buyers.
                </p>
                
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#48A7A7]/10 p-2 rounded-full">
                      <span className="flex items-center justify-center w-6 h-6 text-[#48A7A7] font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">You receive orders or invoices</h4>
                      <p className="text-gray-600 mt-1">From your buyers or customers that need to be fulfilled</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#48A7A7]/10 p-2 rounded-full">
                      <span className="flex items-center justify-center w-6 h-6 text-[#48A7A7] font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">We provide immediate financing</h4>
                      <p className="text-gray-600 mt-1">To pay your suppliers or purchase inventory needed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#48A7A7]/10 p-2 rounded-full">
                      <span className="flex items-center justify-center w-6 h-6 text-[#48A7A7] font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">You fulfill orders to your buyers</h4>
                      <p className="text-gray-600 mt-1">And maintain your normal payment terms with them</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#48A7A7]/10 p-2 rounded-full">
                      <span className="flex items-center justify-center w-6 h-6 text-[#48A7A7] font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Repay once your buyers pay you</h4>
                      <p className="text-gray-600 mt-1">Closing the financing cycle with minimal disruption</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-500 ease-out ${scfVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.3s'}}>
                <Button 
                  onClick={openLoanApplication}
                  className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white rounded-md px-6 py-3 text-sm transition-all duration-200 ease-in-out hover:shadow-md flex items-center space-x-2"
                >
                  <span>Apply for Financing</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            
            {/* Right Column - Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ease-out ${scfVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: '0.15s'}}
              >
                <div className="bg-[#48A7A7]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Same-day Funding</h4>
                <p className="text-gray-600">Get approved and receive funds in as little as 4 hours, with same-day disbursement for applications submitted before 10 AM.</p>
              </div>
              
              <div 
                className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ease-out ${scfVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: '0.25s'}}
              >
                <div className="bg-[#48A7A7]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Flexible Amounts</h4>
                <p className="text-gray-600">From KES 100,000 to KES 20 million, with financing tailored to your specific order or invoice value.</p>
              </div>
              
              <div 
                className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ease-out ${scfVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: '0.35s'}}
              >
                <div className="bg-[#48A7A7]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">No Fixed Collateral</h4>
                <p className="text-gray-600">Your orders and invoices serve as security, eliminating the need for traditional collateral like property or vehicles.</p>
              </div>
              
              <div 
                className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ease-out ${scfVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: '0.45s'}}
              >
                <div className="bg-[#48A7A7]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Industry-Tailored</h4>
                <p className="text-gray-600">Specialized solutions for manufacturers, retailers, distributors, and agribusinesses with unique supply chain needs.</p>
              </div>
            </div>
          </div>
          
          {/* Eligibility Section */}
          <div className="mt-20 bg-gray-50 rounded-xl p-8 md:p-10">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-500 ease-out ${scfVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.5s'}}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Can Apply?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Businesses registered in Kenya for 6+ months</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Companies with confirmed purchase orders or invoices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Manufacturers needing funds for raw materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Distributors requiring inventory financing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Agribusinesses with seasonal financing needs</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Business registration certificate</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">3-6 months of bank statements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Purchase orders or invoices from buyers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Supplier agreements (if applicable)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#48A7A7] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Director's ID and contact information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#15133F] to-[#1E1B54] py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Apply now and get approved in as little as 4 hours with same-day funding available.
          </p>
          <Button 
            onClick={openLoanApplication}
            className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white rounded-md px-6 py-3 text-sm transition-all duration-200 ease-in-out hover:shadow-md"
          >
            Apply for Financing
          </Button>
        </div>
      </section>
      
      {/* Loan Application Modal */}
      <ModalPortal isOpen={isLoanApplicationOpen}>
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 backdrop-blur-sm z-[9999] animate-fade-in" style={{animationDuration: '0.3s'}}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-auto max-h-[90vh] my-4 animate-fade-in" style={{animationDuration: '0.4s', animationDelay: '0.1s'}}>
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
    </Layout>
  );
};

export default Services;
