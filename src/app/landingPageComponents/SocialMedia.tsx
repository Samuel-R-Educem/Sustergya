'use client'

/* Importaciones MUI */
import React, { FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/* Importación de funciones */
import convertText from '@/functions/convertText';
import Link from 'next/link';
import { Twitter } from '@mui/icons-material';
import Box from '@mui/material/Box';


/* Props */
interface SocialMediaProps {
  isMobile: boolean,
};

/**
* @module SocialMedia
* @description Este componente son los enlaces de redes sociales.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX que representa el las redes sociales de la página.
*/
const SocialMedia: FC<SocialMediaProps> = ({ isMobile }) => {

  const [isHoveredF, setIsHoveredF] = useState(false);
  const [isHoveredI, setIsHoveredI] = useState(false);
  const [isHoveredL, setIsHoveredL] = useState(false);

  return (
    <Box>
      <Typography variant="h6" sx={{ ml: !isMobile ? '55px' : '', textAlign: !isMobile ? 'left' : 'center', color: '#FFFFFF', fontWeight: 'bold' }}>{convertText('**¡Síguenos!**')}</Typography>
      <Stack direction={'row'} sx={{ ml: !isMobile ? '55px' : '', mt: 1, display: !isMobile ? '' : 'flex', alignItems: !isMobile ? '' : 'center', justifyContent: !isMobile ? '' : 'center', }}>
        <Link href={"https://www.facebook.com/avantthyaoficial/"} style={{ textDecoration: 'none' }}>
          <div style={{
            border: '2px solid #FFFFFF',
            height: '53px',
            width: '53px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backgroundColor: isHoveredF ? 'rgba(24, 119, 242, 1)' : 'transparent',
            transform: isHoveredF ? 'scale(1.2)' : 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={() => setIsHoveredF(true)}
            onMouseLeave={() => setIsHoveredF(false)}>
            <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '40px', mr: 0.5 }}>f</Typography>
          </div>
        </Link>
        <Link href={"https://twitter.com/avantthya"} style={{ textDecoration: 'none' }}>
          <div style={{
            border: '2px solid #FFFFFF',
            height: '53px',
            width: '53px',
            borderRadius: '50%',
            marginLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: isHoveredI ? 'rgba(24, 119, 242, 1)' : 'transparent',
            transform: isHoveredI ? 'scale(1.2)' : 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={() => setIsHoveredI(true)}
            onMouseLeave={() => setIsHoveredI(false)}>
            <Twitter sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '40px' }} />
          </div>
        </Link>
        {/*         <Link href={""} style={{ textDecoration: 'none' }}>
          <div style={{
            border: '2px solid #FFFFFF',
            height: '53px',
            width: '53px',
            borderRadius: '50%',
            marginLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: isHoveredI ? 'linear-gradient(45deg, rgba(253,244,151,1), rgba(253,244,151,1), rgba(253,89,73,1), rgba(214,36,159,1), rgba(40,90,235,1))' : 'transparent',
            transform: isHoveredI ? 'scale(1.2)' : 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={() => setIsHoveredI(true)}
            onMouseLeave={() => setIsHoveredI(false)}>
            <div style={{ border: '3px solid #FFFFFF', height: '27px', width: '27px', borderRadius: '10px', display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ border: '2px solid #FFFFFF', height: '1px', width: '1px', borderRadius: '50%', position: 'absolute', top: 1, right: '3px' }} />
              <div style={{ border: '3px solid #FFFFFF', height: '12px', width: '11px', borderRadius: '50%', marginTop: '4px' }} />
            </div>
          </div>
        </Link> */}
        <Link href={"https://mx.linkedin.com/company/avantthya"} style={{ textDecoration: 'none' }}>
          <div style={{
            border: '2px solid #FFFFFF',
            height: '53px',
            width: '53px',
            borderRadius: '50%',
            marginLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backgroundColor: isHoveredL ? 'rgba(7, 98, 200, 1)' : 'transparent',
            transform: isHoveredL ? 'scale(1.2)' : 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={() => setIsHoveredL(true)}
            onMouseLeave={() => setIsHoveredL(false)}>
            <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '40px' }}>in</Typography>
          </div>
        </Link>
      </Stack>
    </Box>
  );
};

export default SocialMedia;