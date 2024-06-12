'use client'

/* Importaciones MUI */
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

/* Importación de componentes */
import Brands from "../landingPageComponents/Brands";
import Catalog from "../catalogPageComponents/Catalog";
import Customers from "../landingPageComponents/Customers";
import NavigationBar from "@/generalComponents/NavigationBar";
import WhatsAppContact from "@/generalComponents/WhatsAppContact";
import CatalogFilter from "../catalogPageComponents/CatalogFilter";
import { useState } from "react";

/* Creación del QueryClient */
const queryClient = new QueryClient();

/**
* @module Products
* @description Aquí es donde se encuentra almacenado todo el catálogo de productos.
*/

const Products = () => {

  const isMobile = useMediaQuery('(max-width: 500px)');
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  if (isLoadingPage) return (
    <QueryClientProvider client={queryClient}>
      <Customers isMobile={isMobile} setIsLoadingPage={setIsLoadingPage} isLoadingPage={isLoadingPage} />
    </QueryClientProvider>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <NavigationBar />
      </header>
      <main style={{ margin: 0 }}>
        {/* <Brands isMobile={isMobile} /> */}
        <Grid container spacing={0} sx={{ p: 2 }}>
          <Grid item xs={12} md={3.5}>
            <CatalogFilter isMobile={isMobile} />
          </Grid>
          <Grid item xs={12} md={8.43}>
            <Catalog isMobile={isMobile} />
          </Grid>
        </Grid>
        <WhatsAppContact />
        <Customers isMobile={isMobile} setIsLoadingPage={setIsLoadingPage} isLoadingPage={isLoadingPage} />
      </main>
    </QueryClientProvider>
  );
};

export default Products;