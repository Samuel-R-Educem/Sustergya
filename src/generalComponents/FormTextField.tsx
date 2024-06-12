'use client'

/* Importaciones MUI */
import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';

/* Props */
interface FormTextFieldProps {
  placeholder: string,
  textFieldType?: string,
  errorMessage?: string,
  event: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

/**
* @module FormTextField
* @description Este componente renderiza un TextField para los formularios.
* @param {string} placeholder - Contiene el placeholder del TextField.
* @returns Devuelve un elemento TSX el cual renderiza un TextField para los formularios.
*/
const FormTextField: FC<FormTextFieldProps> = ({
  placeholder, event, textFieldType, errorMessage
}) => {

  return (
    <>
      <TextField
        variant="outlined"
        size="small"
        onChange={event}
        type={textFieldType}
        inputMode={
          textFieldType === 'email'
            ? 'email'
            : textFieldType === 'number'
              ? 'numeric'
              : 'none'}
        autoComplete="email"
        error={errorMessage !== ''}
        sx={{
          width: '100%',
          bgcolor: '#FFFFFF',
          caretColor: '#009045',
          '& .MuiInputBase-input::placeholder': {
            color: '#009045',
            fontStyle: 'italic'
          },
          borderColor: '#009045'
        }}
        label={`${placeholder}`}
        color='success'
      />
      {
        errorMessage !== '' &&
        <FormHelperText error>{errorMessage}</FormHelperText>
      }
    </>
  );
};

export default FormTextField;