'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { BlogData } from '@/types';

/* Props */
interface DetailBlogProps {
  blogData: BlogData | undefined,
  isMobile: boolean,
}

/**
* @module DetailBlog
* @description Aquí es donde se encuentra almacenado todo el LandingPage.
*/
const DetailBlog: FC<DetailBlogProps> = ({ blogData, isMobile }) => {
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" sx={{ display: 'flex', mb: 5 }}>
      <Grid item sx={{ bgcolor: '#001933', width: '100%' }}>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}
          sx={{
            pr: 0,
            color: 'white',
            display: 'flex',
            textAlign: 'justify',
            alignItems: 'center',
            p: { md: 10, sm: 2, xs: 2 },
          }}>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <Typography variant='h4'>{blogData?.blog?.tittle!}</Typography>
            <Typography>{blogData?.blog?.intro!}</Typography>
            <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: 10 }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                {blogData?.blog?.date!}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={12} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
            {blogData?.blog?.img &&
              <Grid item lg={5} md={5} sm={5} xs={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', }}>
                <img
                  style={{
                    width: isMobile ? '300px' : '500px',
                    height: 'auto',
                    borderRadius: '8px',
                    marginInline: isMobile ? 'auto' : ''
                  }}
                  src={`${blogData?.blog?.img}`}
                  loading="lazy"
                  alt={'portada'}
                  aria-hidden="true"
                />
              </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Grid item lg={8} xs={12} sx={{ pl: { xs: 0, md: 4 }, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'justify' }}>
          {
            blogData?.list?.length && blogData?.list?.length > 0 &&
            blogData?.list?.sort((a, b) => a.order - b.order).map((item: any, index) => {
              return (
                <Grid item lg={8} xs={12} key={index} sx={{ pl: { xs: 0, md: 4 }, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'justify' }}>
                  {item?.idtype === 1 ?
                    <Typography>{item?.text}</Typography>
                    : item?.idtype === 2 ?
                      <img key={index} alt={"imagen"} style={{ maxWidth: "100%", height: 'auto' }}
                        src={item.file}
                        loading="lazy"
                      />
                      : item.idtype === 3 &&
                      <Button href={item.link} variant="contained" color="primary" sx={{ mt: 1, mb: 1, borderRadius: '15px' }}>{item.text}</Button>
                  }
                </Grid>
              );
            })
          }
        </Grid>
        {/*         <Grid item lg={8} xs={12} sx={{ mt: 2, ml: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', textAlign: "initial" }}>
          <div>
            <Typography variant="body2" sx={{ ml: 1, display: 'flex' }}>Etiquetas:</Typography>
          </div>
        </Grid> */}
      </Container>
    </Grid>
  );
};

export default DetailBlog;