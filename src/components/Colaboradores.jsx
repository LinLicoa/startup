import { Box, Card, CardContent, CardMedia, Typography, List, ListItem } from '@mui/material';
import fotoLindsay from './../assets/fotoLindsay.png'
import fotoElias from './../assets/fotoElias.jpg'
import fotoRogger from './../assets/fotoRogger.jpeg'
import fotoAlison from './../assets/fotoAlison.png'
import fotoFreddy from './../assets/fotoFreddy.jpeg'

const colaboradores = [
    {
        nombre: "Lindsay Villegas",
        imagen: fotoLindsay,
        logros: ["CEO y Fundadora", "Lindsay lidera con una visión futurista y estratégica, destacando en proyectos de innovación tecnológica y desarrollo ágil."]
    },
    {
        nombre: "Elías Cando",
        imagen: fotoElias,
        logros: ["Director Técnico", "Elías combina sus estudios con su experiencia práctica, con un enfoque en tecnologías emergentes. "]
    },
    {
        nombre: "Rogger Párraga",
        imagen: fotoRogger,
        logros: ["Jefe de Desarrollo", "Estudiante con una sólida formación en algoritmos y estructuras de datos"]
    },
    {
        nombre: "Alison Chancay",
        imagen: fotoAlison, 
        logros: ["Líder de Proyectos", "Alison, combina sus estudios con la habilidad práctica para alinear equipos multidisciplinarios hacia metas comunes."]
    },
    {
        nombre: "Freddy Yagual",
        imagen: fotoFreddy,
        logros: [" Especialista en Cloud y Seguridad", "Freddy aporta soluciones innovadoras y seguras para la infraestructura en la nube de la empresa."]
    }

    
];

function Colaboradores() {
    return (
        <div id="Colaboradores">
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
    </div>
    )
}

export default Colaboradores