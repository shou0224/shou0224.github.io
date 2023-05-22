import { Box, Button, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React, { useState } from 'react'
import NavBar from './NavBar'

const Header = () => {
  let [isOpen, setIsOpen] = useState(false)
  const [arrows, setArrows] = useState(<KeyboardBackspaceIcon sx={{fontSize: '80px', color: 'black'}} />)
  const [open, setOpen] = useState("")
  const toggle = () => {
    if(!isOpen) {
      setOpen(<NavBar onClick={toggle}/>)
      setArrows(<ArrowRightAltIcon sx={{fontSize: '80px', color: 'black'}}/>)
    } else {
      setOpen("")
      setArrows(<KeyboardBackspaceIcon sx={{fontSize: '80px', color: 'black'}} />)
    }
    setIsOpen(isOpen = !isOpen)
  }
  return (
    <>
    <Box sx={{width: '100%', height: '100px', backgroundColor: 'blue'}}>
      <Typography variant='h1' sx={{float: 'left'}}>Portfolio</Typography>
      <Button sx={{float: 'right'}} onClick={toggle}>
        <div>{arrows}</div>
       {/* <KeyboardBackspaceIcon sx={{fontSize: '80px', color: 'black'}} /> */}
      </Button>
    </Box>
    <div>{open}</div>
    </>
  )
}

export default Header