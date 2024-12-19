import React, { useState } from 'react';
import { Box, SwipeableDrawer, useMediaQuery, Typography } from '@mui/material';
import { maxHeight, maxWidth, Stack, useTheme, width } from '@mui/system';
import { useDrawer } from '../contexts/drawerContext';
import logo192 from '../logo192.png';

export default function DrawerResponsive() {
  const theme = useTheme();
  const {drawerIsOpen, closeDrawer, bookID} = useDrawer();
  // Detectar pantallas pequeñas
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); 
  
  return (
    <Box>
      <SwipeableDrawer
        anchor={isSmallScreen ? 'bottom' : 'left'}
        open={drawerIsOpen}
        onClose={closeDrawer} // Cierra el drawer
        onOpen={()=>{}} // Abre el drawer (necesario para SwipeableDrawer)
      >
        <Box
          sx={{
            width: isSmallScreen ? '100%' : 500, 
            height: isSmallScreen ? 800 : '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          role="presentation"
        >
            <Stack direction={'column'} alignItems={'center'} spacing={1} padding={2}>
                <img src={logo192} alt='Logo'></img>
                <Typography variant="h4">Titulo Libro</Typography>
                <Typography variant="h6">Autor</Typography>
                <Typography variant="body1">
                Descripcion del libro
                </Typography>
            </Stack>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}
