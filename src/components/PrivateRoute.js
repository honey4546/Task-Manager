import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Optional loader while checking authentication status
  }

  return isAuthenticated ? (
    children // Render the children if authenticated
  ) : (
    <Navigate to="/" /> // Redirect to home (or you can use a custom login page route)
  );
};

export default PrivateRoute;
