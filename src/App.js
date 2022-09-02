import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from  './components';

const App = () =>  (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          <Route Path='/' exact element={<Feed />} />
          <Route Path='/video/:id' element={<VideoDetail />}/>
          <Route Path='/channel/:id' element={<ChannelDetail />}/>
          <Route Path='/search/:searchTerm' element={<SearchFeed />}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )

export default App