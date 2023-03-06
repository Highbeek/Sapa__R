import React, { useState } from "react";
import PropTypes from "prop-types";
import './SignInForm.css'

const SignInForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    console.log(`Signing in with email ${email} and password ${password}`);
  
    if (!email || !password) {
      setError("Email and password are required.");
    } else {
      setError(null);
    }
  };

  const handleSignUp = () => {
    console.log(`Signing up with email ${email} and password ${password}`);
    // Add sign-up logic here
  };

  return (
    <div className="modal__content">
      <button className="cancel__btn signIn" onClick={onClose}>
        X
      </button>
      <h2>Sign In</h2>
      <form className="signIn__form">
        <div>
          <label>Email:</label>
          <input
            className="signIn__input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="signIn__input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button
          className="signIn__btn signIn"
          type="submit"
          onClick={handleSignIn}
        >
          Sign In to <span>saPA</span>
        </button>
        <button
          className="signIn__btn signIn"
          type="submit"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <div className="forget__password">Forget your Password?</div>
      </form>
    </div>
  );
};

SignInForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SignInForm;
