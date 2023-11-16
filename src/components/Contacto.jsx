import { TextField, Button, Typography, Link, Container } from '@mui/material';
import { useState } from 'react';
import { sendEmail } from '../services/mail';


const Contacto = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = {
            name: nombre,
            email: email,
            subject: asunto,
            message: mensaje
        };
        //console.log(formData);
        let response = await sendEmail(formData);
        if (response.status === "ok") {
            alert('Mensaje enviado correctamente');
        } else {
            alert('Error al enviar el mensaje');
        }
    };

    return (
        <>
            <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Nombre" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    fullWidth 
                    margin="normal" 
                    required 
                />
                <TextField 
                    label="Correo Electrónico" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth 
                    margin="normal" 
                    required 
                />
                <TextField 
                    label="Asunto" 
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    fullWidth 
                    margin="normal" 
                    required 
                />
                <TextField 
                    label="Mensaje" 
                    multiline 
                    rows={4} 
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    fullWidth 
                    margin="normal" 
                    required 
                />

                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </form>
                <Typography variant="h6">Información de Contacto</Typography>
                <Typography>1234 Innovation Drive, Tech City, EC 12345</Typography>
                <Typography>Lunes a Viernes: 9:00 AM - 6:00 PM</Typography>
                <Typography>Teléfono: +123-456-7890</Typography>
                <Typography>Email: contact@encodeenterprise.com</Typography>

                <Typography variant="h6">Conéctate con Nosotros</Typography>
                <Link href="https://linkedin.com/in/encodeenterprise" target="_blank">LinkedIn</Link>
                <Link href="https://twitter.com/EncodeEnterprise" target="_blank">Twitter</Link>
                <Link href="https://facebook.com/EncodeEnterprise" target="_blank">Facebook</Link>
            </Container>
        </>
    );
}

export default Contacto