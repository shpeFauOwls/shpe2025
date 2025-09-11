import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import ResourceCard from '../components/ResourceCard';

const Resources = () => {
  // Academic Resources
  const academicResources = [
    {
      title: "Study Group Schedules",
      description: "Find study groups for your engineering courses and connect with peers for collaborative learning.",
      icon: null,
      link: "#",
      category: "Academic"
    },
    {
      title: "Tutoring Services",
      description: "Access free tutoring services for math, physics, and engineering courses from experienced students.",
      icon: null,
      link: "#",
      category: "Academic"
    },
    {
      title: "Academic Calendar",
      description: "Stay updated with important academic dates, exam schedules, and registration deadlines.",
      icon: null,
      link: "#",
      category: "Academic"
    },
    {
      title: "Course Planning Guide",
      description: "Comprehensive guide to plan your engineering curriculum and choose the right electives.",
      icon: null,
      link: "#",
      category: "Academic"
    }
  ];

  // Career Resources
  const careerResources = [
    {
      title: "Resume Builder",
      description: "Professional resume templates and tips specifically designed for engineering students.",
      icon: null,
      link: "#",
      category: "Career"
    },
    {
      title: "Interview Prep",
      description: "Practice technical and behavioral interview questions with industry professionals.",
      icon: null,
      link: "#",
      category: "Career"
    },
    {
      title: "Job Board",
      description: "Exclusive internship and full-time job opportunities from our corporate partners.",
      icon: null,
      link: "#",
      category: "Career"
    },
    {
      title: "LinkedIn Profile Guide",
      description: "Learn how to optimize your LinkedIn profile to attract recruiters and build your network.",
      icon: null,
      link: "#",
      category: "Career"
    }
  ];

  // Scholarship Resources
  const scholarshipResources = [
    {
      title: "SHPE National Scholarships",
      description: "Apply for scholarships specifically for SHPE members pursuing STEM degrees.",
      icon: null,
      link: "https://shpe.org/scholarships",
      category: "Scholarships"
    },
    {
      title: "FAU Engineering Scholarships",
      description: "University-specific scholarships and financial aid opportunities for engineering students.",
      icon: null,
      link: "#",
      category: "Scholarships"
    },
    {
      title: "External Scholarship Database",
      description: "Comprehensive database of external scholarships for Hispanic and STEM students.",
      icon: null,
      link: "https://scholarships.com",
      category: "Scholarships"
    },
    {
      title: "Financial Aid Workshop",
      description: "Learn about FAFSA, grants, and other financial aid options for college students.",
      icon: null,
      link: "#",
      category: "Scholarships"
    }
  ];

  // Technical Resources
  const technicalResources = [
    {
      title: "Coding Bootcamp Prep",
      description: "Resources and practice problems to prepare for coding bootcamps and technical interviews.",
      icon: null,
      link: "#",
      category: "Technical"
    },
    {
      title: "Software Development Tools",
      description: "Free access to professional development tools and software licenses for students.",
      icon: null,
      link: "#",
      category: "Technical"
    },
    {
      title: "Project Portfolio Guide",
      description: "Learn how to build an impressive portfolio of engineering projects to showcase your skills.",
      icon: null,
      link: "#",
      category: "Technical"
    },
    {
      title: "Tech Conference Calendar",
      description: "Stay updated with upcoming tech conferences, workshops, and networking events.",
      icon: null,
      link: "#",
      category: "Technical"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section padding="lg" className="pt-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access study materials, career resources, and professional development tools to support your academic and professional journey.
            </p>
          </div>
        </Section>
        
        {/* Academic Resources */}
        <Section background="gray">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Academic Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {academicResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  link={resource.link}
                  category={resource.category}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Career Resources */}
        <Section>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Career Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  link={resource.link}
                  category={resource.category}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Scholarship Resources */}
        <Section background="gray">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Scholarship Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarshipResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  link={resource.link}
                  category={resource.category}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Technical Resources */}
        <Section>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Technical Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  link={resource.link}
                  category={resource.category}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Additional Resources CTA */}
        <Section background="blue">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need More Resources?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our resources team or suggest new resources to add to our collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-shpe-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Request Resource
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-shpe-blue transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
