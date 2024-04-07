import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// ** components
import App from './App.tsx';

// ** MUI
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { green, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    success: green,
    error: red,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
