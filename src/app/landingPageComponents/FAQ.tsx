'use client'

/* Importaciones MUI */
import React, { FC, useState } from 'react';
import Image from "next/image";
import Slider from "react-slick";
import Grid from "@mui/material/Grid";
import { useQuery } from 'react-query';
import Stack from "@mui/material/Stack";
import "slick-carousel/slick/slick.css";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";

/* Importación de componentes */
import QuestionPaper from "@/generalComponents/QuestionPaper";

/* Importación de tipos */
import { FAQImage, Question } from '@/types';

/* Importación de servicios (APIs) */
import { getFAQ, getFAQImages } from '@/services/AppServices';

/* Props */
interface FAQProps {
  isMobile: boolean,
  backgroudImageBanner: boolean,
};

/**
* @module FAQ
* @description Este componente renderiza la sección de preguntas frecuentes.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} backgroudImageBanner - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX el cual muestra las preguntas frecuentes.
*/
const FAQ: FC<FAQProps> = ({ isMobile, backgroudImageBanner }) => {

  const [expanded, setExpanded] = useState<string | false>(false);

  const fetchFAQ = async () => {
    return getFAQ(6);
  };

  const { data: faqData, isLoading: isLoadingFAQ } = useQuery(["getFAQ"], fetchFAQ, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      //console.log(data)
    }
  });

  const fetchFAQImages = async () => {
    return getFAQImages(7);
  };

  const { data: faqImagesData, isLoading: isLoadingFAQImages } = useQuery(["getFAQImages"], fetchFAQImages, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      //console.log(data)
    }
  });

  /**
  * @module handleChange
  * @description Se encarga de controlar que no puedan estár dos elementos de las preguntas frecuentes abiertos al mismo tiempo.
  * @param {string} question - Recibe la pregunta.
  * @returns Devuelve el estatus del elemento Accordion.
  */
  const handleChange = (question: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? question : false);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 10,
    speed: 5000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: !isMobile ? false : true,
    style: {
      width: '100%', marginInline: 'auto'
    }
  };

  if (isLoadingFAQ) return (
    <></>
  );

  return (
    <>
      <section>
        <Grid container spacing={2} sx={{ px: isMobile ? 2 : 0 }}>
          {
            !isMobile && !backgroudImageBanner &&
            <Grid item xs={0} md={6} sx={{ display: 'flex', justifyContent: 'initial' }}>
              <Slider {...settings}>
                {!isLoadingFAQImages &&
                  faqImagesData.map((FAQImage: FAQImage) => (
                    < Image key={FAQImage?.id} src={FAQImage?.image} width={700} height={600} alt={FAQImage?.title} />
                  ))}
              </Slider>
            </Grid>
          }
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'initial' }}>
            <Stack sx={{ width: !isMobile ? '68%' : '100%', pl: !isMobile ? '68px' : '0px' }}>
              <Typography variant="h6" sx={{ color: '#6F9D92', fontWeight: 'bold', textAlign: !isMobile ? '' : 'center', letterSpacing: -1, transform: 'scaleY(1.2)', mb: 1, whiteSpace: 'pre-wrap', }}>
                Sobre Paneles Solares
              </Typography>
              <Typography variant="h3" sx={{ color: '#0D1F3D', fontWeight: 800, textAlign: !isMobile ? '' : 'center', letterSpacing: !isMobile ? -2 : -1, transform: 'scaleY(1.2)', lineHeight: 0.85, whiteSpace: 'pre-wrap' }}>
                Preguntas frecuentes de nuestros clientes
              </Typography>
              <br /><br />
              {
                !isLoadingFAQ &&
                faqData?.map((question: Question) =>
                  <QuestionPaper key={question?.id} expanded={expanded} handleChange={handleChange} question={question} />
                )}
              <Button variant="priceButton" sx={{ mt: 2, mx: 'auto', width: '100%', height: '50px', "&:hover": { transform: 'scale(1.1)', transition: 'all 0.2s', } }}>Asesoría Profesional</Button>
            </Stack>
          </Grid>
        </Grid>
      </section>
      <br /><br /><br /><br />
    </>
  );
};

export default FAQ;