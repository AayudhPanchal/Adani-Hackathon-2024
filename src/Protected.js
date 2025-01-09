import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'useAuth';

function Protected({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    children
  ) : (
    <Redirect to="/authenticate/sign-in" />
  );
}

export default Protected;