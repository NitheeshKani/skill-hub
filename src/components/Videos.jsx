import react from 'react'
import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';

const Videos = ({ videos }) => {
    return (
        <>
            <Stack direction='row' flexWrap={'wrap'} justifyContent={'start'} gap={2}>
                {videos.map((video, index) => (
                    <Box key={index}>
                        <VideoCard video={video} />
                    </Box>
                ))}
            </Stack>
        </>
    );
}

export default Videos