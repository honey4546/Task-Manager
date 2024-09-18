import React, { useState } from "react";
import "./Navbar.styles.css";
import { Link,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

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
        <Link className="nav-list-item" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-list-item" to="/about">
          About
        </Link>
       
      </div>

      <div className="auth-btn">
        <div className="sign-up" onClick={() => navigate("/signup")}>
          Sign Up
        </div>
        <div className="sign-in" onClick={() => navigate("/signin")}>
          Sign In
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
