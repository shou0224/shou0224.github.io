import { Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import ArticleIcon from '@mui/icons-material/Article';
import React from 'react'

const NavBar = () => {
  const menuList = [
    {
      id:1,
      icon: <HomeIcon />,
      name: "Home",
    },
    {
      id:2,
      icon: <Person2Icon />,
      name: "Profile",
    },
    {
      id:3,
      icon: <ArticleIcon />,
      name: "Portfolio",
    }
  ]
  return (
    <Box sx={{width: '150px', height: '500px', backgroundColor: 'red', float: 'right'}}>
      <Avatar />
      <List>
          {menuList.map(item => (
            <ListItem key={item.id}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItem>
          ))}
      </List>

    </Box>
  )
}

export default NavBar