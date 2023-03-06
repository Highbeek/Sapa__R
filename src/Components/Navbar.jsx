import React, { useState } from "react";
import { Link } from "react-router-dom";
import Love from '../assests/love.png'
import "./Navbar.css";
import SignIn from "../pages/SignIn";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleSignInClick = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="links">
            <Link className="navbar__brand" to="/">
              <img src={Love} alt="" />
              saPA
            </Link>
          </li>

          <li>
            <form className="navbar__search">
              <input type="text" name="search" />
              <button type="submit" className="navbar__search__btn btn">
                Search
              </button>
            </form>
          </li>
          <li className="links">
            <Link to="/discover">Discover</Link>
          </li>
          <li className="links">
            <Link to="/howitworks">How It Works</Link>
          </li>
          <li className="btn">
            <button onClick={handleSignInClick}>SignIn</button>
          </li>
        </ul>
      </nav>
     
      <div className={openModal ? "modal" : "modal hidden"}>
        <SignIn onClose={handleModalClose} openModal={openModal} />
      </div>
    </>
  );
};

export default Navbar;
