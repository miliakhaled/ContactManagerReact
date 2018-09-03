import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ branding }) => (
  <nav className="navbar navbar-expand navbar-dark bg-danger mb-3 py-0">
    <div className="container">
      <Link to="/" className="navbar-brand">
        {branding}
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-home fa-xs pr-1" />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
            <i className="fas fa-plus fa-xs pr-1" />
            Add
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link ">
            <i className="fas fa-info fa-xs  pr-1" />
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
