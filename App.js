import './App.css';
import './Header'
import Header from './Header';
import Main from './Main';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import Perguntas from './Perguntas';
import PerguntaPage from './PerguntaPage';
import Signup from './Signup'
import Test from './Test'

function App() {
  const Parse = require('parse/node');

  Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  Parse.initialize(
    'CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', // This is your Application ID
    'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV' // This is your Javascript key
  );

  return (
    <div className="App">
      <Router basename='/'>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/perguntasde:disciplina">
            <Perguntas/>
          </Route>
          <Route path="/perguntaid:id">
            <PerguntaPage/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/test">
            <Test/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
