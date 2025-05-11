import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Info } from 'lucide-react';

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    email: '',
    phone: '',
    loanType: '',
    amount: '',
    securityType: '',
    message: '',
    agreeToTerms: false
  });

  const [activeTab, setActiveTab] = useState('personal');

  const loanTypes = [
    "Topup Loan",
    "Sacco lending Loan",
    "Supply chain financing Loan",
    "Salary check off Loans",
    "LPO financing Loans",
    "Invoice discounting loans",
    "Logbook loans",
    "Bridging loans",
    "Bid bonds loans"
  ];

  const securityTypes = [
    "Title Deed",
    "Vehicle Logbook",
    "Shares Certificate",
    "Fixed Deposit",
    "Guarantors",
    "Invoice",
    "LPO/Contract",
    "Salary"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Loan application submitted successfully! Our team will contact you shortly.');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A7A7] focus:border-[#48A7A7]"
                />
              </div>
              
              <div>
                <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">ID Number *</label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A7A7] focus:border-[#48A7A7]"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A7A7] focus:border-[#48A7A7]"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A7A7] focus:border-[#48A7A7]"
                />
              </div>
            </div>
          </div>
        );
      case 'loan':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">Loan Type *</label>
                <select
                  id="loanType"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A7A7] focus:border-[#48A7A7]"
                >
                  <option value="">Select a loan type</option>
                  {loanTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (KES) *</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  min="10000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A7A7] focus:border-[#48A7A7]"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="securityType" className="block text-sm font-medium text-gray-700 mb-1">Security Type *</label>
              <select
                id="securityType"
                name="securityType"
                value={formData.securityType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select security type</option>
                {securityTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Any additional details about your loan request"
              />
            </div>
          </div>
        );
      case 'documents':
        return (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-2" />
              <h4 className="text-lg font-medium text-gray-900 mb-1">Upload Your Documents</h4>
              <p className="text-sm text-gray-500 mb-4">
                Drag and drop files here, or click to browse. You can upload multiple documents at once.
              </p>
              <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-700 flex items-start mt-4 mb-4">
                <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Required documents:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>National ID or Passport</li>
                    <li>Security document (based on selected security type)</li>
                    <li>Any additional supporting documents</li>
                  </ul>
                </div>
              </div>
              <input
                type="file"
                multiple
                className="w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-emerald-50 file:text-emerald-700
                  hover:file:bg-emerald-100"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for a Loan</h2>
        <p className="text-gray-700 mb-6">
          Complete the form below to apply for financing. Our team will review your application and contact you within 24 hours.  
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                type="button"
                onClick={() => setActiveTab('personal')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'personal' ? 'border-[#48A7A7] text-[#15133F]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Personal Information
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('loan')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'loan' ? 'border-[#48A7A7] text-[#15133F]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Loan Details
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('documents')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'documents' ? 'border-[#48A7A7] text-[#15133F]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Documents
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-4">
            {renderTabContent()}
          </div>
          
          {/* Custom Loan Message */}
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-700">
              Need a custom loan? Email us at:{' '}
              <a href="mailto:loans@254-capital.com" className="text-[#48A7A7] hover:underline">
                loans@254-capital.com
              </a>
            </p>
          </div>
          
          {/* Terms and Conditions */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="h-4 w-4 text-[#48A7A7] focus:ring-[#48A7A7] border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-[#48A7A7] hover:underline">
                  Terms and Conditions
                </a>
                {' '}and{' '}
                <a href="#" className="text-[#48A7A7] hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="pt-4 flex justify-between">
            {activeTab !== 'personal' && (
              <Button 
                type="button" 
                onClick={() => setActiveTab(activeTab === 'loan' ? 'personal' : 'loan')}
                variant="outline"
                className="px-6 py-2 border border-[#48A7A7] text-[#48A7A7] rounded-md hover:bg-[#48A7A7]/10"
              >
                Previous
              </Button>
            )}
            
            {activeTab !== 'documents' ? (
              <Button 
                type="button" 
                onClick={() => setActiveTab(activeTab === 'personal' ? 'loan' : 'documents')}
                className="ml-auto px-6 py-2 bg-[#15133F] text-white rounded-md hover:bg-[#15133F]/90"
              >
                Next
              </Button>
            ) : (
              <Button 
                type="submit" 
                disabled={!formData.agreeToTerms}
                className="ml-auto px-6 py-2 bg-[#15133F] text-white rounded-md hover:bg-[#15133F]/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Application
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
