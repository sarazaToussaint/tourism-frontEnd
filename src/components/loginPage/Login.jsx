import { React, useRef } from 'react';
import { FaLock, FaUserAlt, FaEnvelope } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';

const Login = () => {
  const containerRef = useRef(null);

  const handleSignUpClick = () => {
    containerRef.current.classList.add('sign-up-mode');
  };

  const handleSignInClick = () => {
    containerRef.current.classList.remove('sign-up-mode');
  };

  return (
    <>
      <div className="container" ref={containerRef}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <FaUserAlt className="icon" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <FaLock className="icon" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <FaUserAlt className="icon" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <FaEnvelope className="icon" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <FaLock className="icon" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Please click on the below button to see the registration form.
              </p>
              <button
                type="button"
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Please click on the below button to see the login form.
              </p>
              <button
                type="button"
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleSignInClick}
              >
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
