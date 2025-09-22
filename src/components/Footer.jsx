import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg" //change from the place holder value to the official logo

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'E-Board', path: '/eboard' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
  ];
  
  const getInvolvedLinks = [
    { name: 'Join SHPE', path: '/join' },
    { name: 'Become a Sponsor', path: '/sponsors' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Gallery', path: '/gallery' },
  ];
  
  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="SHPE FAU" className="h-8 w-auto" />
                  <span className="font-bold text-lg">SHPE FAU</span>
                </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering Hispanic engineers at Florida Atlantic University since 1995.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Get Involved */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2">
                {getInvolvedLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
              <a href="https://www.instagram.com/shpe_fau/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
               <img src="/images/social/instagram.svg" alt="Instagram" className="h-6 w-6" />
               </a>
               <a href="https://www.linkedin.com/company/society-of-hispanic-professional-engineers/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
               <img src="/images/social/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
               </a>
               <a href="https://chat.whatsapp.com/EXyD31DYkULLQeoyziiZgq?mode=ems_copy_c" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
               <img src="/images/social/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
               </a>
              </div>
              <p className="text-gray-300 text-sm">shpe@fau.edu</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 SHPE FAU. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
