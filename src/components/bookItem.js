import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import logo192 from '../logo192.png';

export default function BookItem(){
    return(
        <ListItem alignItems="flex-start" justifyItems="between">
        <ListItemAvatar sx={{marginRight:1}}>
            <img
              src={logo192}
              alt="logo"
              style={{ width: 50, height: 50 }}/>    
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    )
}