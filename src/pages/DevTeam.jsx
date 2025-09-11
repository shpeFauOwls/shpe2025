import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import DevCard from '../components/DevCard';

const DevTeam = () => {
  // Sample Development Team member data
  const devTeamMembers = [
    {
      name: "Alice Smith",
      role: "Frontend Developer",
      description: "Specializes in React, TypeScript, and modern web technologies. Passionate about creating intuitive user experiences.",
      image: null, // Will use placeholder
      links: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "portfolio", url: "#" }
      ]
    },
    {
      name: "Carlos Rodriguez",
      role: "Backend Developer",
      description: "Focuses on APIs, database design, and server architecture. Expert in Node.js, Python, and cloud technologies.",
      image: null,
      links: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      name: "Maria Garcia",
      role: "Full-Stack Developer",
      description: "Versatile developer with expertise in both frontend and backend technologies. Loves building end-to-end solutions.",
      image: null,
      links: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      name: "David Chen",
      role: "Mobile Developer",
      description: "Specializes in React Native and Flutter development. Creates cross-platform mobile applications with native performance.",
      image: null,
      links: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "portfolio", url: "#" }
      ]
    },
    {
      name: "Sofia Martinez",
      role: "UI/UX Designer",
      description: "Designs beautiful and functional user interfaces. Expert in Figma, Adobe Creative Suite, and user research methodologies.",
      image: null,
      links: [
        { platform: "linkedin", url: "#" },
        { platform: "portfolio", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      name: "Alex Johnson",
      role: "DevOps Engineer",
      description: "Manages infrastructure, CI/CD pipelines, and cloud deployments. Ensures reliable and scalable application delivery.",
      image: null,
      links: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      name: "Isabella Torres",
      role: "Data Engineer",
      description: "Builds data pipelines and analytics platforms. Expert in Python, SQL, and big data technologies like Apache Spark.",
      image: null,
      links: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "email", url: "mailto:isabella@fau.edu" }
      ]
    },
    {
      name: "Ryan O'Connor",
      role: "Security Engineer",
      description: "Ensures application security and compliance. Specializes in penetration testing, secure coding practices, and threat analysis.",
      image: null,
      links: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      name: "Elena Petrov",
      role: "QA Engineer",
      description: "Develops comprehensive testing strategies and automated test suites. Ensures high-quality software delivery through rigorous testing.",
      image: null,
      links: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "portfolio", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section padding="lg" className="pt-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Development Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented developers and engineers who build and maintain our digital platforms, ensuring a seamless experience for our members.
            </p>
          </div>
        </Section>
        
        <Section background="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devTeamMembers.map((member, index) => (
              <DevCard
                key={index}
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
                links={member.links}
              />
            ))}
          </div>
        </Section>
        
        <Section>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Development Team
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Are you passionate about technology and want to contribute to meaningful projects? We're always looking for skilled developers to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Apply to Dev Team
              </button>
              <button className="btn-secondary">
                View Open Positions
              </button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default DevTeam;
