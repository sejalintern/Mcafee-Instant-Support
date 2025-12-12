import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import DisclosureBanner from '../components/DisclosureBanner';
import { useAppContext } from '../contexts/AppContext';

const Home: React.FC = () => {
  const { phoneNumber, phoneNumberClean, commonIssues, theme } = useAppContext();

  return (
    <>
      <SEO
        title={theme.siteTitle}
        description="Independent McAfee troubleshooting for Safe Connect, VPN issues, connectivity, and more. Call +1 (510)-370-1986."
        url="/"
      />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] md:h-[75vh] flex items-center justify-center text-white p-4"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${theme.heroImage}')` }}
      >
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Facing McAfee Issues? Get Instant Support!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            Independent assistance for your McAfee Safe Connect, VPN, and security problems.
          </p>
          <Button
            to={`tel:${phoneNumberClean}`}
            isCallToAction={true}
            className="text-xl sm:text-2xl px-8 py-4 animate-bounce"
          >
            Call Now: {phoneNumber}
          </Button>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
            Common McAfee Issues We Resolve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonIssues.map((issue, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <svg className="w-8 h-8 text-red-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-lg text-gray-700 font-medium">{issue}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              to={`tel:${phoneNumberClean}`}
              isCallToAction={true}
              className="text-lg px-8 py-4"
            >
              Don't See Your Issue? Call Us Now! {phoneNumber}
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Reliable Support for Your McAfee Products
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Our independent experts are available to provide efficient and effective solutions.
          </p>
          <Button
            to={`tel:${phoneNumberClean}`}
            isCallToAction={true}
            className="text-xl sm:text-2xl px-10 py-5 bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400"
          >
            Get Help Today: {phoneNumber}
          </Button>
        </div>
      </section>

      <DisclosureBanner />
    </>
  );
};

export default Home;
