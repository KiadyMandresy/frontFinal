import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form } from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.deconnection=this.deconnection.bind(this);
        this.state={
            region:"",
            accueil:""
        };
    }
    async deconnection(event)
    {
        
        const options={
            method: "DELETE"
        };

         await fetch("http://test-rojo.herokuapp.com/tokenFront/"+localStorage.getItem("token"),options).then((res)=>{
           
                if(res.ok)
                {
                    return res.json();
                    
                }
                throw res;
            })
            .then((data)=>{
                console.log(localStorage.getItem("token"));
        localStorage.removeItem("token");
        console.log(localStorage.getItem("token")+"soaaaa");
            });
           

        
    }
    
    componentDidMount(){
        fetch("http://test-rojo.herokuapp.com/token/"+localStorage.getItem("token")).then((res)=>{
            if(res.ok)
            {
                return res.json();
            }
            throw res;
        })
        .then((data)=>{
            if(data.erreur==0)
            {
                this.setState({region: data.region});
                const ac="/Accueil/"+data.chef.id;
                this.setState({accueil:ac});
            }
            else if(data.erreur==1)
            {
                localStorage.removeItem("token");
                this.props.history.push("/login");
            }
        });
    }
    
    render()
  
    {
        return (
                <header id="header" className="d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                
                        <div id="logo" className="me-auto">
                            <a href="index.html"><img src="/../assets/img/logo-nav.png" alt=""></img></a>
                        
                            <h1><a href="#Signalement">S I G N A L E M E N T  <span>   Region {this.state.region}</span></a></h1>
                        </div>
                       <div id="hed">
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                            <li><Link className="nav-link scrollto active" to={this.state.accueil} >Accueil</Link></li>
                            <li className="dropdown"><a ><span>Profil</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                <li><Link>Rakoto</Link></li>
                                <li><Link onClick={this.deconnection} to="/login">Deconnection</Link></li>
                             
                                </ul>
                            </li>
                           
                            </ul>
                        </nav>
                        </div>
                    </div>
                </header>

            );
        }
    }
export default Header;