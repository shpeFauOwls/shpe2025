import React, { useState } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import Button from './Button';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import logo from "../assets/logo.png"
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile } = useAuth();

  // UPDATED: point "Join Now" to the Join auth flow
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'E-Board', path: '/eboard' },
    { name: 'Dev Team', path: '/devteam' },
    { name: 'Events', path: '/events' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Resources', path: '/resources' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Leaderboard', path: '/leaderboard' }, // <-- changed from /join-now
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    // For links with query params (like /signin?mode=join), just check pathname
    const basePath = path.split('?')[0];
    return location.pathname.startsWith(basePath);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Sign out error:', error.message);
      return;
    }
    setIsOpen(false);
    navigate('/', { replace: true}); // here we land on home 
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="SHPE FAU" className="h-12 object-contain" />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-shpe-blue'
                    : 'text-gray-600 hover:text-shpe-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right-side (CTA + Auth) - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Points pill / Dashboard when logged in */}
            {profile && (
              <>
                <Link
                  to="/"
                  className="text-sm font-medium text-gray-700 hover:text-shpe-blue transition-colors"
                >
                </Link>
                <span className="rounded-full bg-blue-50 text-shpe-blue px-3 py-1 text-sm font-medium">
                  {profile.full_name?.split(' ')[0] || 'Member'} • {profile.points ?? 0} pts
                </span>
              </>
            )}

            {/* Join button (only when logged out) */}
            {!user && (
              <Link to="/signin?mode=join">
                <Button variant="primary" size="sm">
                  Join SHPE
                </Button>
              </Link>
            )}

            {/* Auth buttons */}
            {!user ? (
              <Link
                to="/signin?mode=signin"
                className="text-sm font-medium text-gray-700 hover:text-shpe-blue transition-colors"
              >
                Sign in
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="text-sm font-medium text-gray-700 border rounded px-3 py-1 hover:text-shpe-blue hover:border-shpe-blue transition-colors"
              >
                Sign out
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-shpe-blue focus:outline-none focus:text-shpe-blue"
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-shpe-blue bg-blue-50'
                      : 'text-gray-600 hover:text-shpe-blue hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Dashboard + points when logged in */}
              {profile && (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-shpe-blue hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="px-3 py-2">
                    <span className="inline-block rounded-full bg-blue-50 text-shpe-blue px-3 py-1 text-sm font-medium">
                      {profile.full_name?.split(' ')[0] || 'Member'} • {profile.points ?? 0} pts
                    </span>
                  </div>
                </>
              )}

              {/* Join CTA (only when logged out) */}
              {!user && (
                <div className="pt-4">
                  <Link to="/signin?mode=signup" onClick={() => setIsOpen(false)}>
                    <Button variant="primary" size="sm" className="w-full">
                      Join SHPE
                    </Button>
                  </Link>
                </div>
              )}

              {/* Auth actions */}
              <div className="pt-2 pb-3">
                {!user ? (
                  <Link
                    to="/signin?mode=signin"
                    className="block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-shpe-blue hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign in
                  </Link>
                ) : (
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-shpe-blue hover:bg-gray-100 transition-colors"
                  >
                    Sign out
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
