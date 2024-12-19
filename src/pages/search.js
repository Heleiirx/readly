import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import SearchInput from '../components/searchInput';
import BookList from '../components/bookList';
import DrawerResponsive from '../components/drawer';

export default function Search() {

  return (
    <Box sx={{ flexGrow: 1 }} justifyContent={'center'}>
      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        sx={{
          flexDirection: { xs: 'row', md: 'column' },
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} md={4}>
          <SearchInput />
        </Grid>
          <Grid 
            item 
            xs={12} 
            md={4} 
            container 
            spacing={2} 
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Grid item xs={6}>
              {/* Primera columna de BookList */}
              <BookList />
            </Grid>
            <Grid item xs={6}>
              {/* Segunda columna de BookList */}
              <BookList />
            </Grid>
            <DrawerResponsive />
          </Grid>
      </Grid>
    </Box>
  );
}
