'use client'

/* Importaciones MUI */
import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Circle from '@mui/icons-material/Circle';
import Typography from "@mui/material/Typography";
import LightModeRounded from '@mui/icons-material/LightModeRounded';

/* Importación de componentes */
import CustomerDialog from './CustomerDialog';

/* Importación de tipos */
import { Customer } from '@/types';

/* Importación de funciones */
import convertText from '@/functions/convertText';


/* Props */
interface ClientCardProps {
  customer: Customer,
  isMobile: boolean,
};

/**
* @module ClientCard
* @description Este componente renderiza una card con los testimonios del cliente.
* @param {Customer} customer - Contiene los datos del cliente.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX que representa una Card de testimonios del cientes.
*/
const ClientCard: FC<ClientCardProps> = ({
  customer, isMobile
}) => {

  const [openCustomerDialog, setOpenCustomerDialog] = useState(false);

  const handleOpenCustomerDialog = () => {
    setOpenCustomerDialog(true);
  };

  return (
    <>
      <Card sx={{ width: !isMobile ? '300px' : '165px', height: !isMobile ? '440px' : '242px', borderRadius: '20px', my: 4, mx: 'auto', "&:hover": { transform: 'scale(1.1)', transition: 'all 0.2s', }, display: 'flex', position: 'relative' }}>
        <Stack sx={{ mx: 'auto' }}>
          <Card sx={{ width: !isMobile ? '250px' : '137.5px', height: !isMobile ? '250px' : '137.5px', borderRadius: '20px', mx: 'auto', mt: 2 }}>
          </Card>
          <Grid container spacing={3}>
            {!isMobile &&
              <Grid item xs={0} sm={4.6} md={4.2} sx={{ display: 'flex', position: 'relative', justifyContent: 'center' }}>
                <div style={{
                  top: '-35px',
                  left: '60px',
                  width: '85px',
                  height: '85px',
                  display: 'flex',
                  borderRadius: '50%',
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 162, 1, 0.3)',
                }}>
                  <div style={{
                    height: '65px',
                    width: '65px',
                    display: 'flex',
                    borderRadius: '50%',
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#6F9D92',
                  }}>
                    <Circle sx={{ fontSize: '29px', position: 'absolute', color: '#FFFFFF' }} />
                    <LightModeRounded sx={{ fontSize: '47px', color: '#FFFFFF' }} />
                    <div style={{ position: 'absolute', backgroundColor: '#6F9D92', height: '10px', width: '4px', bottom: '20px', right: '31px', }} />
                    <div style={{ position: 'absolute', backgroundColor: '#6F9D92', height: '10px', width: '3px', bottom: '30px', left: '27px', borderRadius: '5px 5px 0px 0px' }} />
                    <div style={{ position: 'absolute', backgroundColor: '#6F9D92', height: '10px', width: '3px', bottom: '30px', right: '28px', borderRadius: '5px 5px 0px 0px' }} />
                    <div style={{ position: 'absolute', backgroundColor: '#6F9D92', height: '10px', width: '16px', bottom: '25px', right: '25px', borderRadius: '0px 0px 5px 5px' }} />
                  </div>
                </div>
              </Grid>
            }
            <Grid item xs={12} sm={7.4} md={7.8}>
              <Typography sx={{ fontSize: '15px', px: 1, mt: 2, color: '#0D1F3D', fontWeight: 800, letterSpacing: -1, lineHeight: 1, transform: 'scaleY(1.2)', mb: !isMobile ? 0 : 0.5, textAlign: !isMobile ? 'initial' : 'center' }}>
                {customer?.title},
              </Typography>
              <Typography sx={{ fontSize: '13px', px: 1, my: '4px', mx: 'auto', color: '#0D1F3D', fontWeight: 800, letterSpacing: -1, lineHeight: !isMobile ? 1 : 0.7, transform: 'scaleY(1.2)', textAlign: !isMobile ? 'initial' : 'center' }}>
                {customer?.subtitle}{!isMobile ? ':' : '.'}
              </Typography>
            </Grid>
          </Grid>
          {!isMobile &&
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                maxHeight: '80px',
                width: '280px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'pre-wrap',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5
              }}>
                <Typography sx={{
                  mx: 2,
                  lineHeight: 1,
                  color: '#0D1F3D',
                  fontSize: '16px',
                  letterSpacing: -1,
                  fontStyle: "italic",
                  textAlign: "justify",
                  whiteSpace: 'pre-wrap'
                }}>{convertText(customer?.text)}</Typography>
              </div>
            </Box>
          }
          <Button sx={{ color: '#FFA201', fontWeight: 800, bottom: 0, left: !isMobile ? '10px' : '', letterSpacing: -1, textTransform: 'none', transform: 'scaleY(1.2)', position: 'absolute' }} onClick={handleOpenCustomerDialog}>
            Leer más
          </Button>
        </Stack >
      </Card>
      <CustomerDialog openCustomerDialog={openCustomerDialog} setOpenCustomerDialog={setOpenCustomerDialog} customer={customer} isMobile={isMobile} />
    </>
  );
};

export default ClientCard;