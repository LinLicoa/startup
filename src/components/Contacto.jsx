import { TextField, Button, Container, CircularProgress, Snackbar, Alert } from '@mui/material';
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