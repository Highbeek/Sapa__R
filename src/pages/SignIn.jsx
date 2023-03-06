import React from "react";
import PropTypes from "prop-types";
import SignInForm from "../Components/SignInForm";
import "./SignIn.css";

const SignIn = ({ onClose, openModal }) => {
  return (
    <div className={openModal ? "modal" : "modal hidden"}>
      <SignInForm onClose={onClose} />
    </div>
  );
};

SignIn.propTypes = {
  onClose: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default SignIn;
