import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { Apiservice } from "../../services/ApiService";



export function useIndex(){
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null);
    const [mensagem, setMensagem] = useState('');

    
    useEffect(() => {
      Apiservice.get('/professores').then((resposta) =>{
        setListaProfessores(resposta.data)
      })

    },[]);

    useEffect(() => {
      limparFormulario();
    },[professorSelecionado])

    function marcarAula(){
      if (professorSelecionado !== null){
        if (validarDadosAula()){
          Apiservice.post('/professores/' + professorSelecionado.id + '/aulas',{
            nome,
            email
          }).then(() => {
              setProfessorSelecionado(null);
              setMensagem('Cadastro realizado com sucesso');
          }).catch((error) => {
            setMensagem(error.response?.data.message);
          });
        } else {
          setMensagem('Preencha os dados corretamente');
        }

      }

    }

    function validarDadosAula(){
      return nome.length > 0 && email.length > 0;
    }

    function limparFormulario(){
      setNome('');
      setEmail('');
    }


    return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        professorSelecionado,
        setProfessorSelecionado,
        marcarAula,
        mensagem,
        setMensagem

    }



}