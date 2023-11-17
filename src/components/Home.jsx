import { Box, Container, Typography, Button } from '@mui/material';
import backgroundImage from './../assets/pexels-fauxels-3184424.jpg'; 

const Home = () => {

    return (
        <Box 
            sx={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {/* Overlay muy oscuro (azul casi negro) */}
            <Box 
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 50, 0.75)', // Azul muy oscuro, casi negro
                    mixBlendMode: 'multiply',
                    zIndex: 1
                }}
            />

            {/* Contenido */}
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <Typography 
                    variant="h2" 
                    component="h1" 
                    gutterBottom
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        background: 'linear-gradient(to right, #007bff, #ff69b4)', // Degradado de azul a rosa
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent'
                    }}
                >
                    Encode Enterprise
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        color: 'white' // Asegurando que el texto sea blanco
                    }}
                >
                    Encode Enterprise es una empresa de desarrollo de software dedicada a ofrecer soluciones personalizadas que impulsen la innovación y la eficiencia en su organización. 
                        </Typography>

            {/* Botón de contacto */}
            <Button 
                    variant="contained" 
                    sx={{
                        mt: 4,
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        borderRadius: '15px',
                        background: 'linear-gradient(45deg, #007bff, #ff69b4)',
                        color: 'black',
                        padding: '10px 30px',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #0062cc, #ff1493)',
                        },
                    }}
                >
                    Contáctanos
                </Button>
        
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