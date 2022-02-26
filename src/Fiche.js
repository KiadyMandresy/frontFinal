import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form } from 'reactstrap';
import { MapContainer,TileLayer,ZoomControl,Marker,Popup} from 'react-leaflet';
import Header from './Header';
import Footer from './Footer';
import Leaflet from './Leaflet';
import $ from 'jquery'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Fiche extends Component{

    render()
    {
       
        return (
            <div>
                <Header/>
                    <div id="fiche_search">

                    </div>
                    <div id="fiche_main">
                        <div id="fiche_vide1">   
                        
                        </div>
                        <div id="fiche_tab">   
                            <Carousel>
                                <div>
                                    <img src="assets/img/District.png" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src="assets/img/images.jpg" />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>
                                    <img src="assets/img/madagascar.jpg" />
                                    <p className="legend">Legend 3</p>
                                </div>
                             </Carousel>
                        </div>
                        <div id="fiche_espace">
                        <div id="fiche_detail">
                                 <h4 id="card-title"> (Type de Sygnaleemnt) </h4>
                                 <p> (descri) </p>  
                                 <p> (  nom de l envoyeur ) </p>  
                                 <p> (date de pub) </p>  
                                 <p> (rregion) </p>  
                                 <p> (  statut) </p>  
                            </div>
                        </div>
                        <div id="fiche_map">
                           

                        </div>
                    </div>
                    <div id="fiche_prefooter">

                    </div>
                <Footer/>
            </div>    
            );
        }
    }

    export default Fiche;