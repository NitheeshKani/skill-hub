import react from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
    return (
        <>
            <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>

                <Link to={`/search/${job.programmingLanguages[0]}`}>
                    <CardMedia image={`src/assets/logo/${job?.logo}`} sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: '180px' }} />
                </Link>

                <CardContent sx={{ backgroundColor: '#1e1e1e', height: '64px' }}>
                    <Link to={`/job/${job.id}`}>
                        <Typography variant="subtitle1" color="white">{job.companyName}</Typography>
                    </Link>
                    <Typography variant="subtitle2" color="grey">{job.salary}</Typography>
                    <Typography variant="subtitle2" color="grey">{job.experienceRequired}</Typography>

                </CardContent>
            </Card>
        </>
    )
}

export default JobCard