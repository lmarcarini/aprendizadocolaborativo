import React, {useRef} from 'react'
import {logIn} from './auth'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom";


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

export default function Login() {
    const classes=useStyles();
    const history=useHistory();

    const userTextField=useRef();
    const senhaTextField=useRef();

   const afterLogin=(success)=>{
       console.log("Login successeful")
       history.replace('/')
   }

   const attemptLogin=()=>{
       logIn(userTextField.current.value,senhaTextField.current.value,afterLogin)
   }


    return (
        <div>
            <form className={classes.root} onSubmit={(e)=>{e.preventDefault();attemptLogin()}}>
                <div>
                    <TextField inputRef={userTextField} required id='username' label='Username' type='username' autoComplete="username"></TextField>
                </div>
                <div>
                    <TextField inputRef={senhaTextField} required id='standard-required' label='Senha' type='password' autoComplete='current-password'></TextField>
                </div>
                <div>
                    <Button variant="contained" color="primary" className={classes.loginbutton} type='submit'>Login</Button>
                </div>
                <Link href='/aprendizadocolaborativo/#/signup'>Não possui conta. Crie a sua aqui.</Link>
            </form>
        </div>
    )
}
