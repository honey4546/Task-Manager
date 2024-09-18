import React, { useState } from 'react';
import { useLocation } from "react-router-dom";


function SignInSignUpForm() {
 
    const location = useLocation();
    const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");
a  
  // State for the form fields
  const [signInForm, setSignInForm] = useState({ name: '', password: '' });
  const [signUpForm, setSignUpForm] = useState({ name: '', email: '', password: '' });
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up

  // Handle input changes
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission (just prevent page reload for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (isSignIn) {
      console.log('Sign In:', signInForm);
    } else {
      console.log('Sign Up:', signUpForm);
    }
  };

  // Toggle between forms
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {isSignIn ? (
              <form onSubmit={handleSubmit} className="sign-in-form">
                <div className="logo">
                  <img src="./img/logo.png" alt="easyclass" />
                  <h4>easyclass</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registered yet?</h6>
                  <button type="button" className="toggle" onClick={toggleForm}>
                    Sign up
                  </button>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      name="name"
                      minLength="4"
                      className="input-field"
                      value={signInForm.name}
                      onChange={handleSignInChange}
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      name="password"
                      minLength="4"
                      className="input-field"
                      value={signInForm.password}
                      onChange={handleSignInChange}
                      required
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign In" className="sign-btn" />

                  <p className="text">
                    Forgotten your password or your login details? <a href="#">Get help</a>{' '}
                    signing in
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="sign-up-form">
                <div className="logo">
                  <img src="./img/logo.png" alt="easyclass" />
                  <h4>easyclass</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <button type="button" className="toggle" onClick={toggleForm}>
                    Sign in
                  </button>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      name="name"
                      minLength="4"
                      className="input-field"
                      value={signUpForm.name}
                      onChange={handleSignUpChange}
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="email"
                      name="email"
                      className="input-field"
                      value={signUpForm.email}
                      onChange={handleSignUpChange}
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      name="password"
                      minLength="4"
                      className="input-field"
                      value={signUpForm.password}
                      onChange={handleSignUpChange}
                      required
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign Up" className="sign-btn" />

                  <p className="text">
                    By signing up, I agree to the <a href="#">Terms of Service</a> and{' '}
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img src="./img/image1.png" className="image img-1 show" alt="" />
              <img src="./img/image2.png" className="image img-2" alt="" />
              <img src="./img/image3.png" className="image img-3" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create your own courses</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your class</h2>
                </div>
              </div>

              <div className="bullets">
                <span className="active" data-value="1"></span>
                <span data-value="2"></span>
                <span data-value="3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignInSignUpForm;
