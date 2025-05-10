
import React from 'react';
import { FileText } from 'lucide-react';

const ServiceHighlights = () => {
  return (
    <div className="container mx-auto px-4 -mt-16 relative z-20">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex-1 p-8 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-softgray rounded-full p-3 mr-4">
                <FileText className="h-6 w-6 text-softgreen" />
              </div>
              <h3 className="text-lg font-bold">Tax Specialists</h3>
            </div>
            <p className="text-sm text-darkgray/70">
              Personalized solutions for property tax management
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
