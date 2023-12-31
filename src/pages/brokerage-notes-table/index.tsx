import BrokerageNotesTable from '../../components/brokerage-notes-table';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAllSummariesIgnoringPagination } from '../../service/api-summaries';

export default function BrokerageNotesPage() {
  const navigate = useNavigate();

  const createNote = () => {
    navigate('/negociacoes/create');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Fab onClick={createNote} sx={{ mb: 3 }} size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <BrokerageNotesTable />
    </Box>
  );
}

export async function loader() {
  const brokerageNotesSummaries = await getAllSummariesIgnoringPagination();
  return {
    brokerageNotesSummaries,
  };
}
