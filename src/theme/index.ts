import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    divider: '#E8EAEB',
    primary: {
      main: '#0076DC',
    },
    secondary: {
      main: '#263A53',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#333333',
      secondary: '#999999',
    },
    background: {
      default: '#F3F5F7',
    },
  },
  typography: {
    fontFamily: 'Public Sans, Inter, sans-serif',
    fontSize: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '14px', // Đặt font size cơ bản của trình duyệt
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          minHeight: 44,
          color: 'white',
          textTransform: 'capitalize',
          '&.active, :hover': {
            color: '#0076DC',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          th: {
            fontWeight: 600,
          },
        },
      },
    },
  },
});

export default theme;
