import { styled, TextField } from '@mui/material';
import React from 'react';

const StyledTextField = styled(TextField)(() => ({
  '&.MuiTextField-root': {
    borderRadius: '10px',
  },
  '&.MuiButtonBase-root:hover': {
    background: 'none',
  },
}));

export default function Input({
  children,
  placeholder,
  className,
  onChange,
  width,
  inputProps,
  hidden,
  id,
  multiple,
  sx,
  m,
  my,
  mx,
  p,
  py,
  px,
  value,
  ...otherProps
}) {
  return (
    <StyledTextField
      value={value}
      className={className}
      id={id}
      multiple={multiple}
      hidden={hidden}
      sx={{ width: width || 1, m: m || 0.5, p, py, px, my, mx, ...sx }}
      placeholder={placeholder}
      onChange={onChange}
      size="small"
      {...otherProps}
    />
  );
}
