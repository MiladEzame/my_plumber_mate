import React, {useState} from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/Info/data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Banner/>
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Info {...homeObjThree}/>
      <Info {...homeObjFour}/>
      <Info {...homeObjFive}/>
      <Services/>
      <Footer/>
    </>
  )
}

export default Home
