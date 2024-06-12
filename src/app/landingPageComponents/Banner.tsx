"use client"

/* Importaciones MUI */
import Image from 'next/image';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

/* Importación de servicios (APIs) */
import { getBanner } from '@/services/AppServices';

/* Importación de componentes */
import SocialMedia from './SocialMedia';
import OurSolutionsButton from './OurSolutionsButton';
import LoadingPage from '@/generalComponents/LoadingPage';

/* Importación de funciones */
import convertText from '@/functions/convertText';

/* Importación de imágenes */
import fondo from "@/assets/images/FONDO_2.png";
import solarPanel from "@/assets/images/PANEL_SOLAR.png";

/* Props */
interface BannerProps {
  scrollToSection: () => void,
  queryClient: QueryClient,
  isMobile: boolean,
  isTablet: boolean,
  backgroudImageBanner: boolean;
  isLoadingPage: boolean,
  setIsLoadingPage: Dispatch<SetStateAction<boolean>>,
}

/**
* @module Banner
* @description Este componente renderiza el banner de la página.
* @param {() => void} scrollToSection - Se encarga de controlar la posición del usuario en el LandingPage al momento de presionar un botón de cotización.
* @param {QueryClient} queryClient - QueryClient que permite realizar las peticiones.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} isTablet - Para identificar si es vista tablet.
* @param {boolean} backgroudImageBanner - Para identificar si se muestra o no la imagen del panel.
* @param {boolean} isLoadingPage - Para identificar si se encuentra cargando la página.
* @param {Dispatch<SetStateAction<boolean>>} setIsLoadingPage - Para asignar si se encuentra cargando la página.
* @returns Devuelve un elemento TSX que representa el banner de la página.
*/
const Banner: FC<BannerProps> = ({ scrollToSection, queryClient, isMobile, setIsLoadingPage, isLoadingPage, isTablet, backgroudImageBanner }) => {

  const fetchBanner = async () => {
    return getBanner(1);
  };

  const { data: bannerData, isLoading: isLoadingBanner } = useQuery(["getBanner"], fetchBanner, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      //console.log(data)
    }
  });

  useEffect(() => {
    if (!isLoadingBanner) {
      setIsLoadingPage(false);
    }
  }, [isLoadingBanner]);

  if (isLoadingPage) return (
    <LoadingPage isMobile={isMobile} />
  );

  return (
    <QueryClientProvider client={queryClient}>
      <section style={{ background: 'linear-gradient(to right, #001740, #229981)', position: 'relative', paddingTop: !isMobile ? 100 : 50 }}>
        {
          !isMobile &&
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
            <Image
              src={fondo}
              sizes="100vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt={'fondo.png'}
            />
          </div>
        }
        <Grid container spacing={2} sx={{ width: '100%', zIndex: 1 }}>
          <Grid item xs={12} md={6.5} >
            <Typography variant="h1" sx={{ fontWeight: 700, color: '#FFFFFF', mt: !isMobile ? 6 : 0, ml: !isMobile ? '35px' : '10px', mb: 1, letterSpacing: !isMobile ? -5 : -1 }}>
              {!isLoadingBanner &&
                bannerData[0]?.title}
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "justify", color: '#FFFFFF', mb: 2, ml: !isMobile ? '50px' : '20px', lineHeight: 1, whiteSpace: 'pre-wrap' }}>
              {!isLoadingBanner &&
                convertText(bannerData[0]?.text)}
            </Typography>
          </Grid>
          <Grid item md={5} sx={{ mx: 2 }}>
            {/* < Image src={!isLoadingBanner && bannerData[0]?.video} width={150} height={150} alt={!isLoadingBanner && bannerData[0]?.video} /> */}
            {!isMobile && !backgroudImageBanner &&
              <div style={{ position: 'absolute', top: isTablet ? '140px' :'60px', right: isTablet ? '30px' : '100px' }}>
                < Image src={solarPanel} width={isTablet ? 350 : 500} height={isTablet ? 400 :600} alt={'solarPanel.png'} />
              </div>
            }
          </Grid>
        </Grid>
        <Stack direction={'row'} sx={{ ml: !isMobile ? '50px' : (!isLoadingBanner && bannerData[0]?.video !== null) ? '20px' : '0px', display: 'flex', alignItems: 'center', justifyContent: !isMobile ? '' : 'center', zIndex: 2 }}>
          <Button variant="priceButton" sx={{ px: 4, py: 1, "&:hover": { transform: 'scale(1.1)', transition: 'all 0.2s', } }} onClick={scrollToSection}>
            Cotizar
          </Button>
          {!isLoadingBanner && bannerData[0]?.video !== null &&
            <OurSolutionsButton isMobile={isMobile} />
          }
        </Stack>
        {isMobile
          ? <><br /><br /></>
          : <><br /><br /><br /><br /><br /><br /></>
        }
        <div style={{ position: 'relative', zIndex: 1 }}>
          <SocialMedia isMobile={isMobile} />
        </div>
        {
          isMobile
            ? <><br /><br /><br /><br /></>
            : <><br /><br /><br /><br /><br /><br /><br /></>
        }
      </section>
    </QueryClientProvider>
  );
};

export default Banner;