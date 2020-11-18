export function verifyLogin(callback){
    const Parse = require('parse/node');

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
      'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV'
    );
    
    const user = Parse.User.become(localStorage.getItem("TOKEN"))
    .then((user)=>{
        console.log("logado")
        callback(true)
    },(error)=>{
        console.log("não logado")
        callback(false)
    }
    )
}

export async function logOut(callback){
    const Parse = require('parse/node');

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
      'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV' // This is your Javascript key
    );
    const user = Parse.User.become(localStorage.getItem("TOKEN"))
    if(user){
        Parse.User.logOut()
        localStorage.setItem("TOKEN","")
        console.log("Desconectado")
        callback(false)
    }else{
        console.log("Já está desconectado")
    }
}

export async function logIn(username, senha, callback){
    const Parse = require('parse/node');

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
      'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV' // This is your Javascript key
    );
    // Pass the username and password to logIn function
    Parse.User.logIn(username,senha).then((user) => {
        console.log('Logged in user', user);
        localStorage.setItem("TOKEN",user.get("sessionToken"));
        localStorage.setItem("USER",JSON.stringify(user));
        callback(true)
    }).catch(error => {
        console.error('Error while logging in user', error);
        callback(false)
    })
}