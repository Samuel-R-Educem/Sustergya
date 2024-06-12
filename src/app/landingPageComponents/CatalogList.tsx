'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import { useQuery } from 'react-query';
import "slick-carousel/slick/slick.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";

/* Importación de componentes */
import ProductCard from "@/generalComponents/ProductCard";

/* Importación de servicios (APIs) */
import { getProducts } from '@/services/AppServices';

/* Importación de tipos */
import { Product } from '@/types';

/* Props */
interface CatalogListProps {
  isMobile: boolean,
  isTablet: boolean,
}

/**
* @module CatalogList
* @description Este componente renderiza la lista de catalogo de prodctos para la LandingPage.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} isTablet - Para identificar si es vista tablet.
* @returns Devuelve un elemento TSX que representa la lista de catalogo de prodctos para la LandingPage.
*/
const CatalogList: FC<CatalogListProps> = ({ isMobile, isTablet }) => {

  const { data: catalogListData, isLoading: isLoadingCatalogList } = useQuery(["getProducts"], getProducts, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      //console.log(data)
    }
  });

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={onClick}
      >
        <style>{`
        .slick-prev:before {
          font-size: 60px;
          color: #009045;
          opacity: 1;
        }
      `}</style>
      </div>
    );
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={onClick}
      >
        <style>{`
        .slick-next:before {
          font-size: 60px;
          color: #009045;
          opacity: 1;
        }
      `}</style>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: !isTablet ? 3 : !isMobile ? 2 : 1,
    slidesToScroll: 1,
    arrows: !isMobile ? true : false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    centerMode: !isMobile ? false : true,
    style: {
      width: !isMobile ? '85%' : '100%', marginInline: 'auto'
    }
  };

  if (isLoadingCatalogList) return (
    <></>
  );

  return (
    <>
      <section>
        <Stack sx={{ width: '100%' }}>
          <Typography variant="h6" sx={{ color: '#6F9D92', fontWeight: 800, textAlign: 'center', lineHeight: 1, transform: 'scaleY(1.2)', letterSpacing: -0.7 }}>
            Encuentra la mejor opción en
          </Typography>
          <Typography variant="h2" sx={{ color: '#0D1F3D', fontWeight: 800, textAlign: 'center', lineHeight: 1, transform: 'scaleY(1.2)', letterSpacing: -3, mt: !isMobile ? 0 : 1 }}>
            Paneles Solares
          </Typography>
        </Stack>
        <br /><br /><br />
        <Slider {...settings}>
          {
            !isLoadingCatalogList &&
            catalogListData?.map((product: Product) => (
              <ProductCard key={product?.id} product={product} isMobile={isMobile} isCatalog={false} />
            ))
          }
        </Slider>
        <br />
        <Stack sx={{ justifyContent: 'center', mt: 3 }}>
          <Link href={"http://localhost:3000/products"} style={{ marginInline: 'auto' }}>
            <Button sx={{ width: '250px', mx: 'auto' }}>
              {`Ver catálogo completo >>`}
            </Button>
          </Link>
        </Stack>
      </section>
      <br /><br />
    </>
  );
};

export default CatalogList;