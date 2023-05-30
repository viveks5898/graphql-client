import React from 'react'
import { Leftmenu } from './Leftmenu'
import { Outlet } from 'react-router-dom'

const Backend = () => {
  return (
    <div><Leftmenu/>
    <Outlet></Outlet>
    </div>
  )
}

export default Backend