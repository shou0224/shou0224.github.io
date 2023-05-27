import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import avatar from '../Images/cap.png'

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
      <Avatar src={avatar} sx={{width: '100px',height: '100px', margin: '10px auto'}}/>
      <Typography variant='h3'>{greets}</Typography>
    </Box>
  )
}

export default HomeIcon