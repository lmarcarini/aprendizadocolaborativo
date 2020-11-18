import React, {useEffect, useState} from 'react'

export default function Test() {

    const [perguntas,setPerguntas]=useState({});

    const Parse = require('parse/node');

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
      'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV', // This is your Javascript key
    );


    async function fetchData(){
        const Perguntas = Parse.Object.extend('Perguntas');
        const query = new Parse.Query(Perguntas);
        query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
              setPerguntas(results)
          }, (error) => {
            console.error('Error while fetching Perguntas', error);
          })
    }

    useEffect(() => {
        fetchData()
    },[]);


    /*useEffect(()=>{
        const Perguntas = Parse.Object.extend('Perguntas');
        const query = new Parse.Query(Perguntas);
        query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
              setPerguntas(results)
          }, (error) => {
            console.error('Error while fetching Perguntas', error);
          })
        },[]
    )*/

    const displayperguntas = perguntas.length>0 ? perguntas.map(pergunta=>(
        <div key={pergunta.id}>
            Teste id= {pergunta.id}
        </div>
        )):
        <div>Pergunta não encontrada</div>

    return (
        <div>
            {displayperguntas}
        </div>
    )
}
