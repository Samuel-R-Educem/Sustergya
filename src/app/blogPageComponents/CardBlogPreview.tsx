'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';

/* Importación de tipos */
import { Blog } from '@/types';

/* Importación de funciones */
import convertText from '@/functions/convertText';


/* Props */
interface CardBlogPreviewProps {
  blog: Blog,
  isMobile: boolean,
};

/**
* @module CardBlogPreview
* @description Aquí es donde se renderizan los datos de vista previa del blog.
* @param {Blog} blog - Contiene todos los datos del blog.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX Card con los datos de vista previa del blog.
*/
const CardBlogPreview: FC<CardBlogPreviewProps> = ({ blog, isMobile }) => {

  const fechaFormato = (blog?.lastdate === null) ? '' : format(new Date(blog?.lastdate.replace(/-/g, '/')), "dd-MMMM-yyyy", { locale: es });

  const posts = [
    { title: blog?.tittle, blogDetail: blog?.blogurl },
  ];

/*   const handleSeeBlogDetail = async () => {
    const params = {
      url: blog?.blogurl
    };
    try {
      const response = await getBlogDetail(params);
      if (response.status === 200) {
        console.log(response.data)
      }
    } catch {
      console.log('Error en getBlogDetail')
    }
  } */
  
  return (
    <>
      <Card elevation={3} sx={{ height: !isMobile ? '250px' : '460px', display: 'flex', alignItems: 'center', borderRadius: '15px', mx: '24px', position: 'relative' }}>
        <Grid container spacing={1} className='blog-card' p={2} mb={2}>
          <Grid item lg={5} md={5} sm={5} xs={12} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <Stack>
              <Image src={blog?.img} alt={blog?.img} style={{ borderRadius: '10px' }} width={230} height={170} />
              <Typography sx={{ color: '#0D1F3D', mt: 1, textAlign: 'center' }}>Autor: {
                blog?.author.length <= 20
                  ? blog?.author
                  : blog?.author.substring(0, 20)! + "..."
              }</Typography>
            </Stack>
          </Grid>

          <Grid item lg={7} md={7} sm={7} xs={12}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item lg={6} xs={12} >
                <Typography sx={{ fontSize: !isMobile ? '26px' : '20px', fontWeight: 'bold', letterSpacing: -1, transform: 'scaleY(1.2)', color: '#6F9D92', lineHeight: 1 }}>
                  {blog?.tittle.length <= 55
                    ? blog?.tittle
                    : blog?.tittle.substring(0, 55)! + "..."
                  }
                </Typography>
                <Typography sx={{ whiteSpace: 'pre-wrap', my: 1, color: '#0D1F3D', letterSpacing: -0.6 }}>
                  {convertText(blog?.intro.substring(0, 190)! + "...")}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '15px' }}>
                  <Typography sx={{ fontStyle: 'italic', color: '#0D1F3D' }}>{fechaFormato!}</Typography>
                  <Link href={`/blog/${posts[0].blogDetail}`}>
                    <Button variant='contained' size='small' endIcon={<ArrowForward />}
                      sx={{
                        ml: 2, borderRadius: '6px', bgcolor: '#009045', "&:hover": { bgcolor: '#00D666', transform: 'scale(1.1)', transition: 'all 0.2s', }
                      }}>
                      Leer más
                    </Button>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} md={5} sm={5} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <Image src={blog?.img} alt={blog?.img} style={{ margin: 0, borderRadius: '10px' }} width={230} height={170} />
            <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '15px' }}>
              <Typography sx={{ color: '#0D1F3D', right: 10 }}>Autor: {
                blog?.author.length <= 20
                  ? blog?.author
                  : blog?.author.substring(0, 20)! + "..."
              }</Typography>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CardBlogPreview;