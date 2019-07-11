import React from 'react';
import natHabIcon from '../../images/logo-nha.png';
import wwfIcon from '../../images/logo-wwf.png';

const NavBar = () => {

  return (
    <header>
      <div className="nav-bar-icons">
        <img src={natHabIcon} className="nat-hab-logo" alt="Natural Habitat Adventures icon" />
        <img src={wwfIcon} className="wwf-logo" alt="WWF icon" />
      </div>
      <div className="nav-bar-links">
        <h5>HOME</h5>
        <h5>OUR TRIPS</h5>
        <h5>GUIDES & STAFF</h5>
        <h5>WHY TRAVEL WITH US?</h5>
        <h5>RESOURCES</h5>
        <h5>CONTACT US</h5>
        <h5>eNEWS SIGNUP</h5>
        <h5 className="catalog-link">GET THE CATALOG</h5>
      </div>
    </header>
  )
}

export default NavBar;