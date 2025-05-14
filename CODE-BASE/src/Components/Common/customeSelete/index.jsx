// CustomSelect.js
import React from 'react';
import { Controller } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  Checkbox,
  ListItemText,
} from '@mui/material';

const CustomSelect = ({
  name,
  control,
  label,
  options = [],
  error,
  multiple = false,
}) => {
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            label={label}
            multiple={multiple}
            value={field.value || (multiple ? [] : '')}
            renderValue={(selected) =>
              multiple
                ? options
                    .filter((option) => selected.includes(option.value))
                    .map((opt) => opt.label)
                    .join(', ')
                : options.find((opt) => opt.value === selected)?.label || ''
            }
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {multiple && <Checkbox checked={field.value?.includes(option.value)} />}
                <ListItemText primary={option.label} />
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default CustomSelect;
