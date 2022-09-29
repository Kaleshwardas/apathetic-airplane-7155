import { Container } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {Routes,Route} from "react-router-dom"
import { AppContext } from '../Context/AuthContentextProvider'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
function AllRoutes() {
  const { state, dispatch } = useContext(AppContext);
  console.log(state)
  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={state.login ? <Login/>: <Home/>}></Route>

       </Routes>
    </>
  )
}

export default AllRoutes
