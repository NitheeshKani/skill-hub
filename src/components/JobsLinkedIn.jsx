import { useEffect, useState, useCallback } from 'react'
import { Box, Stack } from '@mui/material';
import JobCard from './JobCard';
import { fetchJobs } from '../utils/youtube';
import { fetchLinkedInJobs } from '../utils/linkedin';
import { newJob } from '../utils/constants';



const JobsLinkedIn = ({ lang }) => {
    // const jobs = fetchJobs(lang)
    const [jobs, set_jobs] = useState(newJob)

    useEffect(() => {
        fetchLinkedInJobs(lang, 'india')
            .then((response) => {
                set_jobs(response.jobs)
                console.log(jobs)
            })

    }, [lang])
    return (
        <>
            {jobs && <Stack direction='row' flexWrap={'wrap'} justifyContent={'start'} gap={2}>
                {jobs.map((job, index) => (
                    <Box key={index}>
                        <JobCard job={job} />

                    </Box>
                ))}
            </Stack>}
        </>
    );
}

export default JobsLinkedIn