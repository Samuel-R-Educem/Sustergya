'use client'

/* Importaciones MUI */
import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import { StepIconProps } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Adjust from '@mui/icons-material/Adjust';
import Circle from '@mui/icons-material/Circle';
import StepLabel from '@mui/material/StepLabel';
import Accordion from '@mui/material/Accordion';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import StepContent from '@mui/material/StepContent';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';

const steps = [
  {
    label: 'Casa',
    options: [
      '$2,000 - $4,000',
      '$4,000 - $6,000',
      '$6,000 - $8,000',
      '$8,000 - $10,000',
    ],
  },
  {
    label: 'Negocio',
    options: [
      '$2,000 - $4,000',
      '$4,000 - $6,000',
      '$6,000 - $8,000',
      '$8,000 - $10,000',
    ],
  },
  {
    label: 'Industria',
    options: [
      '$2,000 - $4,000',
      '$4,000 - $6,000',
      '$6,000 - $8,000',
      '$8,000 - $10,000',
    ],
  },
];

interface CatalogFilterProps {
  isMobile: boolean,
};

/**
* @module CatalogFilter
* @description Este componente renderiza el filtro del catálogo de productos.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @returns Devuelve un elemento TSX que representa el filtro del catálogo de productos de la página.
*/
const CatalogFilter: FC<CatalogFilterProps> = ({ isMobile }) => {

  const [activeStep, setActiveStep] = React.useState(0);

  const handleToggle = (step: any) => {
    setActiveStep(activeStep === step ? -1 : step);
  };

  const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme }) => ({
      color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#009045',
      display: 'flex',
      height: 22,
      alignItems: 'center',
      '& .QontoStepIcon-completedIcon': {
        color: '#009045',
        zIndex: 1,
        fontSize: 18,
      },
    }),
  );

  function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <></>
        ) : (
          active
            ? <Adjust sx={{ color: '#009045', fontSize: '30px' }} />
            : <Circle sx={{ color: '#009045', fontSize: '26px' }} />
        )}
      </QontoStepIconRoot>
    );
  }

  const [checkedState, setCheckedState] = useState<boolean[][]>(
    steps.map(step => step.options.map(() => false))
  );

  const handleCheckboxChange = (stepIndex: number, optionIndex: number) => {
    const updatedCheckedState = checkedState.map((step, idx) => {
      if (idx === stepIndex) {
        return step.map((checked, index) => {
          return index === optionIndex ? !checked : checked;
        });
      }
      return step;
    });
    setCheckedState(updatedCheckedState);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#000000', fontSize: !isMobile ? '60px' : '30px' }} />}>
        <Typography variant={!isMobile ? 'h4' : 'h5'}>Categorías</Typography>
      </AccordionSummary>
      <Divider sx={{ mx: 2 }} />
      <AccordionDetails>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper orientation="vertical">
            {steps.map((step, stepIndex) => (
              <Step key={step.label} active={activeStep === stepIndex}>
                <StepLabel StepIconComponent={QontoStepIcon} onClick={() => handleToggle(stepIndex)}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant='h6'>{step.label}</Typography>
                  </Box>
                </StepLabel>
                {activeStep === stepIndex && (
                  <StepContent>
                    {step?.options?.map((range: string, optionIndex) => (
                      <FormControlLabel
                        key={optionIndex}
                        control={
                          <Checkbox color='success' onChange={() => handleCheckboxChange(stepIndex, optionIndex)} checked={checkedState[stepIndex][optionIndex]} />
                        }
                        label={
                          <Typography variant='body2' sx={{ color: checkedState[stepIndex][optionIndex] ? '#009045' : '#a3a3a3', fontWeight: 'bold', transform: 'scaleY(1.1)' }}>
                            {`Consumo entre ${range}`}
                          </Typography>
                        } />
                    ))}
                  </StepContent>
                )}
              </Step>
            ))}
          </Stepper>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CatalogFilter;