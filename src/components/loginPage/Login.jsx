import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink as Link } from 'react-router-dom';

const Login = () => (
  <>
    <h2>Welcome to the registration</h2>
    <div className="container1">
      <div className="forms-container2">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <Link to className="social-icon">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to className="social-icon">
                <i className="fab fa-twitter" />
              </Link>
              <Link to className="social-icon">
                <i className="fab fa-google" />
              </Link>
              <Link to className="social-icon">
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <Link to className="social-icon">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to className="social-icon">
                <i className="fab fa-twitter" />
              </Link>
              <Link to className="social-icon">
                <i className="fab fa-google" />
              </Link>
              <Link to className="social-icon">
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button type="button" className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button type="button" className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  </>
);

export default Login;