import React, { useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import HomeIcon from './HomeIcon'

const Home = () => {
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
    <div>
      <Header  onClick={toggle}/>
      <div>{open}</div>
      <HomeIcon />
    </div>
  )
}

export default Home