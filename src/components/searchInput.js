import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from "react-icons/fa";

export default function SearchInput(){
    return(
        <Stack direction="row" spacing={2} justifyContent={'center'}>
            <IconButton>
                <FaSearch/>
            </IconButton>
            <TextField id="standard-search" label="Search field" type="search" sx={{ width: {sm:'100%', md:500} }} color='secondary'/>
        </Stack>
    )
}