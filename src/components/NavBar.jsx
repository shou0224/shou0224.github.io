import { Link } from 'react-router-dom';
import { Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'
import avatar from '../Images/cap.png'

const NavBar = ({onClick}) => {
  const menuList = [
    {
      id:1,
      icon: <HomeIcon />,
      name: "Home",
      path: "/"
    },
    {
      id:2,
      icon: <Person2Icon />,
      name: "Profile",
      path: "/profile"
    },
    {
      id:3,
      icon: <ArticleIcon />,
      name: "Portfolio",
      path: "/portfolio"
    },
    {
      id:4,
      icon: <EmailIcon />,
      name: "Contact",
      path: "/contact"
    }
  ]
  return (
    <Box sx={{width: '150px', height: '500px', backgroundColor: 'red', float: 'right'}}>
      <Avatar src={avatar} sx={{width: '50px', height: '50px', margin: '10px auto'}} />
      <List>
          {menuList.map(item => (
            <ListItem key={item.id}>
              <Link to={item.path} onClick={onClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </Link>
            </ListItem>
          ))}
      </List>

    </Box>
    
  )
}

export default NavBar