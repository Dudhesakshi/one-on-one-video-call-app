import React from 'react'
import ZegoCloud from './ZegoCloud'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import VideoRoom from './VideoRoom'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<ZegoCloud/>}></Route>
    <Route path='/room/:id' element={<VideoRoom />}></Route>
    </Routes></BrowserRouter>
  )
}

export default App
