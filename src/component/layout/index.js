import { Box } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import LandingStar from '../star/Star';
import Navbar from './Navbar';

 const Layout = () => {
  return (
    <Box sx={{width : '100%' , height : '100vh' , backgroundColor : '#07073a' , position : 'absolute' }}>
      <Navbar/>
      <Canvas>
        <Suspense fallback={null}>
           <LandingStar/>
        </Suspense>
      </Canvas>
    </Box>
  )
}
export default Layout;