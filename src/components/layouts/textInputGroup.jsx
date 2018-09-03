import React from 'react';
import PropTypes from 'prop-types';

const inputTextGroup = ({ label, value, onChange, placeholder, type }) => (
  <div>
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        className="form-control "
        type={type}
        name={label}
        value={value}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  </div>
);
inputTextGroup.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
inputTextGroup.defaultProps = {
  type: 'text',
};
export default inputTextGroup;
