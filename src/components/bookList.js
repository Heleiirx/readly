import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import BookItem from './bookItem';

export default function BookList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <BookItem />
      <Divider variant="inset" component="li" />
    </List>
  );
}
