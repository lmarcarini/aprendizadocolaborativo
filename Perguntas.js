import React, {useEffect, useState} from 'react'
import PerguntaCard from './PerguntaCard/PerguntaCard'
import PerguntaForm from './PerguntaForm/PerguntaForm'
import {useParams} from 'react-router-dom'

export default function Perguntas() {
    let {disciplina} = useParams();

    const [perguntas,setPerguntas]=useState({});

    const Parse = require('parse/node');

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
      'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV', // This is your Javascript key
    );


    async function fetchData(){
        const Disciplinas = Parse.Object.extend("Disciplinas");
        const innerquery = new Parse.Query(Disciplinas);
        innerquery.equalTo('URLid', disciplina)
        const Perguntas = Parse.Object.extend('Perguntas');
        const query = new Parse.Query(Perguntas);
        query.limit(10);
        query.matchesQuery("disciplinaId",innerquery)
        query.find().then((results) => {
              setPerguntas(results);
          }, (error) => {
            console.error('Error while fetching Perguntas', error);
          })
    }

    useEffect(() => {
        fetchData()
    },[]);

    const listaPerguntas= perguntas.length >0 ? perguntas.map(pergunta=>(
        <div key={pergunta.id}>
            <PerguntaCard id={pergunta.id} cabecalho={pergunta.attributes.HeaderText} descricao={pergunta.attributes.Description} createdAt={Math.floor((Date.now()-pergunta.createdAt.getTime())/(1000*60*60))}/>
        </div>)):
        <div></div>

    return (
        <div>
            {listaPerguntas}
            <PerguntaForm disciplina={disciplina} refresh={()=>fetchData()}/>
        </div>
    )
}
