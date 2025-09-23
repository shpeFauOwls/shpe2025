import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';

function Leaderboard() {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          
          
        

        {/* content below yerp*/}
        
        <Section padding="lg" className="pt-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Member Leaderboard
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See the rankings of all of our chapter's members. </p>
           </div>
          
          </Section>
        </main>
        <Section background="gray">
        <div className="text-center mb-16">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Currently in development.</p> 
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Please in the meantime, join us and sign in.
          </p>
          </div>
        </Section>
          
       {/*Insert below the table for the leaderboard*/}
       

       {/*Insert below how people are able to gain more points and reach higher on the leaderboard*/}

        <Footer />
    </div>
    );
  };
  
export default Leaderboard;
  