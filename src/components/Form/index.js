import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import './LoginRegister.css';


function Form() {
  const [action, setAction] = useState('');
 

  const registerLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction('');
  };

  return (
    <div className={`wrapper ${action}`}>
      <div className='form-box login'>
        <form>
          <h1>Login</h1>
          <div className='input-box'>
            <input type="text" name="username" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className='input-box'>
            <input type="password" name="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

         

          {/* <button type="button" onClick={loginLink}>Login</button> */}
         
          <div className='register-link'>
            <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
          </div>
        </form>
      </div>

      {/* ------ Registration Page ------------- */}

      <div className='form-box register'>
        <form>
          <h1>Registration</h1>
          <div className='input-box'>
            <input type="text" name="username" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className='input-box'>
            <input type="email" name="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>

          <div className='input-box'>
            <input type="password" name="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

         

          <button type="button" onClick={registerLink}>Register</button>

          <div className='register-link'>
            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
