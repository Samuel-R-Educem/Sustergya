'use client'

/* Importaciones MUI */
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import Slider from "react-slick";
import { useQuery } from 'react-query';
import Stack from "@mui/material/Stack";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";

/* Importación de componentes */
import ClientCard from "@/generalComponents/ClientCard";
import LoadingPage from '@/generalComponents/LoadingPage';

/* Importación de servicios (APIs) */
import { getCustomers } from '@/services/AppServices';

/* Importación de tipos */
import { Customer } from '@/types';

/* Props */
interface CustomersProps {
  isMobile: boolean,
  setIsLoadingPage?: Dispatch<SetStateAction<boolean>>,
  isLoadingPage?: boolean,
};

/**
* @module Customers
* @description Este componente renderiza el apartado de testimonios de los cientes en la página.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} isLoadingPage - Para identificar si se encuentra cargando la página.
* @param {Dispatch<SetStateAction<boolean>>} setIsLoadingPage - Para asignar si se encuentra cargando la página.
* @returns Devuelve un elemento TSX que representa el apartado de testimonios de los cientes en la página.
*/
const Customers: FC<CustomersProps> = ({ isMobile, isLoadingPage, setIsLoadingPage }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10,
    speed: 10000,
    pauseOnHover: true,
    slidesToShow: !isMobile ? 3 : 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: !isMobile ? false : true,
    style: {
      width: '100%', marginInline: 'auto'
    }
  };

  const fetchCustomers = async () => {
    return getCustomers(3);
  };

  const { data: customersData, isLoading: isLoadingCustomers } = useQuery(["getCustomers"], fetchCustomers, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      //console.log(data)
    }
  });

  useEffect(() => {
    if (!isLoadingCustomers && setIsLoadingPage !== undefined) {
      setIsLoadingPage(false);
    }
  }, [isLoadingCustomers]);

  if (isLoadingPage) return (
    <LoadingPage isMobile={isMobile} />
  )

  return (
    <>
      <section style={{ backgroundColor: '#E7F5F8' }}>
        <Stack sx={{ width: '100%', py: 2 }}>
          <Typography variant="h6" sx={{ mt: '27px', color: '#6F9D92', fontWeight: 800, textAlign: 'center', lineHeight: 1, letterSpacing: !isMobile ? -1 : 0, transform: 'scaleY(1.2)', whiteSpace: 'pre-wrap' }}>¡Notarás la diferencia</Typography>
          <Typography variant="h5" sx={{ mb: '18px', color: '#6F9D92', fontWeight: 800, textAlign: 'center', lineHeight: 1, letterSpacing: !isMobile ? -1 : 0, transform: 'scaleY(1.2)' }}>desde el primer recibo!</Typography>
          <Typography variant="h4" sx={{ color: '#0D1F3D', fontWeight: 800, textAlign: 'center', lineHeight: 1, letterSpacing: !isMobile ? -2 : -1, transform: 'scaleY(1.2)' }}>Nuestros Clientes ahorran hasta</Typography>
          <Typography variant="h4" sx={{ color: '#0D1F3D', fontWeight: 800, textAlign: 'center', lineHeight: 1, letterSpacing: !isMobile ? -2 : -1, transform: 'scaleY(1.2)' }}>97% en costos de Luz</Typography>
        </Stack>
        <Slider {...settings}>
          {
            !isLoadingCustomers &&
            customersData?.map((customer: Customer) => (
              <ClientCard
                key={customer?.id}
                isMobile={isMobile}
                customer={customer}
              />
            ))
          }
        </Slider>
        <br /><br />
      </section >
    </>
  );
};

export default Customers;