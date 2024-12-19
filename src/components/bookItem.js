import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import logo192 from '../logo192.png';
import Divider from '@mui/material/Divider';
import { useDrawer } from '../contexts/drawerContext';

export default function BookItem({id, title, author, description}) {
   const {openDrawer} = useDrawer();
   const handleBookClick = (book) =>{
    openDrawer(book);
   }

    return(
      <Box onClick={()=>handleBookClick(id)}>
          <ListItem alignItems="flex-start" justifyItems="between" >
          <ListItemAvatar sx={{marginRight:1}}>
              <img src={logo192} alt="logo" style={{ width: 50, height: 50 }}/>    
          </ListItemAvatar>
          <ListItemText primary={title}
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body2" sx={{ color: 'text.primary', display: 'inline' }}>
                  {`${author}`}
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </Box>

    )
}