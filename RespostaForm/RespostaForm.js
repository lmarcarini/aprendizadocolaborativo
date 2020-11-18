import React, {useRef} from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fab: {
    position: 'fixed',
    bottom: '5%',//theme.spacing(5),
    right: '5%'//theme.spacing(5),
  },
  loginbutton: {
    backgroundColor: 'green'
    },
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '80%',
        },
    }
}));

export default function RespostaForm(props) {

    const respostaTextField=useRef();

    const Parse = require('parse/node');

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
      'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV', // This is your Javascript key
      localStorage.getItem("TOKEN")
    );

    async function sendResposta(){
        const Respostas = Parse.Object.extend('Respostas');
        const respostas = new Respostas();
        
        respostas.set('resposta', respostaTextField.current.value);

        Parse.User.become(localStorage.getItem("TOKEN"))
        .then( (usuario)=>{
            respostas.set('usuarioId', usuario);
          
            const Perguntas = Parse.Object.extend('Perguntas');
            const perguntasquery = new Parse.Query(Perguntas);
          
            perguntasquery.equalTo('objectId',props.pergunta);

            perguntasquery.first().then((pergunta)=>{
          
                respostas.set('perguntaId', pergunta);
                respostas.save().then(
                (result) => {
                    alert('Resposta criada', result);
                    handleClose()
                    props.refresh()
                },
                (error) => {
                    console.error('Erro enquanto respondia: ', error);
            }
          );
          }
          )
        }
        )
    }

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const body = (
    <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Ajude outros com a sua resposta:</h2>
        <form className={classes.root} onSubmit={(e)=>{e.preventDefault();sendResposta()}}>
            <div>
                <TextField inputRef={respostaTextField} label="Resposta"  variant="outlined" multiline={true}></TextField>
            </div>
            <Button className={classes.loginbutton} variant="contained" color="primary" type="submit">Responder</Button>
        </form>
    </div>
    );

  return (
    <div>
      <Fab className={classes.fab} color="primary" aria-label="add" type="button" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

RespostaForm.propTypes = {
    resposta: PropTypes.string
}