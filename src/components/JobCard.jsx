import react from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { rndlang } from '../utils/constants'

const JobCard = ({ job }) => {

    let searchTerm = rndlang()
    return (
        <>
            <Card sx={{ width: { xs: '300px', sm: '400px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>

                <Link to={`/search/${(searchTerm)} language`}>
                    <CardMedia image={job?.image} sx={{ width: { xs: '300px', sm: '400px', md: '320px' }, height: '180px' }} />
                </Link>

                <CardContent sx={{ backgroundColor: '#1e1e1e', height: '64px' }}>
                    <Link to={`/job/${job.company}`}>
                        <Typography variant="subtitle1" color="white">{job.company}</Typography>
                    </Link>
                    <Typography variant="subtitle2" color="grey">{job.salaryRange == '' ? 'N/A' : job.salaryRange}</Typography>
                    <Typography variant="subtitle2" color="grey">{job.datePosted}</Typography>

                </CardContent>
            </Card>
        </>
    )
}

export default JobCard