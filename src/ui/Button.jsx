import { Button as MUIButton } from '@mui/material';
import React from 'react';

export default function Button({
  children,
  variant,
  sx,
  align,
  disableRipple,
  className,
  type,
  onClick,
  fullWidth,
  ...other
}) {
  return (
    <MUIButton
      fullWidth={fullWidth}
      type={type}
      className={className}
      variant={variant}
      sx={{ textTransform: 'none', ...sx }}
      disableRipple={disableRipple}
      onClick={onClick}
      {...other}
    >
      {children}
    </MUIButton>
  );
}
