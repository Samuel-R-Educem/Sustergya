'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";

/* Importación de componentes */
import AboutUsImages from './AboutUsImages';
import AboutListItem from "@/generalComponents/AboutListItem";

/* Importación de funciones */
import convertText from '@/functions/convertText';


/* Props */
interface AboutUsProps {
  scrollToSection: () => void,
  isMobile: boolean,
  isTablet: boolean,
};

/**
* @module AboutUs
* @description Este componente renderiza la sección 'Sobre Sustergya'.
* @param {() => void} scrollToSection - Se encarga de controlar la posición del usuario en el LandingPage al momento de presionar un botón de cotización.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} isTablet - Para identificar si es vista tipo tablet.
* @returns Devuelve un elemento TSX que representa la sección 'Sobre Sustergya' de la página.
*/
const AboutUs: FC<AboutUsProps> = ({ scrollToSection, isMobile, isTablet }) => {

  return (
    <>
      <section>
        <Grid container spacing={3} sx={{ p: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={5.8} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {
              !isMobile &&
              <AboutUsImages isMobile={isMobile} isTablet={isTablet} />
            }
            {/*             < Image src=0{sobreSustergya} width={isMobile ? 350 : 500} height={isMobile ? 350 : 500} alt="sobre_sustegya.png" style={{ marginLeft: (!isMobile && !isTablet) ? '120px' : '0px' }} /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6.2}>
            <Typography variant="h6" sx={{ color: '#6F9D92', fontWeight: 800, mb: 2, transform: 'scaleY(1.2)', letterSpacing: -0.2, whiteSpace: 'pre-wrap' }}>
              Sobre Sustergya
            </Typography>
            <Typography variant="h4" sx={{ color: '#0D1F3D', fontWeight: 800, lineHeight: 0.8, width: (!isMobile && !isTablet) ? '80%' : '100%', mb: 4, letterSpacing: (!isMobile && !isTablet) ? -2 : -1, transform: 'scaleY(1.2)', whiteSpace: 'pre-wrap' }}>
              Somos expertos en la generación
              de Energía Solar
            </Typography>
            <Typography variant="body1" sx={{ color: '#0D1F3D', textAlign: (!isMobile && !isTablet) ? '' : 'justify', lineHeight: 1.2, width: (!isMobile && !isTablet) ? '84%' : '100%', whiteSpace: 'pre-wrap' }}>
              {convertText('**Avantthya Verde** es un financiamiento destinado a la adquisición de paneles solares y celdas fotovoltaicas para hogares, comercios e industrias con alto consumo de energía.')}
            </Typography>
            <br />
            <List sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stack>
                <AboutListItem aboutDesc="Contamos con cobertura nacional" />
                <AboutListItem aboutDesc="Personal calificado y certificado en Tecnología solar." />
                <AboutListItem aboutDesc="Gestión de trámites con CFE para tu instalación." />
                <AboutListItem aboutDesc="Utilizamos marcas de fabricante catalogados como Tier1." />
              </Stack>
            </List>
            <Box sx={{ width: '100%', justifyContent: (!isMobile && !isTablet) ? '' : 'center', display: (!isMobile && !isTablet) ? '' : 'flex' }}>
              <Button
                variant="priceButton"
                sx={{ px: 6, py: 1.7, mt: 1, "&:hover": { transform: 'scale(1.1)', transition: 'all 0.2s', } }}
                onClick={scrollToSection}>
                Cotizar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </section>
      <Toolbar />
    </>
  );
};

export default AboutUs;