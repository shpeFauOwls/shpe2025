import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import EboardCard from '../components/EboardCard';

const Eboard = () => {
  // Sample E-Board member data
  const eboardMembers = [
    {
      name: "Juan Rodriguez",
      role: "President",
      description: "Leads chapter initiatives and represents SHPE FAU at national conferences. Passionate about empowering Hispanic engineers and creating opportunities for professional growth.",
      image: null, // Will use placeholder
      links: [
        { platform: "linkedin", url: "#" },
        { platform: "email", url: "mailto:juan@fau.edu" }
      ]
    },
    {
      name: "Maria Gonzalez",
      role: "Vice President",
      description: "Oversees internal operations and member engagement. Focuses on creating inclusive programming and supporting academic success for all members.",
      image: null,
      links: [
        { platform: "linkedin", url: "#" },
        { platform: "instagram", url: "#" }
      ]
    },
    {
      name: "Carlos Mendez",
      role: "Treasurer",
      description: "Manages chapter finances and budget planning. Ensures sustainable growth and responsible resource allocation for all SHPE FAU activities.",
      image: null,
      links: [
        { platform: "linkedin", url: "#" },
        { platform: "email", url: "mailto:carlos@fau.edu" }
      ]
    },
    {
      name: "Sofia Herrera",
      role: "Secretary",
      description: "Handles communications and documentation. Keeps members informed about opportunities and maintains records of chapter activities and achievements.",
      image: null,
      links: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      name: "Diego Silva",
      role: "Professional Development Chair",
      description: "Organizes career development workshops and networking events. Connects members with industry professionals and internship opportunities.",
      image: null,
      links: [
        { platform: "linkedin", url: "#" },
        { platform: "email", url: "mailto:diego@fau.edu" }
      ]
    },
    {
      name: "Isabella Torres",
      role: "Community Outreach Chair",
      description: "Leads community service initiatives and STEM outreach programs. Builds partnerships with local schools and organizations to promote engineering education.",
      image: null,
      links: [
        { platform: "linkedin", url: "#" },
        { platform: "instagram", url: "#" }
      ]
    },
    {
      name: "Alejandro Ruiz",
      role: "Academic Chair",
      description: "Coordinates tutoring programs and study groups. Supports members' academic success through peer mentoring and resource sharing.",
      image: null,
      links: [
        { platform: "linkedin", url: "#" },
        { platform: "email", url: "mailto:alejandro@fau.edu" }
      ]
    },
    {
      name: "Valentina Castro",
      role: "Social Media Chair",
      description: "Manages SHPE FAU's online presence and digital communications. Creates engaging content to showcase member achievements and chapter activities.",
      image: null,
      links: [
        { platform: "linkedin", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "twitter", url: "#" }
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
              Executive Board
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated student leaders who drive our mission forward and create opportunities for our members to excel in engineering.
            </p>
          </div>
        </Section>
        
        <Section background="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {eboardMembers.map((member, index) => (
              <EboardCard
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
        
      </main>
      <Footer />
    </div>
  );
};

export default Eboard;
