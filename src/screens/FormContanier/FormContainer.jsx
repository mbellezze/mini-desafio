import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import "./style.css"


export const FormContainer = () => {

    const [datosForm, setDatosForm] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setDatosForm({ ...datosForm, [name]: value });        
    }
    
    const submitForm = () => {
        console.log(datosForm);
    }


    return (
        
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        
        autoComplete="off"
        onSubmit={submitForm}
        className="form-container"
        >
            <TextField 
                id="outlined-secondary"
                label="Nombre"
                variant="outlined"
                color="secondary"
                name="nombre"
                required onChange={handleChange}
            />
            <TextField 
                id="outlined-secondary"
                label="Apellido"
                variant="outlined"
                color="secondary"
                name="apellido"
                required onChange={handleChange}
            />
            <TextField 
                id="outlined-secondary"
                label="Email"
                variant="outlined"
                color="secondary"
                name="email"
                required onChange={handleChange}
            />
            <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                Enviar
            </Button>
        </Box>
   
    )
}