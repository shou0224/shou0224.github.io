import { Avatar, Typography } from '@mui/material'
import { Box, textAlign } from '@mui/system'
import React, { useState } from 'react'

const HomeIcon = () => {
  const greet = ["H", "e", "l", "l", "o"]
  const [greets, setGreets] = useState("")
  const [index, setIndex] = useState(0)
  setTimeout(() => {
    if(index<greet.length) {
      setGreets(greets + greet[index])
    }
    setIndex(index + 1)
  }, 100)
  return (
    <Box sx={{
      width: '100px', 
      height: '100px', 
      position: 'absolute', 
      top: 'calc(50% - 50px)', 
      left: 'calc(50% - 50px)'}}>
      <Avatar sx={{margin: '10px auto'}}/>
      <Typography variant='h3'>{greets}</Typography>
    </Box>
  )
}

export default HomeIcon