import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

const NavLink = ({ page }) => {
  return (
    <Link to={`/${page}`} className="navlink-text">
      {page}
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo"></div>
      <NavLink page="home" />
      <NavLink page="blog" />
      <NavLink page="projects" />
    </div>
  );
};

export default NavBar;
