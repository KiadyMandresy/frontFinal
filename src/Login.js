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
                            <div className="row justify-content-center">
                            
                                    <div className="login-wrap p-4 p-md-5">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-user-o"></span>
                                </div>
                                <h3 className="text-center mb-4">Se connecter</h3>
                                        <form action="#" className="login-form">
                                    <div className="form-group">
                                        <Input type="text" className="form-control rounded-left" placeholder="votre nom ou votre mail" />
                                    </div>
                                <div className="form-group d-flex">
                                <Input type="password" className="form-control rounded-left" placeholder="votre mot de passe" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Connection</button>
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