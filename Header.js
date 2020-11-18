import React, {useEffect, useState} from 'react'
import './App.css';
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import MenuIcon from "@material-ui/icons/Menu"
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from "@material-ui/icons/Search"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import {verifyLogin} from './auth'
import {logOut} from './auth'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    loginbutton: {
        backgroundColor: 'green'
    }
})

const useStyleSearchBar=makeStyles({
    root: {
        "& .MuiOutlinedInput-root": {
            color: 'white',
          "& fieldset": {
            borderColor: "white" // default
          },
          "&.Mui-focused fieldset": {
            border: "2px solid white" // customized
          }
        },
        "& .MuiFormLabel-root": {
            color: 'white'
        }
      }
})


export default function Header() {
    const classes=useStyles();
    const searchbar=useStyleSearchBar();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout=()=>{
        console.log("logtout?")
        logOut(setLogado)
        setAnchorEl(null);
    }

    const [logado,setLogado]=useState(false)

    useEffect(() => {
        verifyLogin(setLogado)
    }, [])

    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    >
                        <Grid item xs={8}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="flex-start"
                            >
                                <Grid item xs={4}>
                                    <IconButton  edge="start" color="inherit" aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4}>
                                    <Link href="/aprendizadocolaborativo/" style={{color:"white"}} variant='h6'>AprendeAe</Link>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField id="outlined-basic" label="Busca" variant="outlined" className={searchbar.root} InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                        ),
                                    }}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            {logado?
                                <div>
                                    <Avatar  aria-controls="avatar-menu" aria-haspopup="true" onClick={handleClick}>L</Avatar>
                                    <Menu
                                        id="avatar-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Perfil</MenuItem>
                                        <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </div>
                            :
                                <ButtonGroup>
                                    <Button href="/aprendizadocolaborativo/#/login" variant="contained" color="primary" className={classes.loginbutton}>Login</Button>
                                </ButtonGroup>
                            }
                            
                        </Grid>
                    </Grid>                    
                </ToolBar>
            </AppBar>
        </div>
    )
}
