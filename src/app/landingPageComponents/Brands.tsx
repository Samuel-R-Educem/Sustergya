'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Image from "next/image";
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Importación de servicios (APIs) */
import { getBrands } from '@/services/AppServices';

/* Props */
interface BrandsProps {
  isMobile: boolean,
  brandImages: boolean,
};

/**
* @module Brands
* @description Este componente renderiza el cintillo de marcas de la página.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} brandImages - Para identificar si excede el tamaño de las marcas.
* @returns Devuelve un elemento TSX que representa el cintillo de marcas en la página.
*/
const Brands: FC<BrandsProps> = ({ isMobile, brandImages }) => {

  const fetchBrands = async () => {
    return getBrands(2);
  };

  const { data: brandsData, isLoading: isLoadingBrands } = useQuery(["getBrands"], fetchBrands, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      //console.log(data)
    }
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 10,
    slidesToShow: !isMobile ? 7 : 3,
    pauseOnHover: false,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
    style: {
      width: '100%', marginInline: 'auto'
    }
  };

  if (isLoadingBrands) return (
    <></>
  );

  return (
    <>
      <section>
        <Slider {...settings}>
          {!isLoadingBrands &&
            brandsData?.map((brand: any) => (
              <div key={brand?.id} style={{ padding: '0 15px' }}>
                <Image
                  src={brand?.image}
                  alt={brand?.title}
                  style={{ margin: 0 }}
                  width={!isMobile && !brandImages ? 140 : 85}
                  height={!isMobile && !brandImages ? 100 : 85}
                />
              </div>
            ))
          }
        </Slider>
      </section>
    </>
  );
};

export default Brands;