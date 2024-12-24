import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {Box, Typography ,colors, createTheme, ThemeProvider, CssBaseline} from '@mui/material';
import {useSpring, animated, config} from '@react-spring/web';
import { AnimatedText, Texto } from './components';


const animatedTypography = animated(Typography);

const darkTheme = createTheme({
  palette:{
    mode: 'dark',
  },
});


function App() {
  const [count, setCount] = useState(0);
  const animationStyles = useSpring({
    from: { y: -200, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 800,
    config: config.gentle,
  });


  return (
    <>
      
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AnimatedText texto='Feliz Navidad'/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: 10,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}>
          <Texto/>
        </Box>
        <AnimatedText texto='Feliz Navidad'/>
      </ThemeProvider>
    </>
  )
}

export default App
