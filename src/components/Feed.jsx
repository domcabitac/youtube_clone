import { React, useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Sidebar from './Sidebar';

const Feed = () => (
  <Stack sx={{flexDirection:  {sx: "column", md: "row" }}}>
    <Box sx={{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3D3D3D', px: {sx: 0, md: 2}}}>
      <Sidebar />

      <Typography classname="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff'}} >
        Copyright 2022 Dom Cabitac
      </Typography>
    </Box>
    <Box>
      
    </Box>
  </Stack>
)

export default Feed