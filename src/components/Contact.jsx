import { Button } from '@mui/base'
import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Contact = () => {
  return (    
    <Box 
      component='form' 
      action='https://fabform.io/f/pI5qltu' 
      method='post' 
      sx={{width: "300px", margin: '10px auto'}}>
      <Typography>Contact</Typography>
      <TextField 
        fullWidth={true} 
        sx={{margin:'10px'}} 
        id="standard-basic" 
        label="お名前" 
        name='Name'
        type='text'
        variant="standard"
        required/>
      <TextField 
        fullWidth={true} 
        sx={{margin:'10px'}} 
        id="standard-basic" 
        label="メールアドレス" 
        name='Email'
        type='email'
        variant="standard"
        required/>
      <TextField 
        fullWidth={true} 
        sx={{margin:'10px'}} 
        id="outlined-basic" 
        label="ご内容" 
        name='content'
        variant="outlined"
        required />
      <Button type='submit'>送信</Button>
    </Box>
  )
}

export default Contact