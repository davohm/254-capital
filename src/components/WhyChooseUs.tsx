import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="/Why Chose us.jpg" 
              alt="Why Choose Us" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#48A7A7] font-medium mb-2">Why Choose Us</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent & Flexible Terms</h2>
              <p className="text-gray-700 mb-8">
                We offer clear, straightforward financing solutions designed to help your business thrive.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Competitive Interest Rates</h3>
                  <p className="text-gray-700 mt-1">
                    Lower than overdrafts & short-term loans.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Repayment Aligned With Sales</h3>
                  <p className="text-gray-700 mt-1">
                    Settle when your buyers pay.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">No Hidden Fees</h3>
                  <p className="text-gray-700 mt-1">
                    Clear pricing from day one.
                  </p>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Pay Suppliers Upfront</h3>
                  <p className="text-gray-700 mt-1">
                    Secure stock even when buyers haven't paid you yet.
                  </p>
                </div>
              </div>
              
              {/* Feature 5 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Fulfill Large Orders</h3>
                  <p className="text-gray-700 mt-1">
                    Take on bigger contracts without liquidity worries.
                  </p>
                </div>
              </div>
              
              {/* Feature 6 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#48A7A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Avoid Stockouts</h3>
                  <p className="text-gray-700 mt-1">
                    Maintain inventory levels during peak seasons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
