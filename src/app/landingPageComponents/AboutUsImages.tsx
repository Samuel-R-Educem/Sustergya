/* Importaciones MUI */
import Image from 'next/image';
import React, { FC } from 'react';

/* Importación de imagenes */
import aboutUsImage2 from "@/assets/images/side-view-man.jpg";
import aboutUsImage1 from "@/assets/images/installing-solar-cell-roof-solar-panels-roof-workers-installing-solar-cell-farm-power.jpg";

/* Props */
interface AboutUsImagesProps {
  isMobile: boolean,
  isTablet: boolean,
};

/**
* @module AboutUs
* @description Este componente renderiza las imagenes de la sección 'Sobre Sustergya'.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} isTablet - Para identificar si es vista tipo tablet.
* @returns Devuelve un elemento TSX que representa las imagenes de la sección 'Sobre Sustergya' de la página.
*/
const AboutUsImages: FC<AboutUsImagesProps> = ({
  isMobile, isTablet
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: isMobile ? '350px' : '500px',
        height: isMobile ? '350px' : '500px',
        marginLeft: (!isMobile && !isTablet) ? '120px' : '0px',
      }}>
      <div style={{
        position: 'absolute',
        background: '#009045',
        width: isMobile ? '100px' : '22px',
        height: isMobile ? '350px' : '164px',
        bottom: '86px',
        left: '18px',
      }} />
      <div style={{
        position: 'absolute',
        background: '#1FA384',
        width: isMobile ? '100px' : '22px',
        height: isMobile ? '350px' : '162px',
        top: '21px',
        right: '42px',
      }} />
      < Image
        src={aboutUsImage1}
        width={isMobile ? 350 : 370}
        height={isMobile ? 350 : 390}
        alt="aboutUsImage1.png"
        style={{ position: 'absolute', left: '54px', top: '22px', borderRadius: '8px' }} />
      < Image
        src={aboutUsImage2}
        width={isMobile ? 350 : 235}
        height={isMobile ? 350 : 227}
        alt="aboutUsImage2.png"
        style={{ position: 'absolute', right: '26px', bottom: '26px', borderRadius: '30px' }} />
    </div>
  )
}

export default AboutUsImages;