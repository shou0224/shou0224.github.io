import { Box, Button, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React from 'react'

const Header = ({onClick}) => {
  return (
    <Box sx={{width: '100%', height: '100px', backgroundColor: 'blue'}}>
      <Typography variant='h1' sx={{float: 'left'}}>Portfolio</Typography>
      <Button sx={{float: 'right'}} onClick={onClick}>
       <KeyboardBackspaceIcon sx={{fontSize: '80px', color: 'black'}} />
      </Button>
    </Box>
  )
}

export default Header