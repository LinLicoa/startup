import { Container, Typography, Link } from "@mui/material"
import instagram from "./../assets/instagram.svg"
import x from "./../assets/x.svg"

const Informacion = () => {
    
    return(
        <div id="Informacion">
            <br/>
            <Container maxWidth="sm" style={{ backgroundColor: '#1a1b1c', color: 'white', padding: '20px', borderRadius: '10px' }}>
                <Typography variant="h6">Información de Contacto</Typography>
                <Typography>Avenida Siempre Viva 742</Typography>
                <Typography>Lunes a Viernes: 9:00 AM - 6:00 PM</Typography>
                <Typography>Teléfono: +123-456-7890</Typography>
                <Typography>Email: contact@encodeenterprise.com</Typography>

                <Typography variant="h6">Conéctate con Nosotros</Typography>
                <Link href="https://twitter.com/encodenterprise" target="_blank">
                    <img 
                        src={x}
                        width={30}
                    />
                </Link>
                <Link href="https://instagram.com/encode_enterprise" target="_blank">
                    <img 
                        src={instagram}
                        width={30}
                    />
                </Link>
            </Container>
        </div>
    )
}

export default Informacion