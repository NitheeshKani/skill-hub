import react from 'react'
import { Box, Stack } from '@mui/material';
import JobCard from './JobCard';
import { fetchJobs } from '../utils/youtube';



const JobsLinkedIn = ({ lang }) => {
    const jobs = fetchJobs(lang)

    return (
        <>
            <Stack direction='row' flexWrap={'wrap'} justifyContent={'start'} gap={2}>
                {jobs.map((job, index) => (
                    <Box key={index}>
                        <JobCard job={job} />
                    </Box>
                ))}
            </Stack>
        </>
    );
}

export default JobsLinkedIn