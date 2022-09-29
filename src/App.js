import axios from 'axios';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ISS from './component/issTrack/ISS';
import NasaGallery from './component/NasaGallery';
import LoadingPage from './loadingPage';
import Home from './pages/Home/home';

 const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<LoadingPage/>}/>
      <Route path='/home' element={<Home/>}/>
       <Route path='/issTracker' element={<ISS/>}/>
      <Route path='/nasaGallery' element={<NasaGallery/>}/>

     </Routes>
    </>
  )
}
export default App;