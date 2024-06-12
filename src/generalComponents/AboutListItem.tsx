'use client'

/* Importaciones MUI*/
import React, { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

/* Importación de imagenes */
import hoja from "@/assets/images/hoja.png";

/* Props */
interface AboutListItemProps {
  aboutDesc: string,
};

/**
* @module AboutListItem
* @description Este componente renderiza un elemento de la lista 'Nosotros'.
* @param {string} aboutDesc - Contiene el texto del elemento de la lista.
* @returns Devuelve un elemento TSX el cual renderiza un elemento de la lista 'Nosotros'.
*/
const AboutListItem: FC<AboutListItemProps> = ({
  aboutDesc
}) => {

  return (
    <ListItem sx={{mb: 1}}>
      <Stack direction={'row'}>
        < Image style={{ marginRight: '24px' }} src={hoja} width={30} height={22} alt="hoja.png" />
        <Typography variant='body1' sx={{ color: '#0D1F3D', fontWeight: 800, letterSpacing: -1.1, transform: 'scaleY(1.1)' }}>
          {aboutDesc}
        </Typography>
      </Stack>
    </ListItem>
  );
};

export default AboutListItem;