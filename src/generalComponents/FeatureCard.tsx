'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Image from 'next/image';
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

/* Importación de tipos */
import { Feature } from '@/types';

/* Importación de funciones */
import convertText from '@/functions/convertText';


/* Props */
interface FeatureCardProps {
  feature: Feature,
  isMobile: boolean,
};

/**
* @module FeatureCard
* @description Este componente renderiza la card en la que se renderizan los Features.
* @param {Feature} feature - Contiene los datos del Feature.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX el cual muestra los datos de los Features.
*/
const FeatureCard: FC<FeatureCardProps> = ({
  feature, isMobile
}) => {
  return (
    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '30px', }}>
      <Paper sx={{ bgcolor: '#E7F5F8', width: isMobile ? '100%' : '150px', height: '140px', mx: 'auto', mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '15px' }}>
        <Image src={feature?.image} alt='icono.png' width={100} height={100} />
      </Paper>
      <Typography sx={{ color: '#0D1F3D', fontWeight: 800, textAlign: 'center', transform: 'scaleY(1.2)', mb: 1 }}>
        {feature?.title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#0D1F3D', textAlign: 'center', width: '300px', transform: 'scaleY(1.1)', whiteSpace: 'pre-wrap' }}>
        {convertText(String(feature?.text))}
      </Typography>
    </Stack>
  );
};

export default FeatureCard;