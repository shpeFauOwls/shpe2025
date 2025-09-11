import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import JoinForm from '../components/JoinForm';

const JoinNow = () => {
  const handleFormSubmit = async (formData) => {
    // This is where you would integrate with your backend
    // For now, we'll just log the data
    console.log('Join form submitted:', formData);
    
    // Example of what you might do with the data:
    // - Send to Supabase
    // - Send to Firebase
    // - Send to your API endpoint
    // - Send email notification
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Section background="white" padding="lg">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join SHPE FAU
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Become part of our vibrant community of Hispanic engineers and STEM professionals. 
              Connect with like-minded individuals, access exclusive resources, and advance your career 
              while making a positive impact in the engineering field.
            </p>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section background="gray" padding="lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Join SHPE?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-shpe-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Network</h3>
                <p className="text-gray-600">
                  Connect with industry professionals, alumni, and fellow students to expand your network and career opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-shpe-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning Resources</h3>
                <p className="text-gray-600">
                  Access exclusive workshops, mentorship programs, and educational resources to enhance your skills and knowledge.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-shpe-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Development</h3>
                <p className="text-gray-600">
                  Get access to job opportunities, internship programs, and career guidance to accelerate your professional growth.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Join Form Section */}
        <Section background="white" padding="lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Join?
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you with next steps.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <JoinForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </Section>

        {/* Additional Info Section */}
        <Section background="shpe-blue" padding="lg">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Questions About Membership?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're here to help! Reach out to us if you have any questions about joining SHPE FAU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-shpe-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-shpe-blue transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default JoinNow;
