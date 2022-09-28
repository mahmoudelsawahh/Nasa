import axios from 'axios';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './component/issTrack/Main';
import LoadingPage from './loadingPage';
import Home from './pages/Home/home';

 const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<LoadingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/main' element={<Main/>}/>

     </Routes>
    </>
  )
}
export default App;