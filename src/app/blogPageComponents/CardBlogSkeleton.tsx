/* Importaciones MUI */
import { Grid, Skeleton } from '@mui/material';
import React, { FC } from 'react'

/* Props */
interface CardBlogSkeletonProps {
  isMobile: boolean,
};

/**
* @module CardBlogSkeleton 
* @description Este componente renderiza el skeleton de las cards de la página de blogs.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX que representa el skeleton de las cards de la página de blogs.
*/
const CardBlogSkeleton: FC<CardBlogSkeletonProps> = ({ isMobile }) => {

  const skeletonItems = [];
  const numRepetitions = 6;

  for (let i = 0; i < numRepetitions; i++) {
    skeletonItems.push(
      <Grid key={i} item lg={6} md={6} sm={12} xs={12}>
        <Skeleton variant='rounded' sx={{ height: !isMobile ? '250px' : '460px', mx: '24px' }} />
      </Grid>
    );
  };

  return (
    <>
      {skeletonItems}
    </>
  );
};

export default CardBlogSkeleton;