import  React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
 const Navbar =()=> {
    const [open , setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1  , width : '100%'  }}>
      <AppBar position="static" sx={{ position : 'absolute' , zIndex:'100' , backgroundColor : 'transparent' , boxShadow: 'none'}}>
        <Toolbar sx={{marginTop : '10px'}}>
          <Link to={'/'}  style={{ flexGrow: 1}}>
          <Typography variant="h4" fontSize={30} fontWeight={'bold'} component="div" sx={{ flexGrow: 1}}>
             nasa space
          </Typography>
          </Link>
          <Box sx={{display : {sm : 'flex' , xs : 'none'} , width : {lg : '24%' , md : '35%' , sm : '50%'} ,  justifyContent: 'space-evenly' , alignItems: 'center' }}>
          <Typography fontSize={18} fontWeight={500}>Home</Typography>
          <Typography fontSize={18} fontWeight={500}>About</Typography> 
          <Typography fontSize={18} fontWeight={500}>Details</Typography>
          <Typography fontSize={18} fontWeight={500}>contact</Typography>
          </Box>
          <Box sx={{display : {sm : 'none' , xs : 'flex'}}}>
          <IconButton onClick={()=> setOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor='right' open={open} onClose={()=>setOpen(false)}>
             <Box sx={{width : '250px'}}>
             <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>             </Box>
          </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar