import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      <i className='fa fa-github' aria-hidden='true'>
        {" "}
        GITHUB FINDER
      </i>

      <ul className='nav-link'>
        <Link to='/'>
          <li>home</li>
        </Link>
        <Link to='/about'>
          <li>about</li>
        </Link>
      </ul>
    </nav>
  );
};

export default navbar;
