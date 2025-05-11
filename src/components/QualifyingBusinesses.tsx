import React from 'react';

const QualifyingBusinesses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who Qualifies for Supply Chain Financing?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ideal for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="text-emerald-600 text-5xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wholesalers & Distributors
              </h3>
              <p className="text-gray-700">
                Stock up before high-demand seasons.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="text-emerald-600 text-5xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Manufacturers
              </h3>
              <p className="text-gray-700">
                Buy raw materials without cash flow strain.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="text-emerald-600 text-5xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Agribusinesses
              </h3>
              <p className="text-gray-700">
                Finance inputs (seeds, fertilizers) before harvest.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="text-emerald-600 text-5xl font-bold mb-4">04</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Retail Chains
              </h3>
              <p className="text-gray-700">
                Expand product range with supplier financing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifyingBusinesses;
