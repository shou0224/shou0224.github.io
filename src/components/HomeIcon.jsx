import { Avatar, Typography } from '@mui/material'
import { Box, textAlign } from '@mui/system'
import React from 'react'

const HomeIcon = () => {
  return (
    <Box sx={{
      width: '100px', 
      height: '100px', 
      position: 'absolute', 
      top: 'calc(50% - 50px)', 
      left: 'calc(50% - 50px)'}}>
      <Avatar sx={{margin: '10px auto'}}/>
      <Typography variant='h3'>Hello</Typography>
    </Box>
  )
}

export default HomeIcon