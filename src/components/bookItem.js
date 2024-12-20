import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import genericbook from '../generic book.png';
import Divider from '@mui/material/Divider';
import { useDrawer } from '../contexts/drawerContext';

export default function BookItem({id, title, author, description, imageURL}) {
   const {openDrawer} = useDrawer();
   const handleBookClick = (book) =>{
    openDrawer(book);
   }

    return(
      <Box onClick={()=>handleBookClick(id)}>
          <ListItem alignItems="flex-start" justifyItems="between" >
          <ListItemAvatar sx={{marginRight:1}}>
              <img src={`${imageURL ? imageURL : genericbook}`} alt="logo" style={{ width: 50, height: 50 }}/>    
          </ListItemAvatar>
          <ListItemText primary={title}
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body2" sx={{ color: 'text.primary', display: 'inline' }}>
                  {`${author}`}
                </Typography>
                {` -  ${description.substring(0,100)} ...`}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </Box>

    )
}