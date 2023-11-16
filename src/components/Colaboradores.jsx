import { Box, Card, CardContent, CardMedia, Typography, List, ListItem } from '@mui/material';

const colaboradores = [
    {
        nombre: "Lindsay Villegas",
        imagen: "/ruta/a/lindsay.jpg", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    },
    {
        nombre: "Elías Cando",
        imagen: "/ruta/a/elias.jpg", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    },
    {
        nombre: "Lindsay Villegas",
        imagen: "/ruta/a/lindsay.jpg", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    },
    {
        nombre: "Elías Cando",
        imagen: "/ruta/a/elias.jpg", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    },
    {
        nombre: "Lindsay Villegas",
        imagen: "/ruta/a/lindsay.jpg", // Cambia esto por la ruta real de la imagen
        logros: ["Logro 1", "Logro 2", "Logro 3"]
    }
];

function Colaboradores() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            {/* Fila superior */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                {colaboradores.slice(0, 3).map((colaborador, index) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={colaborador.imagen}
                            alt={`Imagen de ${colaborador.nombre}`}
                            sx={{ borderRadius: '50%' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {colaborador.nombre}
                            </Typography>
                            <List>
                                {colaborador.logros.map((logro, idx) => (
                                    <ListItem key={idx}>
                                        {logro}
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Fila inferior */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                {colaboradores.slice(3).map((colaborador, index) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={colaborador.imagen}
                            alt={`Imagen de ${colaborador.nombre}`}
                            sx={{ borderRadius: '50%' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {colaborador.nombre}
                            </Typography>
                            <List>
                                {colaborador.logros.map((logro, idx) => (
                                    <ListItem key={idx}>
                                        {logro}
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Colaboradores