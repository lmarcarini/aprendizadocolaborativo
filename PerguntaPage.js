import React, {useEffect, useState} from 'react'
import PerguntaCard from './PerguntaCard/PerguntaCard'
import RespostaCard from './RespostaCard/RespostaCard'
import Typography from '@material-ui/core/Typography'
import {useParams} from 'react-router-dom'
import RespostaForm from './RespostaForm/RespostaForm'

export default function PerguntaPage() {

    let {id} = useParams();

    const [pergunta,setPergunta]=useState({});
    const [respostas,setRespostas]=useState({});

    const Parse = require('parse/node');

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
      'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV', // This is your Javascript key
    );


    async function fetchData(){
        const Perguntas = Parse.Object.extend('Perguntas');
        const query = new Parse.Query(Perguntas);
        
        query.get(id)
        query.find().then((result) => {
              setPergunta(result);
          }, (error) => {
            console.error('Error while fetching Perguntas', error);
          })
    }

    async function fetchRespostas(){
        const Respostas = Parse.Object.extend('Respostas');
        const query = new Parse.Query(Respostas);
        query.limit(10)
        query.matches("perguntaId",id)
        query.find().then((results) => {
              setRespostas(results);
          }, (error) => {
            console.error('Error while fetching Respostas', error);
          })
    }

    useEffect(() => {
        fetchData()
        fetchRespostas()
    },[]);

    const listaRespostas = respostas.length>0? respostas.map(resposta=>
        <div key={resposta.id}>
            <RespostaCard email="resposta.attributes.HeaderText" comentario={resposta.attributes.resposta} createdAt={Math.floor((Date.now()-resposta.createdAt.getTime())/(1000*60*60))}/>
        </div>
        )
        :
        <div>
            <Typography variant="h6" align='left'>Ainda não foram encontradas respostas, que tal ser primeiro a responder?</Typography>
        </div>
        ;

    const cardpergunta = pergunta.length > 0 ?
        <div>
            <PerguntaCard id={id} cabecalho={pergunta[0].attributes.HeaderText} descricao={pergunta[0].attributes.Description} createdAt={Math.floor((Date.now()-pergunta[0].createdAt.getTime())/(1000*60*60))}/>
            <Typography variant="h5" align='center' >Respostas </Typography>
            {listaRespostas}
            <RespostaForm pergunta={id} refresh={()=>fetchRespostas()}/>
        </div>
        :
        <div>
            <Typography> Pergunta não encontrada. </Typography>
        </div>;

    return (
        <div>
            {
                cardpergunta
            }
            
        </div>
    )
}