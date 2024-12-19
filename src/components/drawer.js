import React, { useState } from 'react';
import { Box, Button, SwipeableDrawer, useMediaQuery, Typography } from '@mui/material';
import { useTheme } from '@mui/system';

export default function DrawerResponsive() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Detectar pantallas pequeñas
  

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
    ) {
      return;
    }
    setDrawerIsOpen(open);
  };

  return (
    <Box>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Abrir Swipeable Side Peek
      </Button>

      <SwipeableDrawer
        anchor={isSmallScreen ? 'bottom' : 'left'} // Desde abajo en pantallas pequeñas, desde la izquierda en grandes
        open={drawerIsOpen}
        onClose={toggleDrawer(false)} // Cierra el drawer
        onOpen={toggleDrawer(true)} // Abre el drawer (necesario para SwipeableDrawer)
      >
        <Box
          sx={{
            width: isSmallScreen ? '100%' : 500, // Ancho en pantallas grandes y altura total en pequeñas
            height: isSmallScreen ? 800 : '100%', // Altura en pantallas pequeñas
            p: 2,
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)} // Cierra el drawer con teclas específicas
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
