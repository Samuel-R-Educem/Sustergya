'use client'

/* Importaciones MUI */
import React from 'react';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import WhatsApp from '@mui/icons-material/WhatsApp';

/**
* @module WhatsAppContact
* @description Este componente renderiza un cintillo de WhatsApp.
* @returns Devuelve un elemento TSX que muestra un cintillo de WhatsApp.
*/
const WhatsAppContact = () => {
  return (
    <>
      <section>
        <Stack sx={{ width: '100%', bgcolor: '#009045', py: 1, cursor: 'pointer' }}>
          <Stack direction={'row'} justifyContent={'center'}>
            <Typography variant="body1" sx={{ color: '#FFFFFF', textAlign: 'center', mt: 0.5, mr: 1 }}>WhatsApp</Typography>
            <WhatsApp sx={{ color: '#FFFFFF' }} />
          </Stack>
          <Typography variant="body1" sx={{ color: '#FFFFFF', fontWeight: 800, textAlign: 'center', transform: 'scaleY(1.2)' }}>Cotiza en menos de 24Hrs.</Typography>
        </Stack>
      </section>
    </>
  );
};

export default WhatsAppContact;