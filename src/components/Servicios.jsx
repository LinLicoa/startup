import { Box, Card, CardContent, Typography } from '@mui/material';
import '@fontsource/poppins'; // Asegúrate de haber instalado fontsource-poppins

const servicios = [
    {
        titulo: "Desarrollo de Aplicaciones Móviles",
        descripcion: "Creamos aplicaciones móviles intuitivas y de alto rendimiento para plataformas iOS y Android, asegurando una experiencia de usuario excepcional y una integración perfecta con servicios de back-end."
    },
    {
        titulo: "Soluciones de Software Empresarial",
        descripcion: "Desarrollamos sistemas de software personalizados, desde CRM hasta soluciones ERP, que se integran sin problemas en su entorno de trabajo existente, aumentando la productividad y optimizando la gestión de datos."
    },
    {
        titulo: "Cloud Computing y SaaS",
        descripcion: "Facilitamos la transición de su negocio al cloud, ofreciendo soluciones de Software como Servicio (SaaS) que mejoran la escalabilidad, la seguridad y la accesibilidad de sus datos y aplicaciones."
    }
];

function Servicios() {
    return (
        <Box sx={{ textAlign: 'center', marginTop: 4, marginBottom: 4 }}>
            <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold', marginBottom: 3, color: 'white' }}>
                Servicios que Ofrecemos
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {servicios.map((servicio, index) => (
                    <Card key={index} sx={{ width: '80%', maxWidth: 600, backgroundColor: '#1a181c', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.3)', marginBottom: 2 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white' }}>
                                {servicio.titulo}
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>
                                {servicio.descripcion}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Servicios