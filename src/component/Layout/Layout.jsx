import React from 'react'
import {  Outlet , useNavigate} from 'react-router-dom'

import NavBar from '../Navbar/Navbar'


export default function Layout({userData ,setuserData}) {
  let navigate= useNavigate()
  function logOut() {
    localStorage.removeItem('userToken')
    setuserData(null)
    navigate('/Login')
  }
  return (
    <>
    <NavBar logOut={logOut} userData={userData}/>
    
    <Outlet></Outlet>
   
    </>

  )
}
