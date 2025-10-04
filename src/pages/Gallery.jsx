import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import GalleryImage from '../components/GalleryImage';

const Gallery = () => {
  // Gallery Images Data
  const galleryImages = [
    {
      src: null, // Placeholder for now
      alt: "SHPE FAU General Body Meeting - Fall 2024"
    },
    {
      src: null,
      alt: "Engineering Career Fair - Spring 2024"
    },
    {
      src: null,
      alt: "Technical Workshop Series - Python Programming"
    },
    {
      src: null,
      alt: "Alumni Networking Night - Industry Professionals"
    },
    {
      src: null,
      alt: "Community Service Day - STEM Outreach"
    },
    {
      src: null,
      alt: "Study Group Session - Calculus Review"
    },
    {
      src: null,
      alt: "Hackathon 2024 - 24-Hour Coding Competition"
    },
    {
      src: null,
      alt: "SHPE National Conference - Student Delegation"
    },
    {
      src: null,
      alt: "Engineering Building Tour - New Facilities"
    },
    {
      src: null,
      alt: "Scholarship Awards Ceremony - Academic Excellence"
    },
    {
      src: null,
      alt: "Industry Panel Discussion - Career Paths"
    },
    {
      src: null,
      alt: "Team Building Activity - Leadership Retreat"
    },
    {
      src: null,
      alt: "Research Symposium - Student Presentations"
    },
    {
      src: null,
      alt: "Mentorship Program - Peer Support"
    },
    {
      src: null,
      alt: "Cultural Celebration - Hispanic Heritage Month"
    },
    {
      src: null,
      alt: "Graduation Recognition - Class of 2024"
    }
  ];

  const handleImageClick = (image, index) => {
    // Future enhancement: Open lightbox/modal
    console.log(`Clicked image ${index}: ${image.alt}`);
    // For now, just log to console
    // Later: Implement modal/lightbox functionality
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section padding="lg" className="pt-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of photos from events, workshops, meetings, and memorable moments throughout the academic year.
            </p>
          </div>
        </Section>
        
        {/* Gallery Grid */}
        <Section background="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={() => handleImageClick(image, index)}
              />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
