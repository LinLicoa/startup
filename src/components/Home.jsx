import './Home.css'
import { Box, Container, Typography } from '@mui/material';
import backgroundImage from './../assets/pexels-fauxels-3184424.jpg'; 

const Home = () => {

    return (
        <Box 
        sx={{
            position: 'relative',
            height: '100vh', // Ajusta la altura según tus necesidades
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        {/* Overlay con efecto multiply */}
        <Box 
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 128, 0.5)', // Color azul marino con opacidad
                mixBlendMode: 'multiply', // Efecto multiply
                zIndex: 1
            }}
        />

        {/* Contenido */}
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Encode Enterprise
            </Typography>
            <Typography variant="subtitle1">
                En Encode Enterprise, fusionamos innovación y experiencia para entregar soluciones de software sobresalientes...
            </Typography>
        </Container>

        {/* Imagen de fondo */}
        <Box 
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0
            }}
        />
    </Box>
    )
}

export default Home; 