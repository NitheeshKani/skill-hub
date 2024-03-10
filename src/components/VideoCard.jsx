import react from 'react'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoVideoUrl } from '../utils/constants';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {


    return (
        <>
            <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: '180px' }} />
                </Link>
                <CardContent sx={{ backgroundColor: '#1e1e1e', height: '64px' }}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant="subtitle1" color="white">{snippet?.title.slice(0, 60)}</Typography>
                    </Link>
                    <Link to={snippet.channelId && videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant="subtitle2" color="grey">{snippet?.channelTitle.slice(0, 60)}</Typography>
                    </Link>
                </CardContent>
            </Card>
        </>
    );
}

export default VideoCard