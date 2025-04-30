import React from 'react';
import './styles.scss';
import ExportedData from '../../../../public';
import clsx from 'clsx'; // Optional: install with npm install clsx

import ErrorMessage from '../ErrorMasages';
const CustomInput = ({
  label,
  type = "text",
  placeholder,
  // value,
  // onChange,
  name,
  icon = null, // any icon JSX or image URL
  iconPosition = "right", // "left" or "right"
  row = false,
  className = '',
  inputId = name,
  register,
  error,
  disabled,
  maxlength
  
}) => {
  console.log(error,name,"error")
  return (
    <div className={clsx(row ? "custom-input-wrapper_row" : "custom-input-wrapper_col", className)}>
      <div>
      {label && <label className="custom-input-label" htmlFor={inputId}>{label}</label>}
      <div className="input_Icon_wrapper">
        {icon && iconPosition === "left" && (
         <img
          src={ExportedData?.headerIcons?.search}
          alt="Search Icon"
          height={19.14}
          width={19.14}
        />
        )}
        <input
          id={inputId}
          // ref={register}
          {...register? register(name):{}}
          className="custom-input-field"
          type={type}
          placeholder={placeholder}
          // value={value}
          // onChange={onChange}
          name={name}
          onWheel={(e) => e.target.blur()}
          disabled={disabled}
          maxLength={maxlength}
        />
        {icon && iconPosition === "right" && (
         <img
          src={ExportedData?.headerIcons?.search}
          alt="Search Icon"
          height={19.14}
          width={19.14}
        />
        )}
      </div>
      </div>
     
        {
          error?.message &&  <ErrorMessage  messages={error?.message} />
        }
     
     
     
    </div>
  );
};
export default CustomInput;

