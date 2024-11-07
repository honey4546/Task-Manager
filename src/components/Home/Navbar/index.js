import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.styles.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  // Redirect authenticated user to the dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <nav>
      {/* logo */}
      <div className="logo">
        Task<span>Manager</span>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Dialogue box Nav List */}
      {navOpen && (
        <div
          className="nav-box"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <div className="nav-list-box">
            <Link className="nav-list-item-ham" to="/">
              Home
            </Link>
            <Link className="nav-list-item-ham" to="/dashboard">
              Dashboard
            </Link>
            <Link className="nav-list-item-ham" to="/about">
              About
            </Link>
          </div>
        </div>
      )}

      {/* Static List */}
      <div className="nav-list">
        <Link className="nav-list-item" to="/">
          Home
        </Link>
        {/* <Link className="nav-list-item" to="/dashboard">
          Dashboard
        </Link> */}
        <Link className="nav-list-item" to="/about">
          About
        </Link>
      </div>

      <div className="auth-btn">
        {!isAuthenticated && (
          <button className="signIn-btn" onClick={() => loginWithRedirect()}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
