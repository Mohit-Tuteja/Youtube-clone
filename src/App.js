import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Box} from '@mui/material';
import { Navbar,Feed,ChannelDetail,SearchFeed,VideoDetail } from "./components";

import React from "react";
const App = () => {
  return (
  <BrowserRouter>
  <Box sx={{backgroundColor: '8000'}}>
    <Navbar/>
    <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
    </Routes>

  </Box>
  </BrowserRouter>)
}

export default App