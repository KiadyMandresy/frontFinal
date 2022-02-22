
import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Header from './Header';
import Accueil from './Accueil';

import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';

class App  extends Component {
  render(){
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Login} />
        <Route path='/header' exact={true} component={Header} />
        <Route path='/login' exact={true} component={Login} />
        <Route path='/Accueil' exact={true} component={Accueil} />
        
      </Switch>
    </Router>
  );
  }
}

export default App;
