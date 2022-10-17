import { Button } from '@mui/material';
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from './Lista.style';
import {Professor} from "../../@types/professor";
import { FormatadorService } from '../../services/FormatadorService';

interface ListaProps {
  professores: Professor[],
  onSelect: (professor: Professor) => void
}

const Lista = (props: ListaProps) => {

    //CONTADORES HOOKS
    //const [contador, setContador] = useState(0);
    //const contador = contadorEstado(0);
    //const setContador = contadorEstado[1];
    //<div>Contador igual {contador}</div>
    //<button onClick={() = > setContador(contador+1)}>Somar +1</button>

    return(
      <div>
        

        {props.professores.length > 0 ? (
          <ListaStyled>
            {props.professores.map(professor => (
              <ItemLista key={professor.id}>
                <Foto src={professor.foto}></Foto>
                <Informacoes>
                  <Nome>{professor.nome}</Nome>
                  <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                  <Descricao>{FormatadorService.LimitarTexto(professor.descricao, 200)}</Descricao>
                  <Button onClick={() => props.onSelect(professor)} sx={{width:'70%'}}>Contratar aula com {professor.nome}</Button>
                </Informacoes>
              </ItemLista>
            ))}
      
          </ListaStyled>
        ) : (
              <ListaVazia>Nenhum item encontrado</ListaVazia>
                  
        )}
      </div>

    )


}

export default Lista;