import { useNavigate, useParams } from 'react-router-dom';

import { FerramentasDeDetalhes } from '../../../shared/components';
import { LayoutBaseDePagina } from '../../../shared/layouts';



export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  return (
    <LayoutBaseDePagina
      titulo='Detalhe de Pessoa'
      barraDeFerramentas={
        <FerramentasDeDetalhes
          textoBotaoNovo='Nova'
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}


          aoClicarEmSalvar={() => { }}
          aoClicarEmSalvarEFechar={() => { }}
          aoClicarEmApagar={() => { }}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmVoltar={() => navigate('/pessoas')}

        />
      }
    >
      <p>DetalheDePessoas {id}</p>
    </LayoutBaseDePagina>

  );
};