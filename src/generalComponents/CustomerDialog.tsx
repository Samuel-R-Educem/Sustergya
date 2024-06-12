'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Close from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

/* Importación de tipos */
import { Customer } from '@/types';

/* Importación de funciones */
import convertText from '@/functions/convertText';


/* Props */
interface CustomerDialogProps {
  openCustomerDialog: boolean,
  setOpenCustomerDialog: React.Dispatch<React.SetStateAction<boolean>>,
  customer: Customer,
  isMobile: boolean,
};

/**
* @module CustomerDialog
* @description Este componente renderiza un dialog en el que se muestra completo el testimonio del cliente.
* @param {Customer} customer - Contiene los datos del cliente.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX dialog el cual muestra el testimonio completo del cliente.
*/
const CustomerDialog: FC<CustomerDialogProps> = ({
  openCustomerDialog, setOpenCustomerDialog, customer, isMobile
}) => {

  /* Función que cierra el diálogo */
  const handleCloseCustomerDialog = () => {
    setOpenCustomerDialog(false);
  };

  return (
    <Dialog open={openCustomerDialog} fullWidth maxWidth={'md'}>
      <DialogTitle>
        <Stack direction={'row'} width={'100%'}>
          <Close sx={{ cursor: 'pointer', fontSize: 40, position: 'absolute', right: '5px', top: '5px' }} onClick={handleCloseCustomerDialog} />
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ width: !isMobile ? '340px' : '230px', height: !isMobile ? '340px' : '230px', mx: 'auto', borderRadius: '15px' }}>
              {/*                 <Image src={panel} width={!isMobile ? 340 : 230} height={!isMobile ? 340 : 230} alt='panel.png' /> */}
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant={!isMobile ? 'h6' : 'body1'} sx={{ color: '#0D1F3D', fontWeight: 'bold', transform: 'scaleY(1.2)' }}>{customer?.title}.</Typography>
            <Typography variant={!isMobile ? 'h6' : 'body1'} sx={{ color: '#0D1F3D', fontWeight: 'bold', transform: 'scaleY(1.2)' }}>{customer?.subtitle}.</Typography>
            <Box sx={{ overflowY: 'auto', py: 2 }}>
              <Typography variant={'body1'} sx={{ textAlign: 'justify', color: '#0D1F3D', transform: 'scaleY(1.2)', whiteSpace: 'pre-wrap' }}>{convertText(String(customer?.text))}</Typography>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerDialog;