import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ branding }) => (
  <nav className="navbar navbar-expand navbar-dark bg-danger my-3 py-0">
    <div className="container">
      <a href="/" className="navbar-brand">
        {branding}
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Add
            <i className="fas fa-plus" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
