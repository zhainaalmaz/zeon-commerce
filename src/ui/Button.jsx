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
      style={{ backgroundColor: 'black' }}
      fullWidth={fullWidth}
      type={type}
      className={className}
      variant={variant}
      sx={{
        borderRadius: 0,
        textTransform: 'none',
        backgroundColor: 'black',
        color: 'white',
        marginTop: '16px',
        ...sx,
      }}
      disableRipple={disableRipple}
      onClick={onClick}
      {...other}
    >
      {children}
    </MUIButton>
  );
}
