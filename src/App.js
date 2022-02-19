
import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';

class App  extends Component {
  render(){
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Login} />

      </Switch>
    </Router>
  );
  }
}

export default App;
