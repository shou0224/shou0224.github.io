import { Avatar,List, ListItem, ListItemText, Typography } from '@mui/material'
import { Box, textAlign } from '@mui/system'
import React from 'react'

const Profile = () => {
  return (
    <Box sx={{width: '1000px'}}>
      <Typography variant='h2'>Profile</Typography>
      <Avatar sx={{float: 'left',margin:'10px', width: '100px', height: '100px'}}/>
      <List sx={{magin: "50px auto",float: 'left', textAlign: 'center' , width: "500px"}}> 
        <ListItem>
          <ListItemText>生年月日:　2000年2月24日</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>出身:　北海道</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>趣味:　ランニング・野鳥観察・アニメ鑑賞</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>スキル:　HTML/CSS/JS/React/TS/Unity/C#/Git</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>やりたいこと:　社会に役立つサービスの開発</ListItemText>
        </ListItem>
      </List>
    </Box>
    
  )
}

export default Profile