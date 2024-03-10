import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchVideoDetail } from '../utils/youtube';
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Divider } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import GradeIcon from '@mui/icons-material/Grade';

export function VideoDetail() {
    const { id } = useParams()
    const [video, set_video] = useState([])

    useEffect(() => {
        fetchVideoDetail(id)
            .then((data) => {
                set_video(data.items[0])
            })
    }, [id])

    return (
        <>
            <Box minHeight={'95vh'}>
                <ReactPlayer url={`http://youtube.com/watch?v=${id}`} className="react-player" controls />
                {console.log(video)}

                <Stack direction={'column'} spacing={2}>
                    <Typography color="#fff" variant="h5" fontWeight={'bold'} p={2} >{video?.snippet?.title}</Typography>
                    <Typography variant="body1" p={2} color="grey">{video?.snippet?.channelTitle}</Typography>

                    <Typography variant="body2" p={2} color="grey"><VisibilityIcon fontSize='12' />  {parseInt(video?.statistics?.viewCount).toLocaleString()}  <GradeIcon fontSize='12' /> {parseInt(video?.statistics?.likeCount).toLocaleString()}</Typography>

                    <Divider textAlign="center" p={2} sx={{ color: 'white', border: "solid 1px grey" }}>Description</Divider>

                    <Typography variant="body2" p={2} color="white">{video?.snippet?.description}</Typography>
                </Stack>

            </Box>
        </>
    );
}