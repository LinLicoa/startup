import { AppBar, Toolbar, Typography, Button, makeStyles } from '@mui/material';


const NavBar = () => {

  return (
    <div >
        <AppBar 
            position="static" 
            style={{
            backgroundColor: '#1a181c',
            color: 'white',
            borderRadius: '10px',
            position: 'fixed',
            zIndex: '1000',
            top: '0',
            }}
        >
        <Toolbar>
          <Typography variant="h6">
            Encode Enterprise
          </Typography>
          <Button 
            color="inherit"
            style={{
                marginLeft: 'auto',
            }}
            href='#Home'
          >Inicio</Button>
          <Button 
            color="inherit"
            href='#Servicios'
          >Servicios</Button>
          <Button 
            color="inherit"
            href='#Colaboradores'
          >Colaboradores</Button>
          <Button 
            color="inherit"
            href='#Contacto'
          >Contacto</Button>
          <Button 
            color="inherit"
            href='#Informacion'
          >Información</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
