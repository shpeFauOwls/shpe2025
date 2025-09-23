 import React from 'react';
 import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';
 import Section from '../components/Section';
 import EboardCard from '../components/EboardCard';
 import data from '../content/eboard.json';


const Eboard = () => {
  const eboardMembers = data.eboard || [];

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