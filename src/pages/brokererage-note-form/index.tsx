import BrokerageNoteForm from '../../components/brokerage-note-form';
import { TBrokerageNote } from '../../hooks/useBrokerageNoteForm';
import { useNavigate } from 'react-router-dom';
import { HttpStatusCode, isAxiosError } from 'axios';
import { getAllIgnoringPagination } from '../../service/api-stock';
import { createNote, updateNote } from '../../service/api-brokerage-note';

const BrokerageNoteFormPage = () => {
  const navigate = useNavigate();

  async function submitCallback(formValues: TBrokerageNote): Promise<void> {
    try {
      if (formValues.id) {
        await updateNote(formValues.id, formValues);
        navigate('/table');
      } else {
        await createNote(formValues);
        alert('Nota cadastrada com sucesso.');
        navigate('/table');
      }
    } catch (e) {
      if (isAxiosError(e) && e.response?.status === HttpStatusCode.BadRequest) {
        alert('Verifique se todos os campos estão informados corretamente!');
      } else {
        alert('Erro ao cadastrar ou atualizazr a nota! Comunique o suporte e tente novamente mais tarde.');
      }
    }
  }

  return <BrokerageNoteForm submitCallback={submitCallback} />;
};

export async function loader() {
  const stocks = await getAllIgnoringPagination();
  return { stocks };
}

export default BrokerageNoteFormPage;
