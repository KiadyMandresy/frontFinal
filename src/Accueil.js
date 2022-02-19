import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
class Accueil extends Component{
    render()
    {
        return (
            <div>
                <Header/>
                <div id="search">
                    
                </div>
                <div id="main1">
                    <div id="tab">
                        <p>tab</p>
                    </div>
                    <div id="espace">
                        <p>map</p>
                    </div>
                    <div id="map">
                        <p>map</p>
                    </div>
                </div>
                <Footer/>
            </div>
            );
        }
    }
    export default Accueil;