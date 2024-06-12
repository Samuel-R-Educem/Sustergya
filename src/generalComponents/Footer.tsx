'use client'

/* Importaciones MUI */
import React from 'react'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';
import Container from '@mui/material/Container';
import Twitter from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Copyright from '@mui/icons-material/Copyright';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccessTime from '@mui/icons-material/AccessTime';
import LocalPhone from '@mui/icons-material/LocalPhone';
import LocationOn from '@mui/icons-material/LocationOn';

import cnbv from "@/assets/images/cnvb.png";
import condusef from "@/assets/images/condusef.png";
import logo from "@/assets/images/logo_red.png";
import { logo_avantthya } from '@/utils/endpoints';


/**
* @module Footer
* @description Componente que renderiza el footer de la página.
* @returns Devuelve el footer de la página.
*/
const Footer = () => {

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid sx={{ bgcolor: '#0B1B35' }}>
      <Container maxWidth={'xl'} >
        <Grid id="pie" container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={0}>
          <Grid item lg={3} sm={4} xs={12} sx={{ mt: { lg: 8, md: 5, sm: 5 }, textAlign: 'center' }}>
            <h3 style={{ color: '#ffffff' }}>Oficinas del Corporativo</h3>
            <LocationOn sx={{ color: 'red' }} fontSize='large' />
            <div>
              <a href="https://goo.gl/maps/a9DeoaMTUcsatVEW9" target={'_blank'} rel="noopener noreferrer" className={xs || sm ? 'Footer_a_small' : "Footer_a"} style={{ textDecoration: 'none' }}>
                <Typography variant={xs || sm ? "subtitle1" : 'subtitle1'} sx={{ color: '#ffffff' }} >Paseo de los insurgentes #301  <br /> Colonia los Paraísos, C.P 37328  <br /> León, Guanajuato.</Typography>
              </a>
            </div>
            <p className={xs || sm ? 'Footer_p_small' : "Footer_p"} style={{ color: '#ffffff' }}> <LocalPhone fontSize='small' sx={{ mr: 1, color: '#ffffff' }} />(477) 461 47 00</p>
            <p className={xs || sm ? 'Footer_p_small' : "Footer_p"} style={{ color: '#ffffff' }}> <AccessTime fontSize='small' sx={{ mr: 1, color: '#ffffff' }} /> Lun a Vie 08:00 a 18:00 hrs</p>
          </Grid>
          <Grid item lg={3} sm={4} xs={12} sx={{ mt: { lg: 8, md: 5, sm: 5 }, textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color: '#ffffff' }}>Trasparencia</h3>
            <Typography sx={{ mb: 1, color: '#ffffff' }}>
              <Link color="inherit" href="https://www.avantthya.com.mx/une/" underline="none" >UNE</Link>
            </Typography>
            <Typography sx={{ mb: 1, color: '#ffffff' }}>
              <Link color="inherit" href="https://www.avantthya.com.mx/fondo-de-proteccion/" underline="none"  >
                Fondo de Protección
              </Link>
            </Typography>
            <Typography sx={{ mb: 1, color: '#ffffff' }}>
              <Link color="inherit" href="https://www.avantthya.com.mx/reportes-financieros/" underline="none" >
                Reportes Financieros
              </Link>
            </Typography>
            <Typography sx={{ mb: 1, color: '#ffffff' }}>
              <Link color="inherit" href="https://www.avantthya.com.mx/aviso-legal/" underline="none" >
                Aviso Legal
              </Link>
            </Typography>
            <Typography sx={{ mb: 1, color: '#ffffff' }}>
              <Link color="inherit" href="https://avantthya.com.mx/blog/aviso-de-privacidad/9/" underline="none" >
                Aviso de privacidad
              </Link>
            </Typography>
            <Typography sx={{ mb: 1, color: '#ffffff' }}>
              <Link color="inherit" href="https://avantthya.com.mx/comite-remuneracion/" underline="none" >
                Comité de remuneración
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={3} sm={4} xs={12} sx={{ mt: { lg: 8, md: 5, sm: 5 }, textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <Stack sx={{ display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ color: '#ffffff' }}>Redes Sociales de Avantthya</h3>
              <a href="https://www.facebook.com/avantthyaoficial/" target={'_blank'} rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#FFFFFF', display: 'flex', alignItems: 'center', marginInline: 'auto', marginBottom: '10px' }}>
                <Facebook sx={{ mr: 1, color: '#ffffff' }} /> Facebook</a>
              <a href="https://twitter.com/avantthya" target={'_blank'} rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#FFFFFF', display: 'flex', alignItems: 'center', marginInline: 'auto', marginBottom: '10px' }}>
                <Twitter sx={{ mr: 1, color: '#ffffff' }} /> Twitter</a>
              <a href="https://mx.linkedin.com/company/avantthya" target={'_blank'} rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#FFFFFF', display: 'flex', alignItems: 'center', marginInline: 'auto', marginBottom: '10px' }}>
                <LinkedIn sx={{ mr: 1, color: '#ffffff' }} /> Linkedin</a>
            </Stack>
          </Grid>
          <Grid item lg={3} md={12} sm={12} xs={12} sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', display: 'flex' }}>
            <Stack direction="column" justifyContent="flex-start" alignItems="center" sx={{ pt: { sm: 0, md: 3 } }}>
              <Stack>
                <a href="https://avantthya.com.mx/">
                  < Image src={logo_avantthya} width={220} height={120} alt="SUSTERGYA-LOGO.png" />
                </a>
              </Stack>
              <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', bgcolor: '#e5e7e6', borderRadius: '12px', m: 0, pt: 0.5, pb: 0, pl: 2, pr: 1, mt: 1 }} >
                <a href="https://www.gob.mx/condusef" target={'_blank'} rel="noopener noreferrer">
                  < Image src={condusef} width={90} height={50} alt="SUSTERGYA-LOGO.png" />
                </a>
                <a href="https://www.gob.mx/cnbv" target={'_blank'} rel="noopener noreferrer">
                  < Image src={cnbv} width={100} height={60} alt="SUSTERGYA-LOGO.png" />
                </a>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={12} xs={12} sm={12} md={12} sx={{ textAlign: 'center', alignItems: 'center', justifyContent: "center", mt: 2, p: 0, pb: 2, display: 'flex', mb: 0 }}>
            <Grid container direction="row" justifyContent="center" alignItems={xs || sm ? 'center' : "flex-start"}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <h3 style={{ color: '#ffffff' }}>OPERACIONES DE TU LADO S.A. DE C.V., S.F.P.</h3>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}><Copyright sx={{ mr: 1, color: '#ffffff' }} /> Derechos reservados {new Date().getFullYear()}</h3>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;