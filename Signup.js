import React, {useRef} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    loginbutton: {
        backgroundColor: 'green'
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(3),
          width: '50ch',
        },
    }
}))

export default function Signup() {
    const classes=useStyles();

    const emailTextField=useRef();
    const senhaTextField=useRef();
    const confirmasenhaTextField=useRef();
    const usernameTextField=useRef();

    const Parse = require('parse/node');

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
      'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV', // This is your Javascript key
    );

    async function signUp(){
        if(senhaTextField.current.value!==confirmasenhaTextField.current.value){
            alert("Senhas não são iguais!")
            return
        }
        const user = new Parse.User()
        user.set('username', usernameTextField.current.value);
        user.set('email', emailTextField.current.value);
        user.set('password', senhaTextField.current.value);

        user.signUp().then((user) => {
            alert('Usuario inscrito com sucesso', user);
        }).catch(error => {
            console.error('Error while signing up user', error);
        });
    }

    return (
        <div>
            <form className={classes.root} onSubmit={(e)=>{e.preventDefault();signUp()}}>
                <div>
                    <TextField inputRef={usernameTextField} required id='username' label='Usuário' type='username' autoComplete="username"></TextField>
                </div>
                <div>
                    <TextField inputRef={emailTextField} required id='email' label='E-mail' type='email' autoComplete="email"></TextField>
                </div>
                <div>
                    <TextField inputRef={senhaTextField} required id='senha' label='Senha' type='password' autoComplete='new-password'></TextField>
                </div>
                <div>
                    <TextField inputRef={confirmasenhaTextField} required id='confirmasenha' label='Confirmar Senha' type='password' autoComplete='new-password'></TextField>
                </div>
                <div>
                    <Button variant="contained" color="primary" className={classes.loginbutton} type="submit">Criar conta</Button>
                </div>
            </form>
        </div>
    )
}