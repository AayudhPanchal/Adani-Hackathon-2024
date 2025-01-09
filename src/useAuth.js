import React, { createContext, useContext, useState, useEffect } from "react";

// Mocked authentication service
const authService = {
  getAuthStatus: () => localStorage.getItem("isAuthenticated") === "true",
  login: () => localStorage.setItem("isAuthenticated", "true"),
  logout: () => localStorage.removeItem("isAuthenticated"),
};

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const status = authService.getAuthStatus();
    setIsAuthenticated(status);
  }, []);

  const login = () => {
    authService.login();
    setIsAuthenticated(true);
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};