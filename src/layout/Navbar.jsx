import { AppBar, Toolbar, Typography, Button, makeStyles } from '@mui/material';
import encodeLogo from './../assets/encode-logo.svg';

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
        <Toolbar
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '25%',
          }}
        >
          <img src={encodeLogo} alt="Encode Enterprise" style={{ height: '30px', marginRight: '10px' }} />
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
