import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Videos from '../components/Videos';
import { fetchVideos } from '../utils/youtube';
import { useParams } from 'react-router-dom';



export function SearchFeed() {
    const [videos, set_videos] = useState([])
    const { searchTerm } = useParams()

    useEffect(() => {

        fetchVideos(searchTerm, 10)
            .then((data) => {
                set_videos(data.items)
            })
    }, [searchTerm])

    return (
        <>

            <Box overflow={"auto"} p={2} height={'90vh'} flex={2} justifySelf={'center'}>

                <Typography variant='h4' color={"white"} fontWeight={'bold'}>
                    {searchTerm} <span style={{ color: "#0077b5" }}>Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </>
    );
}