// ** MUI
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const linkStyles = {
  color: '#ffffff',
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
          <Link href='/' sx={linkStyles} underline='none'>
            <Typography variant='h6' component='div'>
              Table
            </Typography>
          </Link>
          <Link href='/convert' sx={linkStyles} underline='none'>
            <Typography variant='h6' component='div'>
              Convert
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
