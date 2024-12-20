import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from "react-icons/fa";
import { Button } from '@mui/material';
import { useSearch } from '../contexts/searchResultsContext';

export default function SearchInput(){
    const [search, setSearch] = React.useState('');
    const {searchBooks} = useSearch();

    const handleSearch = () => {
        searchBooks(search);
    }

    return(
        <Stack direction="row" spacing={2} justifyContent={'center'}>
            <IconButton>
                <FaSearch/>
            </IconButton>
            <TextField 
                id="standard-search" 
                label="Escribe el libro o autor" 
                type="search" 
                sx={{ width: {sm:'100%', md:500} }} 
                color='secondary'
                content={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={()=>handleSearch()}>
                Buscar
            </Button>
        </Stack>
    )
}