import { Button } from '@mui/base'
import { TextField, Typography } from '@mui/material'
import { Box, margin } from '@mui/system'
import React from 'react'

const Contact = () => {
  return (
    <Box component='form' sx={{width: "300px", margin: '10px auto'}}>
      <Typography>Contact</Typography>
      <TextField fullWidth={true} sx={{margin:'10px'}} id="standard-basic" label="お名前" variant="standard"/>
      <TextField fullWidth={true} sx={{margin:'10px'}} id="standard-basic" label="メールアドレス" variant="standard"/>
      <TextField fullWidth={true} sx={{margin:'10px'}} id="outlined-basic" label="ご内容" variant="outlined" />
      <Button>送信</Button>
    </Box>
  )
}

export default Contact