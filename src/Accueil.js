import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form } from 'reactstrap';
import { MapContainer,TileLayer,ZoomControl,Marker,Popup} from 'react-leaflet';
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
       
        return (
            <div>
                <Header/>
                <div id="search">
                        
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
                                <div className="card p-3 py-4">
                                    <h5>An Easier way to find your Housing</h5>
                                    <div className="row g-3 mt-2">
                                        <div className="col-md-3">
                                            <div className="dropdown"> <button className="btn btn-secondary dropdown-toggle" onClick={this.toggleManapotra} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"> Any Status </button>
                                                <ul id="lol" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <li><a className="dropdown-item" href="#">Rural</a></li>
                                                    <li><a className="dropdown-item" href="#">Urban</a></li>
                                                    <li><a className="dropdown-item" href="#">All</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6"> <Input type="text" className="form-control" placeholder="Enter address e.g. street, city and state or zip"/> </div>
                                        <div className="col-md-3"> <button className="btn btn-secondary btn-block">Search Results</button> </div>
                                    </div>
                                    <div className="mt-3"> <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="advanced" onClick={this.toggleKiady}> Advance Search With Filters <i className="fa fa-angle-down"></i> </a>
                                        <div className="collapse" id="collapseExample">
                                            <div className="card card-body">
                                                <div className="row">
                                                    <div className="col-md-4"> <Input type="text" placeholder="Property ID" className="form-control"/> </div>
                                                    <div className="col-md-4"> <Input type="text" className="form-control" placeholder="Search by MAP"/> </div>
                                                    <div className="col-md-4"> <Input type="text" className="form-control" placeholder="Search by Country"/> </div>
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
                      <Leaflet/>
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
                          <th>Product</th>
                          <th>Price</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>  
                      </thead>
                      <tbody>
                        <tr>
                          <td>Search Engine Marketing</td>
                          <td class="font-weight-bold">$362</td>
                          <td>21 Sep 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-success">Completed</div></td>
                        </tr>
                        <tr>
                          <td>Search Engine Optimization</td>
                          <td class="font-weight-bold">$116</td>
                          <td>13 Jun 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-success">Completed</div></td>
                        </tr>
                        <tr>
                          <td>Display Advertising</td>
                          <td class="font-weight-bold">$551</td>
                          <td>28 Sep 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-warning">Pending</div></td>
                        </tr>
                        <tr>
                          <td>Pay Per Click Advertising</td>
                          <td class="font-weight-bold">$523</td>
                          <td>30 Jun 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-warning">Pending</div></td>
                        </tr>
                        <tr>
                          <td>E-Mail Marketing</td>
                          <td class="font-weight-bold">$781</td>
                          <td>01 Nov 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-danger">Cancelled</div></td>
                        </tr>
                        <tr>
                          <td>Referral Marketing</td>
                          <td class="font-weight-bold">$283</td>
                          <td>20 Mar 2018</td>
                          <td class="font-weight-medium"><div class="badge badge-warning">Pending</div></td>
                        </tr>
                        <tr>
                          <td>Social media marketing</td>
                          <td class="font-weight-bold">$897</td>
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