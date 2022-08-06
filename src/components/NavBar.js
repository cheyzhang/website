import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

const NavLink = ({ page }) => {
  return (
    <Link to={`/${page}`} className="navlink-text text-lg">
      {page}
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className="navbar mb-2 my-4">
      <div className="navbar-logo"></div>
      <NavLink page="home" />
      <NavLink page="blog" />
      <NavLink page="projects" />
    </div>
  );
};

export default NavBar;
