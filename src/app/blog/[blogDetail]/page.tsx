'use client'

import { useEffect, useState } from 'react';
import NavigationBar from '@/generalComponents/NavigationBar';
import { postGetBlogDetail } from '@/services/AppServices';
import DetailBlog from '@/app/blogPageComponents/DetailBlog';
import Footer from '@/generalComponents/Footer';
import { BlogData } from '@/types';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import logo from "@/assets/images/SUSTERGYA-LOGO-CARGA.png";

const BlogPost = () => {

  const isMobile = useMediaQuery('(max-width: 500px)');
  const [blogData, setBlogData] = useState<BlogData>()
  const [exist, setExist] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = { 'blogurl': String(window.location.pathname.split('/').pop()) }
        const response = await postGetBlogDetail(data);
        if (response.status === 200) {
          setExist(true);
          setBlogData(response.data);
        } else if (response.status === 204) {
          setExist(false);
        }
      } catch (error: unknown) {
        if (error) {
          console.log('Error: ' + error)
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main style={{ margin: 0 }}>
        {
          !exist
            ?
            <div style={{ height: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Stack sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                < Image style={{ animation: 'pulse 1s infinite alternate' }} src={logo} width={!isMobile ? 414 : 207} height={!isMobile ? 203 : 101.5} alt="SUSTERGYA-LOGO.png" />
                <br/>
                <Typography variant={isMobile ? 'h6' :'h3'} textAlign={'center'} sx={{mx: 2}}>El blog al que intentas acceder no existe o está inactivo.</Typography>
              </Stack>
            </div>
            : <DetailBlog blogData={blogData} isMobile={isMobile} />
        }
      </main >
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default BlogPost;