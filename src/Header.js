import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form } from 'reactstrap';

class Header extends Component{
    render()
    {
        return (
            <div>
               <div id="headerAccueil">
                    <center>  
                        <h1 class="sign">Signalement</h1> 
                        <p class="reg">Region SAVA</p>    
                    </center> 
                </div> 
            </div>
            );
        }
    }
export default Header;