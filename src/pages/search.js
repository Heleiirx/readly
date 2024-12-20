import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import SearchInput from '../components/searchInput';
import BookList from '../components/bookList';
import DrawerResponsive from '../components/drawer';
import { DrawerProvider } from '../contexts/drawerContext';
import { GoogleBooks } from '../client-server/booksWS';
import { SearchProvider } from '../contexts/searchResultsContext';

export default function Search() {

  return (
    <Box sx={{ flexGrow: 1, padding:2}} justifyContent={'center'}>
      <DrawerProvider>
        <SearchProvider>
          <Grid container spacing={2} justifyContent={'center'}
            sx={{
              flexDirection: { xs: 'row', md: 'column' },
              alignItems: 'center',
            }}
          >
            <SearchInput />
            <Grid item xs={12} md={4} container spacing={2}  >
              <Grid item xs={6}>
                <BookList />
              </Grid>
            </Grid>
            <DrawerResponsive />
          </Grid>
        </SearchProvider>
      </DrawerProvider>
    </Box>
  );
}
