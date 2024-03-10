import { Box } from '@mui/material'

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Feed } from './pages/Feed'
import { Navbar } from './components/Navbar'
import { SearchFeed } from './pages/SearchFeed'
import { JobDetail } from './pages/JobDetail'
import { VideoDetail } from './pages/VideoDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Box sx={{ bgcolor: 'black' }} >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>

        </Box>

      </BrowserRouter>
    </>
  )
}

export default App
