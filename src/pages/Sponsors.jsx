import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import SponsorCard from '../components/SponsorCard';

const Sponsors = () => {
  // Gold Tier Sponsors
  const goldSponsors = [
    {
      name: "Lockheed Martin",
      logo: null,
      tier: "Gold",
      url: "https://lockheedmartin.com"
    },
    {
      name: "Boeing",
      logo: null,
      tier: "Gold",
      url: "https://boeing.com"
    },
    {
      name: "NASA",
      logo: null,
      tier: "Gold",
      url: "https://nasa.gov"
    },
    {
      name: "SpaceX",
      logo: null,
      tier: "Gold",
      url: "https://spacex.com"
    }
  ];

  // Silver Tier Sponsors
  const silverSponsors = [
    {
      name: "Microsoft",
      logo: null,
      tier: "Silver",
      url: "https://microsoft.com"
    },
    {
      name: "Google",
      logo: null,
      tier: "Silver",
      url: "https://google.com"
    },
    {
      name: "Amazon",
      logo: null,
      tier: "Silver",
      url: "https://amazon.com"
    },
    {
      name: "Intel",
      logo: null,
      tier: "Silver",
      url: "https://intel.com"
    },
    {
      name: "IBM",
      logo: null,
      tier: "Silver",
      url: "https://ibm.com"
    },
    {
      name: "Oracle",
      logo: null,
      tier: "Silver",
      url: "https://oracle.com"
    }
  ];

  // Bronze Tier Sponsors
  const bronzeSponsors = [
    {
      name: "Tesla",
      logo: null,
      tier: "Bronze",
      url: "https://tesla.com"
    },
    {
      name: "Apple",
      logo: null,
      tier: "Bronze",
      url: "https://apple.com"
    },
    {
      name: "Meta",
      logo: null,
      tier: "Bronze",
      url: "https://meta.com"
    },
    {
      name: "Netflix",
      logo: null,
      tier: "Bronze",
      url: "https://netflix.com"
    },
    {
      name: "Uber",
      logo: null,
      tier: "Bronze",
      url: "https://uber.com"
    },
    {
      name: "Airbnb",
      logo: null,
      tier: "Bronze",
      url: "https://airbnb.com"
    },
    {
      name: "Spotify",
      logo: null,
      tier: "Bronze",
      url: "https://spotify.com"
    },
    {
      name: "Zoom",
      logo: null,
      tier: "Bronze",
      url: "https://zoom.us"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section padding="lg" className="pt-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Sponsors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thank you to our corporate partners who support our mission and our members. Their contributions help us provide valuable opportunities and resources to the next generation of Hispanic engineers.
            </p>
          </div>
        </Section>
        
        {/* Gold Tier Sponsors */}
        <Section background="gray">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Gold Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {goldSponsors.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  tier={sponsor.tier}
                  url={sponsor.url}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Silver Tier Sponsors */}
        <Section>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Silver Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {silverSponsors.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  tier={sponsor.tier}
                  url={sponsor.url}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Bronze Tier Sponsors */}
        <Section background="gray">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Bronze Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bronzeSponsors.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  tier={sponsor.tier}
                  url={sponsor.url}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Become a Sponsor CTA */}
        <Section background="blue">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Become a Sponsor
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our network of corporate partners and help support the next generation of Hispanic engineers. Your sponsorship makes a real difference in our students' lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-shpe-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Learn About Sponsorship
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-shpe-blue transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;
