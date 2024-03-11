import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { newJob, rndlang } from '../utils/constants';
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { fetchLinkedInJobs, searchSplit } from '../utils/linkedin';
import CodeIcon from "@mui/icons-material/Code";


export function JobDetail() {
    const { id } = useParams()
    const [job, set_jobs] = useState(newJob)
    let languages = [rndlang(), rndlang(), rndlang()]

    useEffect(() => {
        let term = searchSplit(id)
        if (term.lenght == 1) {
            term.push('india')
        }
        fetchLinkedInJobs(term[0], term[1])
            .then((response) => {
                set_jobs(response.jobs[0])
                console.log(job)
            })

    }, [id])


    return (
        <>
            <Box minHeight={'95vh'}>
                <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0 }}>

                    <CardContent sx={{ backgroundColor: '#1e1e1e' }}>
                        <Stack direction={'column'} spacing={{ xs: 1, sm: 2 }} alignItems={"center"} justifyContent={'space-evenly'}>
                            <Stack direction={'row'} alignItems={"center"} justifyContent={'space-evenly'}>
                                <img src={job?.image} alt="Logo" style={{ width: '175px', height: '175px', borderRadius: '50%', border: '1px solid white', margin: '1vh' }} />
                                <Stack>
                                    <Typography variant="h4" color="white">{job.company}</Typography>
                                    <br />
                                    <Typography variant="subtitle1" color="grey"><AccountBalanceWalletIcon fontSize='11' sx={{ mr: 1 }} />{job.salaryRange == '' ? 'N/A' : job.salaryRange}</Typography>
                                    <Typography variant="subtitle1" color="grey"><WatchLaterIcon fontSize='11' sx={{ mr: 1 }} /> {job.employmentType}</Typography>
                                    <br />
                                    <Typography variant="h5" color="white">{job.location}</Typography>
                                    <br />
                                </Stack>
                            </Stack>

                            <Stack>
                                <Typography variant="h5" color="white">Description:</Typography>
                                <Typography variant="body1" color="white">{job.description}</Typography>
                            </Stack>

                        </Stack>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2 }} alignItems={"center"} justifyContent={'center'}>
                            <Button variant="contained" color="primary" href={`https://www.${job.company}.com`}>Apply Now</Button>
                            {languages.map((language) => (
                                <Button href={`/search/${language} language`} key={language} startIcon={<CodeIcon />}>{language}</Button>

                            ))}
                        </Stack>
                    </CardContent>
                </Card>
                <Typography display={{ sx: "none", md: "block" }} className='copyright' variant="body2" color={'white'} mt={2} borderTop={"1px solid #3d3d3d"}>copyright 2024 KCC</Typography>
            </Box >
        </>
    );
}