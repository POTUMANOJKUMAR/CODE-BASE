// components/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state?.kitchen?.accessToken);
  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
