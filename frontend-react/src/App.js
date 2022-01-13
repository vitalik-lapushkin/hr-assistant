import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

import Header from './components/Header';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import PersonsList from './views/PersonsList';
import Home from './views/Home';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    paddingTop: '75px',
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

function App() {
  const [isOpenNav, setNavOpenState] = useState(false);
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <NavMenu open={isOpenNav} handleDrawerClose={() => setNavOpenState(false)}/>
        <Header handleDrawerOpen={() => setNavOpenState(true)}/>
        <CssBaseline />
        <Main open={isOpenNav}>
          <Routes>
            <Route path="/list" element={<PersonsList/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Main>
        <Footer/>
      </Box>
    </Router>
  );
}

export default App;
