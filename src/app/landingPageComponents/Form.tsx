'use client'

/* Importaciones MUI */
import Image from "next/image";
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import { useQuery } from 'react-query';
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { FC, RefObject, useRef, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

/* Importación de componentes */
import Camera from '@/generalComponents/Camera';
import FormTextField from "@/generalComponents/FormTextField";

/* Importación de imagenes */
import ticket from "@/assets/images/CFE-01.png";
import ventilador from "@/assets/images/ventilador.png";
import sustergyaEmpleado from "@/assets/images/portrait-young-indian-man-technician-wearing-white-hard-hat-standing-near-solar-panels-against-blue-sky-industrial-worker-solar-system-installation.jpg";

/* Importación de funciones */
import formatToCurrencyMXN from '@/functions/formatToCurrencyMXN';

/* Importación de tipos */
import { City, State } from '@/types';

/* Importación de servicios (APIs) */
import { getCities, getStates } from '@/services/AppServices';

/* Props */
interface FormProps {
  formRef: RefObject<HTMLDivElement>,
  isMobile: boolean,
  isTablet: boolean,
}

/**
* @module Form
* @description Este componente renderiza el cintillo de marcas de la página.
* @param {RefObject<HTMLDivElement>} formRef - Para referenciar el elemento del formulario.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} isTablet - Para identificar si es vista tablet.
* @returns Devuelve un elemento TSX que representa el cintillo de marcas en la página.
*/
const Form: FC<FormProps> = ({ formRef, isMobile, isTablet }) => {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [lastName, setLastName] = useState('');
  const [hovered, setHovered] = useState(false);
  const [nameError, setNameError] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cities, setCities] = useState<any[]>([]);
  const [emailError, setEmailError] = useState('');
  const [privacity, setPrivacity] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [contractError, setContractError] = useState('');
  const [contractNumber, setContractNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [stateForm, setStateForm] = useState<State | null>(null);
  const [stateError, setStateError] = useState('');
  const [cityError, setCityError] = useState('');
  const [serviceError, setServiceError] = useState('');


  const { data: states, isLoading: isLoadingStates } = useQuery(["getStates"], getStates, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      //console.log(data)
    }
  });

  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing the camera", err);
    };
  };

  const handleUploadDocument = (e: any) => {

    const newDocument = e.target.files && e.target.files[0];
    console.log(newDocument)
    if (newDocument) {
      const maxSizeBytes = 5 * 1024 * 1024;
      const fileSize = newDocument.size;

      if (fileSize <= maxSizeBytes) {
        console.log(newDocument)
        setSelectedDocument(newDocument);
      } else {
        console.log('El archivo es mayor a 5MB.')
      };
    };
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    if (newName !== '') {
      setNameError('');
    };
    setName(newName);
  };

  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLastName = event.target.value;
    if (newLastName !== '') {
      setLastNameError('');
    };
    setLastName(newLastName);
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = event.target.value;
    if (/^\d{0,12}$/.test(newPhoneNumber)) {
      setPhoneNumber(newPhoneNumber);
      if (newPhoneNumber.length < 10) {
        setPhoneNumberError('Ingrese un teléfono valido');
      } else {
        setPhoneNumberError('');
      }
    } else {
      setPhoneNumberError('Ingrese un teléfono valido');
    };
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    if (event.target.validity.valid) {
      setEmailError('');
    } else {
      setEmailError('Ingrese un correo valido');
    };
    setEmail(newEmail);
  };

  const handleChangeState = async (event: SelectChangeEvent<number>) => {
    const newStateId = event.target.value as number;
    const selectedState = states.find((state: State) => state.idestado === newStateId) || null;
    setStateForm(selectedState);
    const response = await getCities(newStateId);
    setCities(response);
    setCity('');
  };

  const handleChangeCity = (event: SelectChangeEvent<string>) => {
    const newCity = event.target.value;
    setCity(newCity);
  };

  const handleChangeContractNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newContractNumber = event.target.value;
    if (newContractNumber) {
      setContractNumber(newContractNumber);
      setContractError('')
    } else {
      setContractError('Ingrese un contrato valido');
    };
  };

  const handleChangeRadioButton = (event: SelectChangeEvent<string>) => {
    const newRadioButtonValue = event.target.value;
    setService(newRadioButtonValue);
  }

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleCheckedPrivacy = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrivacy = event.target.checked;
    setPrivacity(newPrivacy)
  };

  const handleSendForm = () => {
    let hasError = false;

    if (name === '') {
      setNameError('Favor de ingresar un nombre.');
      hasError = true;
    } else {
      setNameError('');
    };

    if (lastName === '') {
      setLastNameError('Favor de ingresar un apellido.');
      hasError = true;
    } else {
      setLastNameError('');
    };

    if (email === '') {
      setEmailError('Favor de ingresar un correo.');
      hasError = true;
    } else {
      setEmailError('');
    };

    if (stateForm === null) {
      setStateError('Es necesario seleccionar un estado.');
      hasError = true;
    } else {
      setStateError('');
    };

    if (phoneNumber === '') {
      setPhoneNumberError('Favor de ingresar el número de teléfono.');
      hasError = true;
    } else {
      setContractError('');
    };

    if (city === '') {
      setCityError('Es necesario seleccionar una ciudad.');
      hasError = true;
    } else {
      setCityError('');
    };

    if (service === '') {
      setServiceError('Es necesario seleccionar un servicio.');
      hasError = true;
    } else {
      setServiceError('');
    };

    if (contractNumber === '') {
      setContractError('Favor de ingresar el número de contrato.');
      hasError = true;
    } else {
      setContractError('');
    };


    if (!hasError) {
      let form = {
        'name': name,
        'lastname': lastName,
        'tel': phoneNumber,
        'email': email,
        'state': stateForm?.nombreestado,
        'city': city,
        'service': service,
        'contract': contractNumber,
        'document': selectedDocument
      };
      console.log(form);
    };
  };

  return (
    <section style={{ backgroundColor: '#E7F5F8', }} ref={formRef}>
      <Grid container spacing={2} sx={{ pl: !isMobile ? 3 : 1, pb: 3, }}>
        <Grid item xs={12} md={!isTablet ? 6.5 : 12} sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="subtitle1" sx={{ color: '#6F9D92', fontWeight: 'bold' }}>Llena el formulario y</Typography>
              <Typography variant="h4" sx={{ color: '#0D1F3D', fontWeight: 'bold' }}>Resuelve tus dudas con los profesionales</Typography>
              <Typography variant="subtitle1" sx={{ color: '#6F9D92', fontWeight: 'bold' }}>de costos, uso, instalación, financiamiento y más.</Typography>
            </Grid>
            <Grid item xs={4}>
              < Image src={ventilador} width={!isMobile ? 150 : 100} height={!isMobile ? 150 : 100} alt="ventilador.png" />
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormTextField placeholder="Tu nombre" textFieldType='text' event={handleChangeName} errorMessage={nameError} />
            </Grid>
            <Grid item xs={6}>
              <FormTextField placeholder="Número de teléfono" textFieldType='number' event={handleChangePhone} errorMessage={phoneNumberError} />
            </Grid>
            <Grid item xs={6}>
              <FormTextField placeholder="Tus apellidos" textFieldType='text' event={handleChangeLastName} errorMessage={lastNameError} />
            </Grid>
            <Grid item xs={6}>
              <FormTextField placeholder="Correo electrónico" textFieldType='email' event={handleChangeEmail} errorMessage={emailError} />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ color: '#009045' }} error={stateError !== ''}>
                <InputLabel size='small' color='success'>Estado</InputLabel>
                <Select size='small' label="Estado" color='success' sx={{ bgcolor: '#FFFFFF' }} value={stateForm ? stateForm.idestado : ''} onChange={handleChangeState} >
                  {
                    states?.map((state: State) => (
                      <MenuItem key={state?.idestado} value={state?.idestado}>{state?.nombreestado}</MenuItem>
                    ))
                  }
                </Select>
                {stateError !== '' &&
                  < FormHelperText > {stateError}</FormHelperText>
                }
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ color: '#009045' }} error={cityError !== ''}>
                <InputLabel size='small' color='success'>Ciudad</InputLabel>
                <Select size='small' label="Ciudad" disabled={stateForm === null} color='success' sx={{ bgcolor: stateForm === null ? '#D6D6D6' : '#FFFFFF' }} onChange={handleChangeCity}>
                  {
                    cities?.map((city: City) => (
                      <MenuItem key={city?.idmunicipio} value={city?.nombremunicipio}>{city?.nombremunicipio}</MenuItem>
                    ))
                  }
                </Select>
                {cityError !== '' &&
                  < FormHelperText > {cityError}</FormHelperText>
                }
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <Stack direction={!isMobile ? 'row' : 'column'} sx={{ textAlign: isMobile ? 'center' : 'initial', }}>
            <FormControl error={serviceError !== ''}>
              <Stack direction={!isMobile ? 'row' : 'column'}>
                <Typography sx={{ color: '#0D1F3D', fontWeight: 'bold', mr: 2, mt: 1 }}>El servicio es para: </Typography>
                <RadioGroup onChange={handleChangeRadioButton}>
                  <Stack direction={!isMobile ? 'row' : 'column'}>
                    <FormControlLabel value="hogar" control={<Radio color="success" />} label="Hogar" sx={{ mx: isMobile ? 'auto' : '0' }} />
                    <FormControlLabel value="negocio" control={<Radio color="success" />} label="Negocio" sx={{ mx: isMobile ? 'auto' : '0' }} />
                    <FormControlLabel value="industria" control={<Radio color="success" />} label="Industria" sx={{ mx: isMobile ? 'auto' : '0' }} />
                  </Stack>
                </RadioGroup>
              </Stack>
              {serviceError !== '' &&
                < FormHelperText > {serviceError}</FormHelperText>
              }
            </FormControl>
          </Stack>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormTextField placeholder={!isMobile ? "Número de contrato con CFE" : "# Contrato con CFE"} textFieldType='number' event={handleChangeContractNumber} errorMessage={contractError} />
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <input type='file' id="fileInput" style={{ display: 'none' }} />
                <label
                  htmlFor="fileInput"
                  onClick={handleUploadDocument}
                  style={{
                    backgroundColor: '#009045',
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: isMobile ? '15px' : '16px',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '0px 10px 0px 10px',
                    cursor: 'pointer',
                    display: 'inline-block',
                    transition: 'all 0.2s', // Transición suave
                    transform: hovered ? 'scale(1.1)' : 'none',
                    textAlign: 'center',
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  Subir documento
                </label>
                <FormHelperText>Recibo de luz</FormHelperText>
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography color={'#009045'} variant='h1' sx={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: !isMobile ? -3 : -1 }}>Ahorra</Typography>
              <Typography color={'#009045'} variant='h2' sx={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: !isMobile ? -3 : -1, lineHeight: 0.5 }}>hasta el</Typography>
              <Typography color={'#009045'} sx={{ textAlign: 'center', fontWeight: 800, letterSpacing: -3, transform: 'scaleY(1.2)', fontSize: '85px', lineHeight: 1.2 }}>97%</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ border: '1px solid #009045', height: '210px', width: '350px', mx: 'auto', position: 'relative' }}>
                <Stack direction={'column'}>
                  <Image src={ticket} width={354} height={210} alt="ticket.png" style={{ marginInline: 'auto' }} />
                </Stack>
              </Card>
            </Grid>
          </Grid>
          <br />
          <Stack sx={{ width: '100%' }}>
            <FormControlLabel
              sx={{ fontStyle: "italic", color: '#009045', fontWeight: 'bold', mx: 'auto' }}
              control={
                <Checkbox color="success" sx={{ color: '#009045' }} onChange={handleCheckedPrivacy} />
              }
              label={
                <>
                  <span onClick={() => openInNewTab('https://avantthya.com.mx/blog/aviso-de-privacidad/9/')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                    Leer
                  </span>
                  <span>
                    {' y Aceptar el Uso de Privacidad'}
                  </span>
                </>
              } />
            <br />

            {privacity
              ? <Button variant="priceButton" sx={{ width: '50%', mx: 'auto', fontWeight: 'bold' }} onClick={handleSendForm}>Envíar</Button>
              : <Button disabled variant="priceButton" sx={{ width: '50%', mx: 'auto', fontWeight: 'bold', bgcolor: '#02663C', color: '#027D4A' }}>Envíar</Button>}
          </Stack>
        </Grid>
        <Grid item xs={0} sm={0} md={!isTablet ? 5.5 : 0} sx={{ display: 'flex', justifyContent: 'end' }}>
          {!isMobile && !isTablet &&
            < Image src={sustergyaEmpleado} width={590} height={800} alt="sobre_sustegya.png" />
          }
        </Grid>
      </Grid>
    </section >
  );
};

export default Form;