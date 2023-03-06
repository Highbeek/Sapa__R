import React from 'react'
import Navbar  from '../Components/Navbar'
import './SharedLayout.css'

import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const SharedLayout = () => {
  return (
    <section >
      <Navbar/>
      <Outlet/>
      <Footer/>
    </section>
  )
}

export default SharedLayout;