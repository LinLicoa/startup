import { TextField, Button, Typography, Link, Container, CircularProgress, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import { sendEmail } from '../services/mail';


const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [sending, setSending] = useState(false);
    const [sended, setSended] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault();
        setSending(true);
        const formData = {
            name: nombre,
            email: email,
            subject: asunto,
            message: mensaje
        };

        //console.log(formData);
        let response = await sendEmail(formData);
        if (response.status === "ok") {
            setNombre('');
            setEmail('');
            setAsunto('');
            setMensaje('');
            setSending(false);
            setSended(true);
        } else {
            setNombre('');
            setEmail('');
            setAsunto('');
            setMensaje('');
            setSending(false);
            console.log(response);
        }
    };

    return (
        <div id='Contacto'>
            <Container maxWidth="sm" style={{ backgroundColor: '#1a1b1c', color: 'white', padding: '20px', borderRadius: '10px' }}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Nombre" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    fullWidth 
                    margin="normal" 
                    autoComplete='off'
                    required 
                    InputLabelProps={{
                        style: { color: '#fff', borderColor: '#fff'},
                    }}
                    InputProps={{
                        style: { color: 'white', borderColor: 'white' },
                    }}
                />
                <TextField 
                    label="Correo Electrónico" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth 
                    margin="normal" 
                    autoComplete='off'
                    required 
                    InputLabelProps={{
                        style: { color: '#fff', borderColor: '#fff'},
                    }}
                    InputProps={{
                        style: { color: 'white', borderColor: 'white' },
                    }}
                />
                <TextField 
                    label="Asunto" 
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    fullWidth 
                    margin="normal" 
                    autoComplete='off'
                    required 
                    InputLabelProps={{
                        style: { color: '#fff', borderColor: '#fff'},
                    }}
                    InputProps={{
                        style: { color: 'white', borderColor: 'white' },
                    }}
                />
                <TextField 
                    label="Mensaje" 
                    multiline 
                    rows={4} 
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    fullWidth 
                    margin="normal" 
                    autoComplete='off'
                    required 
                    InputLabelProps={{
                        style: { color: '#fff', borderColor: '#fff'},
                    }}
                    InputProps={{
                        style: { color: 'white', borderColor: 'white' },
                    }}
                />

                <Button type="submit" variant="contained" color="primary" disabled={sending} style={{display: sended ? 'none' : 'inline-flex'}}>
                {sending ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CircularProgress size={24} style={{ marginRight: '10px' }} />
                    Enviando...
                    </div>
                ) : (
                    "Enviar"
                )}
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
            <Snackbar
                open={sended}
                autoHideDuration={3000}
                onClose={() => setSended(false)}
            >
                <Alert onClose={()=> setSended(false)} severity="success" sx={{ width: '100%' }}>
                    Mensaje enviado correctamente!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Contacto