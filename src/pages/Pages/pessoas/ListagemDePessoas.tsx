import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

// Components
import { FerramentasDaListagem } from '../../../shared/components';
import { LayoutBaseDePagina } from '../../../shared/layouts';
import { PessoasService } from '../../../shared/services/api/pessoas/PessoasService';

// Libs
//import { toast } from 'react-toastify';


export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {

    PessoasService.getAll(1, busca)
      //Quando o getAll retornar faça alguma coisa
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          console.log(result);
        }
      });
  }, [busca]);


  return (
    <LayoutBaseDePagina
      titulo='Listagem de pessoas'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoDaBusca={busca}
          textoBotaoNovo='Nova'
          aoMudarTextDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      }
    >

    </LayoutBaseDePagina>
  );
};






// 1º LayoutBaseDePagina 

// 2º  barraDeFerramentas