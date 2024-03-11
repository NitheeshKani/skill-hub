import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Select, MenuItem, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { categories } from '../utils/constants';

const SearchBar = () => {
    const [searchTerm, set_searchTerm] = useState('');
    const [query, set_query] = useState("")
    const [city, set_city] = useState('india')
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();

        if (query) {
            console.log(searchTerm)
            navigate(`/job/${searchTerm}`)

            set_searchTerm('')
            set_query('')
        }
    };
    useEffect(() => {
        set_searchTerm(`${query}, ${city}`)
    }, [query, city])

    return (
        <Container fixed>

            <Paper
                component='form'
                onSubmit={onhandleSubmit}
                sx={{
                    borderRadius: 20,
                    border: '1px solid #e3e3e3',
                    pl: 2,
                    boxShadow: 'none',
                    mr: { sm: 5 },
                    display: 'inline-flex',
                    bgcolor: '#e3e3e3',
                    width: { xs: '100%', sm: 'auto' },
                    height: '5vh'
                }}
            >
                <input
                    style={{ backgroundColor: '#e3e3e3', width: { xs: '100%', sm: 'auto' }, height: '4vh', borderRadius: '5px' }}
                    className='search-bar'
                    placeholder='Search...'
                    list="programmingLanguages"
                    value={query}
                    onChange={(e) => set_query(e.target.value)}
                />
                <datalist id="programmingLanguages">
                    {categories.map((item) => (
                        <option value={item.name} key={item.name}>{item.name}</option>
                    ))}
                </datalist>
                <Select
                    sx={{ bgcolor: '#e3e3e3', p: '10px', color: '#0077b5' }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={city}
                    onChange={(e) => set_city(e.target.value)}
                    label="Location"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='india'>India</MenuItem>
                    <MenuItem value='usa'>USA</MenuItem>
                    <MenuItem value='europe'>Europe</MenuItem>
                    <MenuItem value={'africa'}>Africa</MenuItem>
                </Select>
                <IconButton type='submit' sx={{ bgcolor: '#e3e3e3', p: '10px', color: '#0077b5' }} aria-label='search'>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Container>
    );
}

export default SearchBar