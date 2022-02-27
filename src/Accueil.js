import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form } from 'reactstrap';
import { MapContainer,TileLayer,ZoomControl,Marker,Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Header from './Header';
import Footer from './Footer';
import Leaflet from './Leaflet';
import $ from 'jquery'

class Accueil extends Component{
    toggleKiady() {
        $("#collapseExample").slideToggle()
    }

    toggleManapotra() {
        $("#lol").fadeToggle()
    }

   

    render()
    {
      const position = [-18.234567,47.2345677]
        return (
            <div>
                <Header/>
                <div id="search">
                        
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
                                <div className="card p-3 py-4">
                                   
                                    <div className="mt-3"> <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="advanced" onClick={this.toggleKiady}> Recherche <i className="fa fa-angle-down"></i> </a>
                                        <div className="collapse" id="collapseExample">
                                            <div className="card card-body">
                                                <div className="row">
                                                    <div className="col-md-3"> Date min:  <Input type="text" placeholder="yyy-mm-dd" className="form-control"/> </div>
                                                    <div className="col-md-3"> Date max: <Input type="text" className="form-control" placeholder="yyy-mm-dd"/> </div>
                                                    <div className="col-md-3"> Type :  <select value="" className="form-control" placeholder="">
                                                         <option value="">Eboulement</option>
                                                         <option  value="">Desctruction</option>
                                                    </select> </div>
                                                    <div className="col-md-3"> Statut:<select value="" className="form-control" placeholder="">
                                                         <option value="">Non termine</option>
                                                         <option  value="">Termine</option>
                                                    </select>  </div>
                                                    <div className="col-md-3"> <button  color="blue" className="btn-primary"> Rechercher</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div id="main1">
                    <div id="tab">   
                    <MapContainer  center={position} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
           </MapContainer>

                    </div>
                    <div id="espace">
                        
                    </div>
                    <div id="map">
                        
                    <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Top Products</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>  
                      </thead>
                      <tbody>
                        <tr>
                          <td>Search Engine Marketing</td>
                          <td>21 Sep 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-success">Completed</div></td>
                        </tr>
                        <tr>
                          <td>Search Engine Optimization</td>
                          <td>13 Jun 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-success">Completed</div></td>
                        </tr>
                        <tr>
                          <td>Display Advertising</td>
                          <td>28 Sep 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-warning">Pending</div></td>
                        </tr>
                        <tr>
                          <td>Pay Per Click Advertising</td>
                          <td>30 Jun 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-warning">Pending</div></td>
                        </tr>
                        <tr>
                          <td>E-Mail Marketing</td>
                          <td>01 Nov 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-danger">Cancelled</div></td>
                        </tr>
                        <tr>
                          <td>Referral Marketing</td>
                          <td>20 Mar 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-warning">Pending</div></td>
                        </tr>
                        <tr>
                          <td>Social media marketing</td>
                          <td>26 Oct 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-success">Completed</div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

                    </div>
                </div>
                <Footer/>
            </div>
            );
        }
    }
    export default Accueil;