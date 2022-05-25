import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const MuiContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ backgroundColor: '', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
};

export default MuiContainer;
