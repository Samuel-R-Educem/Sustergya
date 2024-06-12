'use client'

/* Importaciones MUI */
import { useRef, useState } from "react";
import { mainTheme } from "@/theming/mainTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { QueryClient, QueryClientProvider } from "react-query";

/* Importación de componentes */
import FAQ from "./landingPageComponents/FAQ";
import Form from "./landingPageComponents/Form";
import Banner from "./landingPageComponents/Banner";
import Brands from "./landingPageComponents/Brands";
import AboutUs from "./landingPageComponents/AboutUs";
import Features from "./landingPageComponents/Features";
import Customers from "./landingPageComponents/Customers";
import CatalogList from "./landingPageComponents/CatalogList";
import NavigationBar from "@/generalComponents/NavigationBar";
import WhatsAppContact from "@/generalComponents/WhatsAppContact";
import Footer from "@/generalComponents/Footer";
import Toolbar from "@mui/material/Toolbar";

/* Creación del QueryClient */
const queryClient = new QueryClient();

/**
* @module Home
* @description Aquí es donde se encuentra almacenado todo el LandingPage.
* @returns 
*/
export default function Home() {

  const formRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 500px)');
  const isTablet = useMediaQuery('(max-width: 1300px)');
  const backgroudImageBanner = useMediaQuery('(max-width: 900px)');
  const brandImages = useMediaQuery('(max-width: 1000px)');
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  /**
  * @function scrollToSection
  * @description Realiza la función de desplazamiento del usuario dentro de la Landing Page.
  */
  function scrollToSection() {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  };

  if (isLoadingPage) return (
    <QueryClientProvider client={queryClient}>
      <Banner scrollToSection={scrollToSection} queryClient={queryClient} isMobile={isMobile} setIsLoadingPage={setIsLoadingPage} isLoadingPage={isLoadingPage} isTablet={isTablet} backgroudImageBanner={backgroudImageBanner} />
    </QueryClientProvider>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <NavigationBar scrollToSection={scrollToSection} />
      </header>
      <main style={{ margin: 0 }}>
        <ThemeProvider theme={mainTheme}>
          <Banner scrollToSection={scrollToSection} queryClient={queryClient} isMobile={isMobile} setIsLoadingPage={setIsLoadingPage} isLoadingPage={isLoadingPage} isTablet={isTablet} backgroudImageBanner={backgroudImageBanner} />
          <br />
          <Brands isMobile={isMobile} brandImages={brandImages}/>
          <Toolbar />
          <AboutUs scrollToSection={scrollToSection} isMobile={isMobile} isTablet={isTablet} />
          {/* <CatalogList isMobile={isMobile} isTablet={isTablet} /> */}
          <Customers isMobile={isMobile} />
          <WhatsAppContact />
          <Features isMobile={isMobile} />
          <FAQ isMobile={isMobile} backgroudImageBanner={backgroudImageBanner}/>
          <Form formRef={formRef} isTablet={isTablet} isMobile={isMobile} />
        </ThemeProvider>
      </main >
      <footer>
        <Footer />
      </footer>
    </QueryClientProvider>
  );
};
