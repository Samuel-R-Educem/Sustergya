/* Importaciones MUI */
import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';

/* Importación de funciones */
import convertText from '@/functions/convertText';


/* Props */
interface OurSolutionsButtonProps {
  isMobile: boolean,
};

/**
* @module OurSolutionsButton
* @description Este componente renderiza el botón 'Conoce nuestras soluciones'.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX que renderiza el botón 'Conoce nuestras soluciones'.
*/
const OurSolutionsButton: FC<OurSolutionsButtonProps> = ({ isMobile }) => {
  return (
    <Box sx={{ ml: '15px', zIndex: 2,cursor: 'pointer', p: 1, borderRadius: '5px', "&:hover": { backgroundColor: 'rgba(211, 211, 211, 0.1)', transform: 'scale(1.1)', transition: 'all 0.2s', } }}>
      <Stack direction={'row'}>
        <div style={{ border: '2px solid #FFFFFF', height: '53px', width: '53px', borderRadius: '50%', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
          <div style={{ height: '45px', width: '45px', borderRadius: '50%', backgroundColor: '#6F9D92', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayArrowRounded sx={{ fontSize: '50px', color: '#FFFFFF' }} />
          </div>
        </div>
        <Stack sx={{ ml: 3 }}>
          <Typography sx={{ color: '#FFFFFF', pb: 0, mb: 0, height: '10px' }}>
            {convertText('**Conoce** nuestras')}
          </Typography>
          <Typography sx={{ color: '#FFFFFF', pb: 0, mb: 0, fontWeight: 'bold', fontSize: '30px', letterSpacing: -1 }}>
            soluciones
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default OurSolutionsButton;