import { Stack, Typography, Container } from '@mui/material';
import react from 'react'
import { Link } from 'react-router-dom';
import { getImageURL } from '../utils/youtube';
import SearchBar from './SearchBar';
import HomeIcon from '@mui/icons-material/Home';


export function Navbar() {
    return (
        <>
            <Container maxWidth="sm">
                <Stack direction="row" alignItems="center" p={2} justifyContent="flex-start" spacing={2}>

                    <Link to={"/"} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={getImageURL("logo.png")} alt="logo" height={45} />
                        <Typography variant="h5" color="white" sx={{ display: { xs: "none", sm: "block" } }} > Skill <span style={{ color: "#0077b5" }}>HUB</span> <HomeIcon /></Typography>

                    </Link>
                    <SearchBar />

                </Stack>
            </Container>
        </>
    );
}