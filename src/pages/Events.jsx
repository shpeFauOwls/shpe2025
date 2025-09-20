import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import EventCard from '../components/EventCard';

const Events = () => {
  // Upcoming Events Data
  const upcomingEvents = [
    {
      title: "General Body Meeting #1",
      date: "September 15, 2025",
      location: "FAU Student Union Room 101",
      description: "Kick-off meeting for the semester! Learn about SHPE FAU's mission, upcoming events, and how to get involved. Meet your fellow members and the executive board.",
      image: null,
      link: "#"
    },
    {
      title: "Spring Career Fair",
      date: "March 15, 2025",
      location: "FAU Student Union Ballroom",
      description: "Connect with top employers and explore internship and full-time opportunities. Bring your resume and dress professionally!",
      image: null,
      link: "#"
    },
    {
      title: "Technical Workshop Series",
      date: "March 22, 2025",
      location: "FAU Engineering Building Room 205",
      description: "Hands-on workshops covering the latest technologies and industry trends. Perfect for all skill levels!",
      image: null,
      link: "#"
    },
    {
      title: "Alumni Networking Night",
      date: "April 5, 2025",
      location: "FAU Alumni Center",
      description: "Network with SHPE alumni working in top engineering companies. Learn about career paths and get valuable advice.",
      image: null,
      link: "#"
    },
    {
      title: "Study Group Session",
      date: "April 12, 2025",
      location: "FAU Library Study Room 3",
      description: "Collaborative study session for engineering courses. Bring your textbooks and study materials!",
      image: null,
      link: "#"
    },
    {
      title: "Community Service Day",
      date: "April 20, 2025",
      location: "Local Elementary School",
      description: "Give back to the community through STEM outreach activities. Help inspire the next generation of engineers!",
      image: null,
      link: "#"
    }
  ];

  // Past Events Data
  const pastEvents = [
    {
      title: "Fall 2024 GBM",
      date: "August 30, 2024",
      location: "FAU Student Union Room 101",
      description: "Successful kick-off meeting with 150+ attendees. Introduced new members to SHPE FAU's mission and activities.",
      image: null,
      link: null
    },
    {
      title: "Engineering Career Panel",
      date: "October 15, 2024",
      location: "FAU Engineering Building Auditorium",
      description: "Panel discussion with industry professionals from Lockheed Martin, Boeing, and NASA. Great networking opportunity!",
      image: null,
      link: null
    },
    {
      title: "Hackathon 2024",
      date: "November 10-11, 2024",
      location: "FAU Engineering Building",
      description: "24-hour coding competition with prizes and industry mentors. Over 50 participants competed!",
      image: null,
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section padding="lg" className="pt-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Events & Activities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover upcoming events, workshops, and networking opportunities. Join us for exciting activities throughout the semester!
            </p>
          </div>
        </Section>
        
        {/* Upcoming Events */}
        <Section background="gray">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  link={event.link}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Past Events */}
        <Section>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  link={event.link}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Call to Action */}
        <Section background="blue">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't miss out on our upcoming events! Follow us on social media and check back regularly for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/EXyD31DYkULLQeoyziiZgq?mode=ems_copy_c"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-shpe-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Join Our Community
              </a>
              <a
                href="https://www.instagram.com/shpe_fau/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-shpe-blue transition-colors duration-200"
              >
                Follow Us
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
