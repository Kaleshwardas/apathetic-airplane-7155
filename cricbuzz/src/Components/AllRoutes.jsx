import { Container } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './Login'
import Navbar from './Navbar'
function AllRoutes() {
  return (
    <>
       <Routes>
        <Route path='/'></Route>
        <Route path='/login' element={<Login/>}></Route>

       </Routes>
    </>
  )
}

export default AllRoutes
