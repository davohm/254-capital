import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const PerformanceMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('metrics-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return (
    <section 
      id="metrics-section"
      className="py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.95) 0%, rgba(15, 118, 110, 0.9) 100%)'
      }}
    >
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-wrap justify-center items-center text-center gap-8 md:gap-16 lg:gap-24">


          {/* Metric 1 */}
          <div className="text-center px-4">
            <div className="text-white text-5xl font-bold mb-2">
              {isVisible ? <CountUp end={14.2} decimals={1} suffix="%" duration={2.5} /> : '0%'}
            </div>
            <p className="text-white text-sm uppercase tracking-wider">
              Average Annual Return
            </p>
          </div>

          {/* Metric 2 */}
          <div className="text-center px-4">
            <div className="text-white text-5xl font-bold mb-2">
              {isVisible ? <CountUp end={81} suffix="K+" duration={2.5} /> : '0K+'}
            </div>
            <p className="text-white text-sm uppercase tracking-wider">
              Project Done
            </p>
          </div>

          {/* Metric 3 */}
          <div className="text-center px-4">
            <div className="text-white text-5xl font-bold mb-2">
              {isVisible ? <CountUp end={271} suffix="+" duration={2.5} /> : '0+'}
            </div>
            <p className="text-white text-sm uppercase tracking-wider">
              Professional
            </p>
          </div>

          {/* Metric 4 */}
          <div className="text-center px-4">
            <div className="text-white text-5xl font-bold mb-2">
              {isVisible ? <CountUp end={4.7} decimals={1} duration={2.5} /> : '0.0'}
            </div>
            <p className="text-white text-sm uppercase tracking-wider">
              Client Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
