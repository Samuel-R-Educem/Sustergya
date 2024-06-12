/* Importaciones MUI */
import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'

/* Importación de imagenes */
import logo from "@/assets/images/SUSTERGYA-LOGO-CARGA.png";

/* Props */
interface LoadingPageProps {
  isMobile: boolean,
}

/**
* @module LoadingPage
* @description Componente que renderiza la vista de carga.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve una pantalla de carga.
*/
const LoadingPage: FC<LoadingPageProps> = ({ isMobile }) => {
  return (
    <div>
      <Box sx={{
        width: '100%',
        height: 'calc(100vh)',
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Stack sx={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          < Image style={{ animation: 'pulse 1s infinite alternate' }} src={logo} width={!isMobile ? 414 : 207} height={!isMobile ? 203 : 101.5} alt="SUSTERGYA-LOGO.png" />
          <LinearProgress color="success" sx={{ width: '100%', mt: 5 }} />
        </Stack>
      </Box>
      <style jsx>{`
        @keyframes pulse {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.075);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
