import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { jobs } from '../utils/constants';
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { getImageURL } from '../utils/youtube';
import CodeIcon from '@mui/icons-material/Code';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WatchLaterIcon from '@mui/icons-material/WatchLater';


export function JobDetail() {
    const { id } = useParams()
    let jobDetail = {}
    jobs.forEach((job) => {
        if (job.id == id) {
            jobDetail = job
        }
    })

    return (
        <>
            {console.log(jobDetail)}
            <Box minHeight={'95vh'}>
                <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0 }}>
                    <CardMedia image={getImageURL(jobDetail.logo)} sx={{ width: '100%', height: '180px' }} />

                    <CardContent sx={{ backgroundColor: '#1e1e1e' }}>
                        <Stack>
                            <Typography variant="h4" color="white">{jobDetail.companyName}</Typography>
                            <br />
                            <Typography variant="subtitle1" color="grey"><AccountBalanceWalletIcon fontSize='11' sx={{ mr: 1 }} />{jobDetail.salary}</Typography>
                            <Typography variant="subtitle1" color="grey"><WatchLaterIcon fontSize='11' sx={{ mr: 1 }} /> {jobDetail.experienceRequired}</Typography>
                            <br />
                            <Typography variant="body1" color="white">Language Requirement:</Typography>
                            <Stack>
                                {jobDetail.programmingLanguages.map((language) => (
                                    <Link to={`/search/${language}`}>
                                        <Button key={language} variant="text" color='primary' startIcon={<CodeIcon />}>{language}</Button>
                                    </Link>
                                ))}
                            </Stack>
                            <br />
                        </Stack>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2 }} alignItems={"center"} justifyContent={'center'}>
                            <Button variant="contained" color='primary' href={jobDetail.applicationLink}>Apply Now!</Button>
                            <Button variant="contained" color='secondary' href={jobDetail.companyWebsite}>Company Site</Button>
                        </Stack>
                    </CardContent>
                </Card>
                <Typography display={{ sx: "none", md: "block" }} className='copyright' variant="body2" color={'white'} mt={2} borderTop={"1px solid #3d3d3d"}>copyright 2024 KCC</Typography>
            </Box>
        </>
    );
}