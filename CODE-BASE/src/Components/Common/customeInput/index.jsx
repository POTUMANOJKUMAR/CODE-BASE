import React from 'react';
import './styles.scss';
import ExportedData from '../../../../public';
import clsx from 'clsx';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


const CustomInput = ({
  label,
  type = "text",
  placeholder,
  name,
  icon = null,
  iconPosition = "right",
  row = false,
  className = '',
  inputId = name,
  register,
  error,
  disabled,
  maxlength
}) => {
  const inputProps = {
    maxLength: maxlength,
    onWheel: (e) => e.target.blur()
  };

  const adornmentIcon = (
    <img
      src={ExportedData?.headerIcons?.search}
      alt="icon"
      height={19.14}
      width={19.14}
    />
  );

  return (
    <div className={clsx(row ? "custom-input-wrapper_row" : "custom-input-wrapper_col", className)}>
      <div>
        <TextField
          id={inputId}
          label={label}
          variant="outlined"
          type={type}
          placeholder={placeholder}
          name={name}
          fullWidth
          size="small"
          disabled={disabled}
          error={!!error}
          helperText={error?.message}
          InputProps={{
            startAdornment: icon && iconPosition === "left" ? (
              <InputAdornment position="start">{adornmentIcon}</InputAdornment>
            ) : null,
            endAdornment: icon && iconPosition === "right" ? (
              <InputAdornment position="end">{adornmentIcon}</InputAdornment>
            ) : null,
            ...inputProps,
          }}
          {...(register ? register(name) : {})}
        />
      </div>

      {/* Optional: Additional error message component if needed */}
      {/* {
        error?.message && <ErrorMessage messages={error?.message} />
      } */}
    </div>
  );
};

export default CustomInput;
