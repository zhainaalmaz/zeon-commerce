import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, styled } from '@mui/material';

const Title = ({ children }) => (
  <AppBar sx={{ position: 'relative', mb: '1rem' }}>
    <Toolbar>
      <Typography sx={{ flex: 1 }} variant="h6" component="div" align="center">
        {children}
      </Typography>
    </Toolbar>
  </AppBar>
);

const Body = ({ children }) => <List>{children}</List>;

const Footer = ({ children }) => <Box p="20px">{children}</Box>;

Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;

export default function Modal({ open, onClose, children, sx }) {
  return (
    <StyledDialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      sx={{ textAlign: 'center', ...sx }}
    >
      {children}
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)(() => ({
  '& .css-tlc64q-MuiPaper-root-MuiDialog-paper': {
    borderRadius: '10px',
  },
}));
