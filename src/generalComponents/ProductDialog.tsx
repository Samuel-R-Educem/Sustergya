'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Close from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

/* Importación de tipos */
import { Product } from '@/types';

/* Importación de imagenes */
import panel from "@/assets/images/panel.png";

/* Importación de funciones */
import convertText from '@/functions/convertText';
import formatToCurrencyMXN from '@/functions/formatToCurrencyMXN';

/* Props */
interface ProductDialogProps {
  openProduct: boolean,
  setOpenProduct: React.Dispatch<React.SetStateAction<boolean>>,
  product: Product,
  isMobile: boolean,
};

/**
* @module ProductCard
* @description Este componente renderiza el Dialog del producto.
* @param {Product} product - Recibe los datos del producto.
* @param {boolean} openProduct - Indica si el Dialog está abierto o no.
* @param {React.Dispatch<React.SetStateAction<boolean>>} setOpenProduct - Se utiliza para declarar openProduct en true o false.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX que crea el Dialog del producto.
*/
const ProductDialog: FC<ProductDialogProps> = ({
  openProduct, setOpenProduct, product, isMobile
}) => {

  /* Función que cierra el diálogo */
  const handleCloseProductDialog = () => {
    setOpenProduct(false);
  };

  return (
    <Dialog open={openProduct} fullWidth maxWidth={'md'}>
      <DialogTitle>
        <Stack direction={'row'} width={'100%'}>
          <Typography variant={!isMobile ? 'h3' : 'h4'} sx={{ color: '#009045', fontWeight: 800, transform: 'scaleY(1.2)' }}>
            {product?.title}
          </Typography>
          <Close sx={{ cursor: 'pointer', fontSize: 40, position: 'absolute', right: 20 }} onClick={handleCloseProductDialog} />
        </Stack>
      </DialogTitle>
      <Divider sx={{ mx: 2 }} />
      <DialogContent sx={{ mx: 2, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ width: !isMobile ? '340px' : '230px', height: !isMobile ? '340px' : '230px', mx: 'auto', border: '1px solid #009045' }}>
              <Image src={panel} width={!isMobile ? 340 : 230} height={!isMobile ? 340 : 230} alt='panel.png' />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant={!isMobile ? 'h6' : 'body1'}>
              Precio: <b>{formatToCurrencyMXN(Number(product?.price), 2)}</b>
            </Typography>
            <Typography variant={!isMobile ? 'h6' : 'body1'}>
              Paneles Solares: <b>{product?.quantity}</b>
            </Typography>
            <Typography variant={!isMobile ? 'h6' : 'body1'}>
              {
                product?.category === 'Casa'
                  ? 'Para un recibo doméstico'
                  : product?.category === 'Negocio'
                    ? 'Para un recibo de negocio'
                    : 'Para un recibo industrial'
              } entre:
            </Typography>
            <Typography variant={!isMobile ? 'h6' : 'body1'} sx={{ color: '#FF9D00', fontWeight: 'bold' }}>
              {formatToCurrencyMXN(Number(product?.firstprice), 0)} - {formatToCurrencyMXN(Number(product?.lastprice), 0)}
            </Typography>
            <Typography variant={!isMobile ? 'h6' : 'body1'}>
              Detalles:
            </Typography>
            <Typography variant={!isMobile ? 'h6' : 'body1'} sx={{ textAlign: 'justify' }}>
              {convertText(String(product?.description))}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;