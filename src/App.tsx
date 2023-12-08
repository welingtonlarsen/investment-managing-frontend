import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material';
import { createBrowserRouter } from 'react-router-dom';
import BrokerageNotesPage, { loader as brokerageNotesTableLoader } from './pages/brokerage-notes-table';
import BrokerageNoteFormPage, { loader as brokerageNoteFormLoader } from './pages/brokererage-note-form';
import LayoutPage from './components/layout-page';
import Dashboard from './pages/dashboard';
import ReportsPage from './pages/reports';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#89d4a5',
    },
    secondary: {
      main: '#fdfffe',
    },
  },
};

const theme = createTheme(themeOptions);

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
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/negociacoes',
        element: <BrokerageNotesPage />,
        loader: brokerageNotesTableLoader,
      },
      {
        path: '/negociacoes/create',
        element: <BrokerageNoteFormPage />,
        loader: brokerageNoteFormLoader,
      },
      {
        path: 'relatorios',
        element: <ReportsPage />,
      },
    ],
  },
]);
