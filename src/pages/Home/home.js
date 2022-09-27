import { Box } from '@mui/material';
import BodyHome from '../../component/BodyHome/BodyHome';
import Layout from '../../component/layout';

 const Home = () => {

  return (
     <Box sx={{height : '100vh'}}>
          <Layout/>        
          <BodyHome/> 

     </Box>
  )
}
export default Home;