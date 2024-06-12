'use client'

/* Importaciones MUI */
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { QueryClient, QueryClientProvider } from "react-query";

/* Importación de componentes */
import Footer from "@/generalComponents/Footer";
import BlogList from "../blogPageComponents/BlogList";
import NavigationBar from "@/generalComponents/NavigationBar";

/* Creación del QueryClient */
const queryClient = new QueryClient();

/**
* @module Blog
* @description Aquí es donde se encuentran almacenados todos los blogs.
*/
export default function Blog() {

  const isMobile = useMediaQuery('(max-width: 500px)');
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  if (isLoadingPage) return (
    <QueryClientProvider client={queryClient}>
      <BlogList isMobile={isMobile} isLoadingPage={isLoadingPage} setIsLoadingPage={setIsLoadingPage} />
    </QueryClientProvider>
  )

  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <NavigationBar />
      </header>
      <main style={{ margin: 0 }}>
        <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ height: !isMobile ? '15px' : '10px', width: '50px', backgroundColor: '#009045', marginLeft: '20px' }} />
          <Typography variant={!isMobile ? "h2" : "h4"} sx={{ fontWeight: 'bold', m: '20px 0px 20px 10px' }}>Blog</Typography>
        </Stack>
        <BlogList isMobile={isMobile} isLoadingPage={isLoadingPage} setIsLoadingPage={setIsLoadingPage} />
      </main>
      <footer>
        <Footer />
      </footer>
    </QueryClientProvider>
  );
};
