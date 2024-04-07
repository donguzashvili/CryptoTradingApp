// ** MUI
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const linkStyles = {
  color: '#ffffff',
  textDecoration: 'none',
};

export default function Header() {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Link to='/' style={linkStyles}>
            <Typography variant='h6' component='div'>
              Table
            </Typography>
          </Link>
          <Link to='/convert' style={linkStyles}>
            <Typography variant='h6' component='div'>
              Convert
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
