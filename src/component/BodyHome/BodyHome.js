import { Box , Container, Typography} from '@mui/material';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import Earth from '../earth';

 const BodyHome = () => {
  return (
    <Box sx={{position : 'relative' , top : 160}}>
        <Box sx={{width : '80%' , margin : 'auto' , display : 'flex', justifyContent : 'center' , alignItems : 'center' , color : '#fff'}}>
                <Box sx={{width : '50%' , height : '500px' }}>    
                 <Typography variant='h3'>01 Pick your  DESTINATiON</Typography>                
                <Canvas>
                <Suspense fallback={null}>
                 <Earth/>
                </Suspense>
               </Canvas>
                </Box>
                <Box sx={{flexGrow : 1}}/>
                <Box sx={{width : '40%' }}>
                  <Box sx={{display : 'flex' , width : '70%' , justifyContent :'space-evenly' ,  alignItems : 'center'}}>
                  <Typography>MOON</Typography>
                  <Typography>MARS</Typography>
                  <Typography>EUROPA</Typography>
                  <Typography>TITAN</Typography>
                  </Box>  
                  <Typography variant='h1'>MOON</Typography>
                  <Typography>
                  The Moon is Earth's only natural satellite. Together with Earth it forms the Earth–Moon satellite system. It is about one-quarter of Earth in diameter (comparable to the width of Australia).[16] In the Solar System it is the fifth largest satellite, larger than any of the known dwarf planets and the largest (and most massive) satellite of a planet relative to the planet.[f] The Moon is a planetary-mass object that formed a differentiated rocky body, making it a satellite planet under the geophysical definitions of the term.[17] It lacks any significant atmosphere, hydrosphere, or magnetic field. Its surface gravity is about one-sixth of Earth's (0.1654 g). Jupiter's moon Io is the only satellite in the Solar System known to have a higher surface gravity and density.
                  </Typography>
                  <hr/>

                  <Box sx={{display : 'flex'  ,  alignItems : 'center' , width : '80%'}}>
                    <Box sx={{width : '50%'}}>
                      <Typography>AVG, distance</Typography>
                      <Typography>384,400 KM</Typography>
                    </Box>
                    <Box sx={{width : '50%'}}>
                      <Typography>EST, travel time</Typography>
                      <Typography>3 Days</Typography>
                    </Box>
                  </Box>
                </Box>
        </Box>
    </Box>
  )
}
export default BodyHome;