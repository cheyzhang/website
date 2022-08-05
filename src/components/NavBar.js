import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/navbar.css';

const NavLink = ({ page }) => {
  return <Link to={`/${page}`}>{page}</Link>;
};

const NavBar = () => {
    return (
      <div className='navbar-container'>
        <div className='navbar-text'>
        <NavLink page='home' />
      <NavLink page='blog' />
      <NavLink page='projects' />
        {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav> */}
        </div>
      </div>
    );
  };
  
  export default NavBar;
