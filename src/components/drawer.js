import React, { useState } from 'react';
import { Box, SwipeableDrawer, useMediaQuery, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { useDrawer } from '../contexts/drawerContext';

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
        <img src='' alt='' ></img>
        <Box
          sx={{
            width: isSmallScreen ? '100%' : 500, 
            height: isSmallScreen ? 800 : '100%',
            p: 2,
          }}
          role="presentation"
        >
          <Typography variant="h6">Contenido del Swipeable Side Peek</Typography>
          <Typography variant="body1">
            Aquí puedes agregar contenido interactivo con soporte para gestos.
          </Typography>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}
