import { Box, Card, CardContent, CardMedia, Typography, List, ListItem } from '@mui/material';

const colaboradores = [
    {
        nombre: "Lindsay Villegas",
        imagen: "./src/assets/fotoLindsay.png", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    },
    {
        nombre: "Elías Cando",
        imagen: "./src/assets/fotoElias.jpg", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    },
    {
        nombre: "Rogger Párraga",
        imagen: "./src/assets/fotoRogger.jpeg", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    },
    {
        nombre: "Alison Chancay",
        imagen: "./src/assets/fotoAlison.png", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    },
    {
        nombre: "Freddy Yagual",
        imagen: "./src/assets/fotoFreddy.jpeg", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    }

    
];

function Colaboradores() {
    return (
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold', marginBottom: 5, color: 'white' }}> 
            Colaboradores
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            {colaboradores.map((colaborador, index) => (
                <Card key={index} sx={{ 
                    flex: '1 0 18%', 
                    maxWidth: 240, 
                    backgroundColor: '#1a181c', 
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.3)',
                    marginBottom: 2 
                }}>
                    <CardMedia
                        component="img"
                        image={colaborador.imagen}
                        alt={`Imagen de ${colaborador.nombre}`}
                        sx={{ 
                            height: 300,
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: '4px'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                background: 'linear-gradient(to right, #007bff, #ff69b4)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent'
                            }}
                        >
                            {colaborador.nombre}
                        </Typography>
                        <List>
                            {colaborador.logros.map((logro, idx) => (
                                <ListItem key={idx} sx={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>
                                    {logro}
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            ))}
        </Box>
    </Box>
    )
}

export default Colaboradores