import React from "react";
import "./Home.styles.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar/>
      {/* Welcome Text */}
      <div className="home-page-content">
        <div className="wel-text">
          {/* Welcome Heading */}
          <h1 className="wel-heading">
            Easily Manage Your 
            <span> Daily Tasks</span>
          </h1>
          <div className="wel-quote">
            " Fix your inputs & then the outputs will automatically fix themeselves :) "
          </div>
          <div className="responsive-img">
            
          </div>
          <Link className="sign-up-btn" onClick={() => loginWithRedirect()}>Get Started</Link>

        </div>
        {/* Home Page Img */}
        <div className="wel-page-img"></div>
      </div>
    </div>
  );
};

export default Home;
