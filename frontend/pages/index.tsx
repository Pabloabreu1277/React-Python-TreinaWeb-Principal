import { Box } from "@mui/material"
import type { NextPage } from "next"
import Lista from '../src/components/Lista/Lista'
//O que são e como criar o primeiro componente
//function Botao(props){
  //return <a href="#">{props.titulo}</a>;
//}

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id:1,
      nome:"Pablo Abreu",
      foto: "https://github.com/pabloabreu1277.png",
      descricao: "Engenheiro Mecânico, Tecnologo em Mecatrônica, Programador em VBA e Python.",
      valor_hora: 200
    },
    {
      id:2,
      nome:"Ana Vasconcelos",
      foto: "https://github.com/anavasconcelos52.png",
      descricao: "Engenheira Mecânica, Tecnica em Mecatrônica, Programadora de Python.",
      valor_hora: 200
    },
    {
      id:3,
      nome:"Professor 3",
      foto: "https://github.com/joaopereira.png",
      descricao: "Descrição do professor 3",
      valor_hora: 200
    },
    {
      id:4,
      nome:"Professor 4",
      foto: "https://github.com/marcoslacerda.png",
      descricao: "Descrição do professor 4",
      valor_hora: 200
    }

  ]

  return (
    <Box sx={{ backgroundcolor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
    //<Box sx={{ backgroundColor: 'Secondary.main'}}>
      //<Lista></Lista>
    //</Box>

      
    

  //O que são e como criar o primeiro componente
  //<div> 
    //<Botao titulo="Click" /><br />
    //<Botao titulo="Entrar" /><br />
    //<Botao titulo="Ver" /><br />
    //<Botao titulo="Ver mais" />
  //</div>


  )

}

export default Home
