'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useMediaQuery from '@mui/material/useMediaQuery';

/* Importación de componentes */
import { mainTheme } from "@/theming/mainTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

/* Importación de imagenes */
import logo from "@/assets/images/SUSTERGYA-LOGO.png";

/* Props */
interface NavigationBarProps {
  scrollToSection?: () => void,
};

/**
* @module NavigationBar 
* @description Este componente renderiza la barra de navegación de la página.
* @param {() => void} scrollToSection - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX que representa la barra de navegación de la página.
*/
const NavigationBar: FC<NavigationBarProps> = ({ scrollToSection }) => {

  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <ThemeProvider theme={mainTheme}>
      <nav style={{ backgroundColor: '#0B1B35' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8} sx={{ pt: 0 }}>
            <div style={{ marginLeft: !isMobile ? '20px' : '10px', marginTop: !isMobile ? '0px' : '6px' }}>
              <Link href={"http://192.168.1.101:3000"}>
                < Image src={logo} width={isMobile ? 100 : 180} height={isMobile ? 50 : 80} alt="SUSTERGYA-LOGO.png" />
              </Link>
            </div>
          </Grid>
          <Grid item xs={3} md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link href={"http://192.168.1.101:3000/blog"}>
              <Button sx={{ color: '#FFFFFF', width: !isMobile ? '150px' : '10px', fontWeight: 'bold', height: '70px', fontSize: !isMobile ? '18px' : '14px', textTransform: 'none', }}>Blog</Button>
            </Link>
          </Grid>
{/*           <Grid item xs={2.5} md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link href={"http://localhost:3000/products"}>
              <Button sx={{ color: '#FFFFFF', width: !isMobile ? '150px' : '10px', fontWeight: 'bold', height: '70px', fontSize: !isMobile ? '18px' : '14px', textTransform: 'none', }}>Catálogo</Button>
            </Link>
          </Grid> */}
          <Grid item xs={3} md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            {window.location.href !== "http://192.168.1.101:3000/" &&
              <Link href={"http://192.168.1.101:3000/"}>
                < Button
                  variant="priceButton"
                  sx={{
                    width: !isMobile ? '150px' : '10px',
                  }}>
                  {!isMobile ? 'Cotizaciones' : '$$$'}
                </Button>
              </Link>
            }
            {window?.location?.href === 'http://192.168.1.101:3000/' &&
              < Button
                variant="priceButton"
                onClick={scrollToSection}
                sx={{
                  width: !isMobile ? '150px' : '10px',
                }}>
                {!isMobile ? 'Cotizaciones' : '$$$'}
              </Button>}
          </Grid>
        </Grid>
      </nav>
    </ThemeProvider >
  );
};

export default NavigationBar;