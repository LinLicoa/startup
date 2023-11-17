import { Container, Typography, Link } from "@mui/material"

const Informacion = () => {
    
    return(
        <div id="Informacion">
            <Container maxWidth="sm" style={{ backgroundColor: '#1a1b1c', color: 'white', padding: '20px', borderRadius: '10px' }}>
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
        </div>
    )
}

export default Informacion