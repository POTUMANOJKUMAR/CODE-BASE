import React from 'react';
import './styles.scss';
import clsx from 'clsx'; // Optional utility for conditional class names

function CustomeButton({
  label,
  variant = 'primary', // default to 'primary'
  onclick,type
}) {
  return (
    <div className="main_button_wrapper">
      <button type={type} onClick={onclick} className={clsx('button_class', variant)}>{label}</button>
    </div>
  );
}

export default CustomeButton;
