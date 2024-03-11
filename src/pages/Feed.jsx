import { Box, Stack, Typography, colors } from '@mui/material';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Videos from '../components/Videos';
import { fetchVideos } from '../utils/youtube';
import JobsLinkedIn from '../components/JobsLinkedIn';
import { fetchLinkedInJobs } from '../utils/linkedin';



export function Feed() {
    const [selectedCategory, set_selectedCategory] = useState('Wipro')

    return (
        <>
            <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
                <Box sx={{ height: { md: '600px', sx: 'auto' }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                    <Sidebar selectedCategory={selectedCategory} set_selectedCategory={set_selectedCategory} />
                    <Typography display={{ sx: "none", md: "block" }} className='copyright' variant="body2" color={'white'} mt={2} borderTop={"1px solid #3d3d3d"}>copyright 2024 KCC</Typography>
                </Box >

                <Box overflow={"auto"} p={2} height={'90vh'} flex={2}>
                    <Typography variant='h4' color={"white"} fontWeight={'bold'}>
                        {selectedCategory} <span style={{ color: "#0077b5" }}>Jobs</span>
                    </Typography>

                    <JobsLinkedIn lang={selectedCategory} />
                </Box>

            </Stack>
        </>
    );
}