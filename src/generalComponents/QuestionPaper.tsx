'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import Typography from "@mui/material/Typography";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

/* Importación de tipos */
import { Question } from '@/types';

/* Importación de funciones */
import convertText from '@/functions/convertText';


/* Props */
interface QuestionPaperProps {
  question: Question,
  expanded: string | false,
  handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void,
};

/**
* @module QuestionPaper
* @description Este componente renderiza la el Accordion de la pregunta.
* @param {Question} question - Contiene los datos de la pregunta.
* @param {string | false} expanded - Comparador de los acordiones.
* @param {(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void} handleChange - Se encarga de controlar que no puedan estár dos elementos de las preguntas frecuentes abiertos al mismo tiempo.
* @returns Devuelve un elemento TSX Accordion el cual muestra la pregunta.
*/
const QuestionPaper: FC<QuestionPaperProps> = ({
  question, expanded, handleChange
}) => {

  return (
    <Accordion
      expanded={expanded === question?.title}
      onChange={handleChange(question?.title)}
      sx={{
        mb: '10px',
        bgcolor: '#E7F5F8',
        boxShadow: 'none',
        borderRadius: '15px',
        '&:first-of-type': {
          borderRadius: '15px'
        },
        '&:last-of-type': {
          borderRadius: '15px'
        },
        '&::before': {
          bgcolor: 'rgb(0,0,0,0.0)'
        },
        "&:hover": {
          transform: 'scale(1.05)',
          transition: 'all 0.2s',
        }
      }}>
      <AccordionSummary sx={{ borderRadius: '15px' }}
        expandIcon={
          expanded === question?.title
            ? <RemoveCircle sx={{ top: 8, right: 10, color: '#009045', fontSize: '50px' }} />
            : <AddCircle sx={{ top: 8, right: 10, color: '#009045', fontSize: '50px' }} />}>
        <Typography variant="h6" sx={{ color: '#0D1F3D', fontWeight: 800, letterSpacing: -1, py: '4px', width: '90%', transform: 'scaleY(1.2)', }}>
          {question?.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ borderRadius: '15px', pt: 0 }}>
        <Typography variant={'h6'} sx={{ color: '#0D1F3D', width: '85%', letterSpacing: -1, whiteSpace: 'pre-wrap', lineHeight: 1.1 }}>
          {convertText(question?.text)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default QuestionPaper;