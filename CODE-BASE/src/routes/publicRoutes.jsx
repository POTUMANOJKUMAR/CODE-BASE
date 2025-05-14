// components/routes/PublicRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state?.kitchen?.accessToken);
  return isAuthenticated ? <Navigate to="/main/dashboard" replace /> : children;
};

export default PublicRoute;
