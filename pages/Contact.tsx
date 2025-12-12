import React, { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import DisclosureBanner from '../components/DisclosureBanner';
import { useAppContext } from '../contexts/AppContext';

const Contact: React.FC = () => {
  const { phoneNumber, phoneNumberClean, navLinks } = useAppContext();
  const contactUrl = navLinks.find(link => link.name === 'Contact')?.path || `/contact-mcafee-support-${phoneNumberClean}`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // In a real application, you would send this data to a backend.
    setIsSubmitted(true);
    // Optionally reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <SEO
        title={`Contact McAfee Support Help | Call ${phoneNumber}`}
        description={`Need help with McAfee? Call ${phoneNumber}.`}
        url={contactUrl}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-10">
            Contact Our Support Team
          </h1>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Have a question, need assistance, or want to discuss your McAfee issues? Reach out to our independent support specialists today. We're here to help!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch Directly</h2>
              <div className="flex items-center space-x-4">
                <svg className="h-8 w-8 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 1.485a1 1 0 01.178.647l-.68 4.293a1 1 0 00.252.923l2.844 2.844a1 1 0 00.923.252l4.293-.68a1 1 0 01.647.178l1.485.74A1 1 0 0118 15.847V18a1 1 0 01-1 1H3a1 1 0 01-1-1V3z"></path>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone Support</h3>
                  <a href={`tel:${phoneNumberClean}`} className="text-blue-600 text-xl font-bold hover:underline">
                    {phoneNumber}
                  </a>
                  <p className="text-gray-600 text-sm">Call us for immediate assistance.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <svg className="h-8 w-8 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                  <p className="text-blue-600 text-xl font-bold">support@example.com</p>
                  <p className="text-gray-600 text-sm">We typically respond within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg className="h-8 w-8 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Our Location (Virtual)</h3>
                  <p className="text-gray-700 text-xl font-bold">USA (Remote Services)</p>
                  <p className="text-gray-600 text-sm">Serving users across the United States.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md text-center">
                  <p className="font-semibold text-lg">Thank you for your message!</p>
                  <p>We will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-md focus:ring-blue-500"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <DisclosureBanner />
    </>
  );
};

export default Contact;
