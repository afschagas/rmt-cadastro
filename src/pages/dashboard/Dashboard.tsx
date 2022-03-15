import { FerramentasDeDetalhes } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

import { ResultsTable } from '../../shared/components';



export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo='Página inicial'
      barraDeFerramentas={(
        <FerramentasDeDetalhes mostrarBotaoSalvarEFechar />
      )}>

      Testando
      <ResultsTable />

    </LayoutBaseDePagina>


  );
};