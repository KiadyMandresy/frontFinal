import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form ,Alert } from 'reactstrap';
import Popup from 'react-popup';
class Login extends Component{  
    constructor(props){
        super(props);
        this.onChangeMail=this.onChangeMail.bind(this);
        this.onChangeMdp=this.onChangeMdp.bind(this);
        this.loginFonction=this.loginFonction.bind(this);
        this.state={
            mail:"",
            mdp:"",
            erreur:""
        };
    }
    onChangeMail(e)
    {
        this.setState({
            mail: e.target.value
        });
    }
    onChangeMdp(e)
    {
        this.setState({
            mdp: e.target.value
        });
    }
    async loginFonction(event)
    {
        fetch("http://test-rojo.herokuapp.com/chefRegions/"+this.state.mail+"/"+this.state.mdp).then((res)=>{
            if(res.ok){
                return res.json();
                console.log(res);
            }
            throw res;
        })
        .then((data)=>{
            if(data.valide==true)
            {
                
                localStorage.setItem("token",data.token);
                this.props.history.push("/Accueil/"+data.chef.idReg);
            }
            else if(data.valide==false)
            {
                this.setState({
                    erreur:data.erreur});
                    this.props.Popup.alert(data.erreur);
            }
        })
    }
    render()
    {
        return (
            <div>
            <div id="headerAccueil"></div>
            <div id="main">
              <div id="article"></div>
              <div id="nav">
              </div>
              <div id="aside">
                <div class="row justify-content-center" >
                  
                        <div class="login-wrap p-4 p-md-5">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-user-o"></span>
                    </div>
                    <h3 class="text-center mb-4">Se connecter</h3>
                          
                        <div class="form-group">
                            <Input type="text" class="form-control rounded-left" placeholder="votre nom ou votre mail" value={this.state.mail} onChange={this.onChangeMail} />
                        </div>
                    <div class="form-group d-flex">
                    <Input type="password" class="form-control rounded-left" value={this.state.mdp} onChange={this.onChangeMdp} placeholder="votre mot de passe" />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="form-control btn btn-primary rounded submit px-3" onClick={this.loginFonction}>Connection</button>
                    </div>
                    <center><p className='erreur'> {this.state.erreur} </p> </center>
                
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