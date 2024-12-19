import * as React from 'react';
import List from '@mui/material/List';
import BookItem from './bookItem';

export default function BookList() {
 const books = [
  {
    id: "676438ede0dccbe868dd8143",
    title: "culpa culpa voluptate",
    author: "Gould Gross",
    description: "sint minim nisi in Lorem laboris aute proident dolore deserunt ex veniam irure sit dolore"
  },
  {
    id: "676438ed64c9fb51f5a6812b",
    title: "commodo duis nisi",
    author: "Marsha Barlow",
    description: "quis ad esse aute exercitation cupidatat magna est ex enim ullamco aliquip eiusmod anim nisi"
  },
  {
    id: "676438ed218bec246ce70bf1",
    title: "laborum ea aute",
    author: "Sheri Branch",
    description: "amet incididunt elit laborum exercitation aute non sint eu nulla labore id cillum non nulla"
  },
  {
    id: "676438edef3702bfe62857e7",
    title: "ut dolor qui",
    author: "Leonard Joyce",
    description: "esse consequat consequat id laborum excepteur elit dolor voluptate incididunt nisi sit tempor esse et"
  },
  {
    id: "676438ed1481534130a32a79",
    title: "eiusmod est non",
    author: "Belinda Lara",
    description: "quis voluptate est laborum quis ea ex occaecat cupidatat occaecat adipisicing quis non dolore pariatur"
  },
  {
    id: "676438ed10f7d50856c6d84b",
    title: "dolor eiusmod ad",
    author: "Lilian Fry",
    description: "ea duis cillum deserunt ullamco sunt laborum culpa fugiat exercitation laborum ut magna laboris qui"
  }
 ]

  return (
    <List sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      gap: 2,
      width: '100%',
      maxWidth: 1000, 
      bgcolor: 'background.paper',
      padding: 0,
      height: { xs: '100%', md: 'auto' }
    }}>
      {books.map((book) => (
        <BookItem key={book.id} title={book.title} author={book.author} description={book.description}/>
      ))} 
    </List>
  );
}
