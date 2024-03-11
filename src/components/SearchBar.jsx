import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { jobs } from '../utils/constants';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/job/${searchTerm}`);

            setSearchTerm('');
        }
    };

    return (
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
            }}
        >
            <input
                style={{ backgroundColor: '#e3e3e3' }}
                className='search-bar'
                placeholder='Search...'
                list="programmingLanguages"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <datalist id="programmingLanguages">
                {jobs.map((job) => (
                    <option value={job.companyName} key={job.id}>{job.companyName}</option>

                ))

                }

            </datalist>
            <IconButton type='submit' sx={{ bgcolor: '#e3e3e3', p: '10px', color: '#0077b5' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchBar