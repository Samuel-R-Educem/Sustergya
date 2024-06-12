'use client'

/* Importaciones MUI */
import React, { FC, useState } from 'react';
import Image from 'next/image';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

/* Importación de imagenes */
import panel from "@/assets/images/panel.png";

/* Importación de componentes */
import ProductDialog from './ProductDialog';

/* Importación de tipos */
import { Product } from '@/types';

/* Importación de funciones */
import formatToCurrencyMXN from '@/functions/formatToCurrencyMXN';

/* Props */
interface ProductCardProps {
  product: Product,
  isMobile: boolean,
  isCatalog: boolean,
};

/**
* @module ProductCard
* @description Este componente renderiza la Card del producto.
* @param {Product} product - Recibe los datos del producto.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} isCatalog - Para identificar si es vista de catálogo.
* @returns Devuelve un elemento TSX que crea la Card del producto.
*/
const ProductCard: FC<ProductCardProps> = ({
  product, isMobile, isCatalog
}) => {

  const [openProduct, setOpenProduct] = useState(false);

  const handleProductClick = () => {
    setOpenProduct(true);
  };

  return (
    <>
      <Card onClick={handleProductClick} sx={{
        width: !isCatalog
          ? !isMobile ? '350px' : '160px'
          : !isMobile ? '270px' : '160px',
        height: !isMobile ? '460px' : '210px',
        borderRadius: '0px',
        mx: 'auto',
        my: !isMobile ? 2 : 1,
        cursor: 'pointer',
        "&:hover": {
          border: '1px solid #FF9D00',
          transform: 'scale(1.03)',
          transition: 'all 0.3s',
        },
      }}>
        <Card sx={{
          width: !isCatalog
            ? !isMobile ? '300px' : '136px'
            : !isMobile ? '240px' : '136px',
          height: !isCatalog
            ? !isMobile ? '250px' : '112px'
            : !isMobile ? '240px' : '112px',
          borderRadius: '0px',
          mx: 'auto',
          mt: !isMobile ? 2 : 1,
          border: '1px solid #009045',
        }}>
          <Image
            src={panel}
            width={!isCatalog
              ? !isMobile ? 300 : 136
              : !isMobile ? 240 : 136}
            height={!isCatalog
              ? !isMobile ? 250 : 112
              : !isMobile ? 225 : 112}
            alt='panel.png' />
        </Card>
        <Typography variant={!isMobile ? "h5" : "body1"} sx={{
          width: !isCatalog
            ? !isMobile ? '302px' : '138px'
            : !isMobile ? '242px' : '138px',
          textAlign: 'center',
          backgroundColor: '#009045',
          color: '#FFFFFF',
          fontWeight: 'bold',
          py: !isMobile ? 2 : 0,
          mx: 'auto',
          transform: !isMobile ? '' : 'scaleY(1.2)',
        }}>
          {formatToCurrencyMXN(Number(product?.price), 2)}
        </Typography>
        <Typography sx={{
          textAlign: 'center',
          fontWeight: 800,
          letterSpacing: -1,
          transform: 'scaleY(1.2)',
          lineHeight: 1.2,
          pt: !isMobile ? 1.5 : 0.5,
          fontSize: !isMobile ? '18px' : '16px',
        }}>
          {product?.title}
        </Typography>
        <Typography sx={{
          textAlign: 'center',
          fontWeight: 800,
          letterSpacing: -1,
          transform: 'scaleY(1.2)',
          lineHeight: 1.2,
        }}>
          {product?.quantity} Paneles Solares
        </Typography>
        {!isMobile &&
          <>
            <Typography variant="body2" sx={{ textAlign: 'center', pt: 1.5, letterSpacing: 0, transform: 'scaleY(1.2)', lineHeight: 1.2 }}>
              {
                product?.category === 'Casa'
                  ? 'Para un recibo doméstico'
                  : product?.category === 'Negocio'
                    ? 'Para un recibo de negocio'
                    : 'Para un recibo industrial'
              }
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 800, color: '#FF9D00', letterSpacing: 0, transform: 'scaleY(1.2)', lineHeight: 1.2 }}>
              entre {formatToCurrencyMXN(Number(product?.firstprice), 0)} - {formatToCurrencyMXN(Number(product?.lastprice), 0)}
            </Typography>
          </>
        }
      </Card >
      <ProductDialog openProduct={openProduct} setOpenProduct={setOpenProduct} product={product} isMobile={isMobile} />
    </>
  );
};

export default ProductCard;