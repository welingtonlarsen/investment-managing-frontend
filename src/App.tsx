import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/header';
import BrokerageNotesPage, { loader as brokerageNotesTableLoader } from './pages/brokerage-notes-table';
import BrokerageNoteFormPage, { loader as brokerageNoteFormLoader } from './pages/brokererage-note-form';

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#016F22',
    },
    secondary: {
      main: '#0c6924',
    },
  },
};

const theme = createTheme(themeOptions);

const LayoutPage = () => {
  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Header />
      </Box>
      <Box
        sx={{
          margin: {
            xs: 0,
            sm: 1,
            md: 2,
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutPage />
    </ThemeProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/table',
        element: <BrokerageNotesPage />,
        loader: brokerageNotesTableLoader,
      },
      {
        path: '/form',
        element: <BrokerageNoteFormPage />,
        loader: brokerageNoteFormLoader,
      },
    ],
  },
]);
