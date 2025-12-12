import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import DisclosureBanner from '../components/DisclosureBanner';
import { useAppContext } from '../contexts/AppContext';

const Services: React.FC = () => {
  const { phoneNumber, phoneNumberClean, commonIssues, navLinks } = useAppContext();
  const servicesUrl = navLinks.find(link => link.name === 'Services')?.path || `/mcafee-services-support-${phoneNumberClean}`;

  return (
    <>
      <SEO
        title={`McAfee VPN & Security Fix Services | Call ${phoneNumber}`}
        description={`Resolve McAfee VPN disconnecting, no internet issues, loading problems, and more. Call ${phoneNumber}.`}
        url={servicesUrl}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-10">
            Our Comprehensive McAfee Support Services
          </h1>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We provide expert, independent technical support to help you overcome any challenge with your McAfee Internet Security and VPN products. Our services are tailored to address a wide array of issues, ensuring your digital life remains secure and uninterrupted.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-7 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-5 p-4 rounded-full bg-blue-100 text-blue-700">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002 12c0 2.755 1.05 5.495 2.94 7.062a12.007 12.007 0 008.06 3.938 12.007 12.007 0 008.06-3.938C20.95 17.495 22 14.755 22 12A12.007 12.007 0 0021.618 7.984z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {issue.replace('McAfee', 'Fix McAfee')}
                </h3>
                <p className="text-gray-600 text-base">
                  Our experts can diagnose and resolve this specific McAfee issue, ensuring your software works as intended.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Don't let McAfee issues slow you down!
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether it's a simple setup query or a complex technical malfunction, our independent support specialists are just a call away.
            </p>
            <Button
              to={`tel:${phoneNumberClean}`}
              isCallToAction={true}
              className="text-xl px-10 py-5 bg-green-600 hover:bg-green-700 focus:ring-green-500"
            >
              Get Expert Support Now: {phoneNumber}
            </Button>
          </div>
        </div>
      </section>

      <DisclosureBanner />
    </>
  );
};

export default Services;
