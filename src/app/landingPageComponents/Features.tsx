'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Grid from "@mui/material/Grid";
import { useQuery } from 'react-query';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

/* Importación de componentes */
import FeatureCard from "@/generalComponents/FeatureCard";

/* Importación de servicios (APIs) */
import { getFeatures } from '@/services/AppServices';

/* Importación de tipos */
import { Feature } from '@/types';

/* Props */
interface FeaturesProps {
  isMobile: boolean,
};

/**
* @module Features
* @description Este componente renderiza la sección Features.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX el cual muestra los Features.
*/
const Features: FC<FeaturesProps> = ({ isMobile }) => {

  const fetchFeatures = async () => {
    return getFeatures(5);
  };

  const { data: featuresData, isLoading: isLoadingFeatures } = useQuery(["getFeatures"], fetchFeatures, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      //console.log(data)
    }
  });

  if (isLoadingFeatures) return (
    <></>
  );

  return (
    <>
      <br /><br />
      <section>
        <Stack sx={{ width: '100%' }}>
          <Typography variant="h6" sx={{ color: '#009045', fontWeight: 800, textAlign: 'center', letterSpacing: -1, transform: 'scaleY(1.2)', mb: '5px' }}>
            Somos líderes en
          </Typography>
          <Typography variant="h4" sx={{ color: '#0D1F3D', fontWeight: 800, textAlign: 'center', letterSpacing: -2, transform: 'scaleY(1.2)', lineHeight: 1, whiteSpace: 'pre-wrap' }}>
            {`Generación de Energía Solar
en México`}
          </Typography>
        </Stack>
        {!isMobile
          ? <><br /><br /><br /><br /><br /></>
          : <><br /><br /><br /></>
        }
        <Grid container spacing={!isMobile ? 3 : 1} sx={{ width: '70%', mx: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {!isLoadingFeatures &&
            featuresData?.slice(0, 3).map((feature: Feature) => (
              <Grid key={feature?.id} item xs={12} sm={12} md={6} lg={4}>
                <FeatureCard
                  key={feature?.id}
                  isMobile={isMobile}
                  feature={feature}
                />
              </Grid>
            ))
          }
          {!isLoadingFeatures &&
            featuresData?.slice(3, 5).map((feature: Feature) => (
              <Grid key={feature?.id} item xs={12} sm={12} md={6} lg={4}>
                <FeatureCard
                  key={feature?.id}
                  isMobile={isMobile}
                  feature={feature}
                />
              </Grid>
            ))
          }
        </Grid>
      </section>
      <br /><br /><br /><br />
    </>
  );
};

export default Features;