/* Importaciones MUI */
import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

/* Props */
interface CatalogSkeletonProps {
  isMobile: boolean,
};

/**
* @module CatalogSkeleton 
* @description Este componente renderiza el skeleton del catálogo de los productos.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX que representa el skeleton del catálogo de los productos.
*/
const CatalogSkeleton: FC<CatalogSkeletonProps> = ({ isMobile }) => {

  const numRepetitions = !isMobile ? 3 : 4;
  const skeletonItems = [];

  for (let i = 0; i < numRepetitions; i++) {
    skeletonItems.push(
      <Grid item xs={6} md={4} key={i}>
        <Skeleton variant='rectangular' sx={{
          mx: 'auto',
          my: !isMobile ? 2 : 1,
          width: !isMobile ? '270px' : '160px',
          height: !isMobile ? '460px' : '210px',
        }} />
      </Grid>
    )
  }

  return (
    <>
      <Grid container spacing={0} sx={{ pt: 0 }}>
        {skeletonItems}
      </Grid>
    </>
  );
};

export default CatalogSkeleton;