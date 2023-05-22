import { Box, Button, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React, { useState } from 'react'
import NavBar from './NavBar'

const Header = () => {
  let [isOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState("")
  const toggle = () => {
    if(!isOpen) {
      setOpen(<NavBar />)
    } else {
      setOpen("")
    }
    setIsOpen(isOpen = !isOpen)
  }
  return (
    <>
    <Box sx={{width: '100%', height: '100px', backgroundColor: 'blue'}}>
      <Typography variant='h1' sx={{float: 'left'}}>Portfolio</Typography>
      <Button sx={{float: 'right'}} onClick={toggle}>
       <KeyboardBackspaceIcon sx={{fontSize: '80px', color: 'black'}} />
      </Button>
    </Box>
    <div>{open}</div>
    </>
  )
}

export default Header