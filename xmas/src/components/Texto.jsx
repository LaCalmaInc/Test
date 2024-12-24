import React from 'react';

import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
export const Texto = () => {

    const text = `Feliz Navidad a todos. Lamentablemente, nos quedamos sin plata para regalos, así que estamos aquí, como siempre, inventando algo. Aprovechando que estoy trabajando y dedicando mi tiempo a tecnologías para la web, se me hizo más entretenido hacer esto que escribir una carta convencional. Quiero darles las gracias a todos ustedes por el espacio y el tiempo que me han dado durante mi periodo académico. Este año fue particularmente difícil, y tener esa libertad me ha ayudado mucho a concentrarme en lo que tengo que hacer. Gracias, Sofía, por siempre tener algo que decir, por demostrar tu cariño con acciones y por expresarte a través del arte. Gracias, Claudia, por preocuparte siempre por nosotros, por asegurarte de que tengamos algo para comer al día siguiente y por tu empatía frente a diferentes comportamientos. Gracias, Miguel, por tu creatividad en el ámbito del entretenimiento, por contar tus anécdotas como si fuese la primera vez y, sobre todo, gracias por la confianza y el cariño. Los quiero mucho a todos.`; 

    const container = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05, // Retraso entre cada letra
          },
        },
      };
    const child = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
  return (
    <>
        <Typography
            variant="h6"
            sx={{
                fontFamily: 'Kanit',
                fontSize: '1.5rem',
                lineHeight: '1.8',
                textAlign: 'center',
                color: '#dca11a', // Verde navideño
            }}
            >
            {<motion.div
                variants={container}
                initial='hidden'
                animate='visible'
                style={{
                    wordBreak: 'normal',
                    overflowWrap: 'break-word'}}
            >
                {text.split('').map((char, index) => (
                <motion.span key={index} variants={child} style={{display: 'inline-block'}}>
                    {char === ' ' ? '\u00A0' : char} {/* Maneja espacios */}
                </motion.span>
                ))}
            </motion.div>}
            
            </Typography>
    </>
  )
}
