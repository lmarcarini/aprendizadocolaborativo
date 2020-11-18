import React, {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import DisciplinaCard from '../DisciplinaCard/DisciplinaCard'

export default function DisciplinasList() {

    const [disciplinas,setDisciplinas]=useState({})

    const Parse = require('parse/node');

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
      'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV', // This is your Javascript key
    );


    async function fetchData(){
        const Disciplinas = Parse.Object.extend('Disciplinas');
        const query = new Parse.Query(Disciplinas);
        
        query.limit(10);

        await query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
              setDisciplinas(results);
          }, (error) => {
            console.error('Error while fetching Disciplinas', error);
          })
    }

    useEffect(() => {
        fetchData()
    },[]);

    const disciplinasDisplay= disciplinas.length >0 ? disciplinas.map (disciplina=>(
        <Grid item sm={12} md={3} key={disciplina.id}>
            <DisciplinaCard disciplina={disciplina.attributes.Nome} coddisciplina={disciplina.attributes.URLid}/>
        </Grid>
    )):
    <div></div>

    return (
        <div>

            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
                {disciplinasDisplay}
             </Grid>
        </div>
    )
}