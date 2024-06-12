'use client'

/* Importaciones MUI */
import React, { FC, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

/* Importación de componentes */
import CatalogSkeleton from './CatalogSkeleton';
import ProductCard from '@/generalComponents/ProductCard';

/* Importación de servicios (APIs) */
import { getProducts } from '@/services/AppServices';

/* Importación de tipos */
import { Product } from '@/types';

/* Props */
interface CatalogProps {
  isMobile: boolean,
};

/**
* @module Catalog
* @description Este componente renderiza la sección del catálogo de productos.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX que representa la sección del catálogo de productos de la página.
*/
const Catalog: FC<CatalogProps> = ({
  isMobile
}) => {

  const [oderBy, setOrderBy] = useState('')

  const handleChangeOrder = (e: any) => {
    const newOrder = e.target.value;
    setOrderBy(newOrder);
  };

  const { data: catalogListData, isLoading: isLoadingCatalogList } = useQuery(["getProducts"], getProducts, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      //console.log(data)
    }
  });

  return (
    <>
      <Grid container spacing={1} sx={{ pt: !isMobile ? 0 : 2 }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: !isMobile ? '' : 'center' }}>
          <FormControl fullWidth sx={{ ml: !isMobile ? 3 : '', width: !isMobile ? '400px' : '300px', color: '#009045' }}>
            <InputLabel id="demo-simple-select-label" color='success'>Ordenar por...</InputLabel>
            <Select labelId='label' label="Ordenar por..." color='success' onChange={handleChangeOrder}>
              <MenuItem value=''>Ninguno</MenuItem>
              <MenuItem value={'price min to max'}>Precio de menor a mayor</MenuItem>
              <MenuItem value={'price max to min'}>Precio de mayor a menor</MenuItem>
              <MenuItem value={'panel min to max'}>Paneles de menor a mayor</MenuItem>
              <MenuItem value={'panel max to min'}>Paneles de mayor a menor</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {
          !isLoadingCatalogList
            ? catalogListData?.sort(
              function (a: Product, b: Product) {
                return oderBy === 'price min to max'
                  ? a.price - b.price
                  : oderBy === 'price max to min'
                    ? b.price - a.price
                    : oderBy === 'panel min to max'
                      ? a.quantity - b.quantity
                      : oderBy === 'panel max to min'
                        ? b.quantity - a.quantity
                        : ''
              }
            )?.map((product: Product) => (
              <Grid item xs={6} sm={6} md={6} lg={4} key={product?.id}>
                <ProductCard isMobile={isMobile} key={product?.id} product={product} isCatalog={true} />
              </Grid>
            ))
            : <CatalogSkeleton isMobile={isMobile} />
        }
      </Grid>
      <br /><br /><br /><br /><br /><br />
    </>
  );
};

export default Catalog;