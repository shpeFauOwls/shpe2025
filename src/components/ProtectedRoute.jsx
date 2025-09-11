import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { loading, user } = useAuth();
  if (loading) return null; // or a spinner
  return user ? children : <Navigate to="/signin" replace />;
}
