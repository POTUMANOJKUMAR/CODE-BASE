import React from 'react';
import './styles.scss'; // Import styles

const CustomInput = ({ label, type = "text", placeholder, value, onChange, name }) => {
  return (
    <div className="custom-input-wrapper">
      {label && <label className="custom-input-label">{label}</label>}
      <input
        className="custom-input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default CustomInput;
