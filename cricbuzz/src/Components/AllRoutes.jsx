
import React, { useContext } from 'react'
import {Routes,Route} from "react-router-dom"
import { AppContext } from '../Context/AuthContentextProvider'
import Home from './Home'
import Login from './Login'
import News from './News'
import Video from './Video'
function AllRoutes() {
  const { state} = useContext(AppContext);
  // console.log(state)
  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={state.login ? <Login/>: <Home/>}></Route>
        <Route path="/users/:news_id" element={<News/>}></Route>
        <Route path="/video/:video_id" element={<Video/>}></Route>

       </Routes>
    </>
  )
}

export default AllRoutes
