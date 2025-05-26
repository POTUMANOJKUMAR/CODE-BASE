import React from 'react';
import './styles.scss';
import clsx from 'clsx';

function CustomeButton({
  label,
  variant = 'primary',
  onclick,
  type,
  icon // 👈 Add icon prop
}) {
  return (
    <div className="main_button_wrapper">
      <button type={type} onClick={onclick} className={clsx('button_class', variant)}>
        {icon && <span className="icon_wrapper">{icon}</span>}
        {label}
      </button>
    </div>
  );
}

export default CustomeButton;
