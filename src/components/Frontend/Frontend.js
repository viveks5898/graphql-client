import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Frontend = (props) => {
  return (
    <div>
<Header/>
<Outlet></Outlet>
<Footer/>

    </div>
  )
} 

export default Frontend