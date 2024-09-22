// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e40af', // Azul oscuro
    },
    secondary: {
      main: '#f43f5e', // Rojo
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
