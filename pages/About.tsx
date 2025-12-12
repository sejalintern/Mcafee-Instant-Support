import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import DisclosureBanner from '../components/DisclosureBanner';
import { useAppContext } from '../contexts/AppContext';

const About: React.FC = () => {
  const { phoneNumber, phoneNumberClean, navLinks } = useAppContext();
  const aboutUrl = navLinks.find(link => link.name === 'About')?.path || `/about-mcafee-support-${phoneNumberClean}`;

  return (
    <>
      <SEO
        title={`About McAfee Support (Independent) | Call ${phoneNumber}`}
        description={`Independent help for McAfee problems. Call ${phoneNumber}.`}
        url={aboutUrl}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-8">
            About Our Independent McAfee Support
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to Independent McAfee Support! We are a dedicated team of technical experts providing comprehensive troubleshooting and resolution services for a wide range of McAfee products. Our mission is to offer prompt, reliable, and effective assistance to users experiencing issues with their McAfee software, ensuring their digital security and online privacy.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With years of experience in antivirus and internet security solutions, our technicians are well-versed in diagnosing and fixing common and complex McAfee-related problems. From installation errors and subscription issues to VPN connectivity failures and firewall conflicts, we've got you covered.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We understand how crucial your internet security is, and how frustrating it can be when your protective software isn't performing as expected. That's why we pride ourselves on delivering personalized support that gets you back online securely and quickly. Our approach is user-friendly, explaining solutions clearly and patiently.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            While we are experts in McAfee products, it's important to us that you know: <strong>{useAppContext().disclosure}</strong>. Our independence allows us to focus solely on providing the best possible troubleshooting and support experience for you, our customer.
          </p>

          <div className="text-center mt-10">
            <Button
              to={`tel:${phoneNumberClean}`}
              isCallToAction={true}
              className="text-xl px-8 py-4"
            >
              Need Help? Call Us Now: {phoneNumber}
            </Button>
          </div>
        </div>
      </section>

      <DisclosureBanner />
    </>
  );
};

export default About;
