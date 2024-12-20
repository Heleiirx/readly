import * as React from 'react';
import List from '@mui/material/List';
import BookItem from './bookItem';
import {GoogleBooks} from '../client-server/booksWS';
import { useSearch } from '../contexts/searchResultsContext';

export default function BookList() {
  const {books} = useSearch();

  return (
    <List sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      gap: 2,
      width: '100%',
      maxWidth: 1000, 
      bgcolor: 'background.paper',
      padding: 0,
      height: { xs: '100%', md: 'auto' },
      alignItems: 'start'
    }}>
      { books && books.length != 0 &&
        books.map((book) => (
          <BookItem key={book.id} title={book.volumeInfo.title} author={book.volumeInfo.authors} imageURL={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''} description={book.volumeInfo.description ? book.volumeInfo.description : 'No hay descripción disponible'} />
        ))
      } 
    </List>
  );
}
