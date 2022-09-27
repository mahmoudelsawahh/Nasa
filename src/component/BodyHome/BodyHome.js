import './BodyHome.css'
import { Box , Typography} from '@mui/material';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react'
import Earth from '../earth';
import Moon from '../planets/moon';
import Venus from '../planets/venus';
import Neptune from '../planets/neptune';

 const BodyHome = () => {
  const [moon , setMoon] = useState(true);
   const [earth , setEarth] = useState(false);
   const [venus , setVenus] = useState(false);
   const [neptune , setNeptune] = useState(false);
  
   const planets = ()=>{
      if(moon){
           return <Moon/>
      }else if (earth){
        return <Earth/>
      }else if (venus){
        return <Venus/>
      }else{
        return <Neptune/>
      }
   }
    
  return (
    <div className='parent'>
        <Box sx={{width : {xl : '80%' ,  xs : ' 80%'} , margin : 'auto' , display : {lg : 'flex' , xs : 'block'}, justifyContent : 'center' , alignItems : 'center' , color : '#fff'}}>
                <Box sx={{width : {lg : '50%' , xs : '100%' }, height : {lg : '500px' , xs : '300px' } }}>    
                 <h1 className='headerImg'><span>01</span> Pick your  DESTINATiON</h1>                
                <Canvas>
                <Suspense fallback={null}>
                  {planets()}
                </Suspense>
               </Canvas>
                </Box>
                <Box sx={{flexGrow : 1}}/>

                <Box sx={{width : {lg : '40%' , xs : '100%'} , marginTop : {lg : 0 , xs : '90px'} }}>
                  <Box>
                  <Box sx={{display : 'flex' , width : {xl : "80%" , xs : '50%'} , justifyContent :'space-between' ,  alignItems : 'center' , marginBottom : '15px'}}>
                  <h2 className={moon ?  'borderBottom' : null} onClick={()=> {
                    setEarth(false)
                    setVenus(false)
                    setNeptune(false)
                    setMoon(true)
                  }}>MOON</h2>
                  <h2 className={earth ?  'borderBottom' : 'null'} onClick={()=> {
                    setEarth(true)
                    setVenus(false)
                    setNeptune(false)
                    setMoon(false)
                  }}>EARTH</h2>
                  <h2 className={venus ?  'borderBottom' : null} onClick={()=> {
                    setEarth(false)
                    setVenus(true)
                    setNeptune(false)
                    setMoon(false)
                  }}>VENUS</h2>
                  <h2 className={neptune ?  'borderBottom' : null} onClick={()=> {
                    setEarth(false)
                    setVenus(false)
                    setNeptune(true)
                    setMoon(false)
                  }}>NEPTUNE</h2>
                  </Box>  
                  </Box>
                  <Typography variant='h1' mb={1}>MOON</Typography>
                  <Typography sx={{lineHeight: '2.1' , marginBottom : '25px'}}>
                  The Moon is Earth's only natural satellite. Together with Earth it forms the Earth–Moon satellite system. It is about one-quarter of Earth in diameter (comparable to the width of Australia).[16] In the Solar System it is the fifth largest satellite, larger than any of the known dwarf planets and the largest (and most massive) satellite of a planet relative to the planet. 
                  </Typography>
                  <hr style={{marginBottom : '30px'}}/>

                  <Box sx={{display : 'flex'  ,  alignItems : 'center' , width : '95%'}}>
                    <Box sx={{width : '50%'}}>
                      <Typography variant='h6' mb={2}>AVG, distance</Typography>
                      <h2 variant='h4'>384,400 KM</h2>
                    </Box>
                    <Box sx={{width : '50%'}}>
                      <Typography variant='h6' mb={2}>EST, travel time</Typography>
                      <h2>3 Days</h2>
                    </Box>
                  </Box>
                </Box>
        </Box>
    </div>
  )
}
export default BodyHome;