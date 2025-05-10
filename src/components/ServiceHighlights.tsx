
import React from 'react';

const ServiceHighlights = () => {
  const highlights = [
    {
      title: "Reliability",
      description: "We deliver on our promises with consistency and integrity."
    },
    {
      title: "Innovation",
      description: "We offer tailored lending products designed to meet evolving financial needs."
    },
    {
      title: "Customer Focus",
      description: "We prioritize our clients' success, providing personalized support and guidance."
    }
  ];

  return (
    <div className="container mx-auto px-4 -mt-24 relative z-20">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="rounded-full border-2 border-mintgreen p-4">
                <svg className="w-6 h-6 text-mintgreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-darkgray/70 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
