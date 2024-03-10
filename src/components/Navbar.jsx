import { Stack, Typography } from '@mui/material';
import react from 'react'
import { Link } from 'react-router-dom';
import { getImageURL } from '../utils/youtube';


export function Navbar() {
    return (
        <>
            <Stack direction="row" alignItems="center" p={2} justifyContent="flex-start" spacing={2}>

                <Link to={"/"} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={getImageURL("logo.png")} alt="logo" height={45} />
                    <Typography variant="h4" color="white"> Skill <span style={{ color: "#0077b5" }}>HUB</span></Typography>
                </Link>

            </Stack>
        </>
    );
}