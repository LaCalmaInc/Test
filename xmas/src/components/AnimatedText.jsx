import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

export const AnimatedText = ({texto}) => {

  const text = texto;
  const colors = ['#FF0000', '#008000', '#FFFFFF',];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 7,
        overflow: 'hidden'
      }}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, color: colors[index % colors.length] }}
          animate={{ y: [-5, 5.05, -5], color: colors[(index + 1) % colors.length]  }} // Efecto de expansión y contracción
          transition={{
            duration: 0.8, 
            repeat: Infinity, 
            delay: index * 0.1, 
            ease: 'easeInOut', 
          }}
          style={{
            display: 'inline-block',
            margin: '0 2px', 
            fontSize: '2rem',
            fontFamily: 'Pacifico',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </Box>
  );
};


