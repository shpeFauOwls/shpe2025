import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Eboard from './pages/Eboard';
import DevTeam from './pages/DevTeam';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Sponsors from './pages/Sponsors';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Leaderboard from './pages/Leaderboard';

import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/eboard" element={<Eboard />} />
          <Route path="/devteam" element={<DevTeam />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Redirect old Join page to account creation */}
          <Route path="/join-now" element={<Navigate to="/signin?mode=signup" replace />} />

          {/* Auth */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset-password" element={<ResetPassword />} />


          {/* LeaderBoard page*/}
          <Route path="/leaderboard" element= {< Leaderboard/>} />

          {/* Fallback to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
