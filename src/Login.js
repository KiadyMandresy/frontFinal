import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form } from 'reactstrap';

class Login extends Component{
    render()
    {
        return (
            <div>
            <div id="header"></div>
            <div id="main">
              <div id="article"></div>
              <div id="nav">
              </div>
              <div id="aside">
                <div class="row justify-content-center">
                  
                        <div class="login-wrap p-4 p-md-5">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-user-o"></span>
                    </div>
                    <h3 class="text-center mb-4">Se connecter</h3>
                            <form action="#" class="login-form">
                        <div class="form-group">
                            <Input type="text" class="form-control rounded-left" placeholder="votre nom ou votre mail" />
                        </div>
                    <div class="form-group d-flex">
                    <Input type="password" class="form-control rounded-left" placeholder="votre mot de passe" />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="form-control btn btn-primary rounded submit px-3">Connection</button>
                    </div>
                
                </form>
                </div>
                    
                </div>
              </div>
              <div id="quatre"> </div>
            </div>
            <div id="footer"></div>
           
            </div>
        );
    }
}
export default Login;