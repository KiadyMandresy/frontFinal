import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form } from 'reactstrap';
import { MapContainer,TileLayer,ZoomControl,Marker,Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Header from './Header';
import Footer from './Footer';
import Leaflet from './Leaflet';
import $ from 'jquery'
import {useParams} from 'react-router-dom';
class Accueil extends Component{
    toggleKiady() {
        $("#collapseExample").slideToggle()
    }

    toggleManapotra() {
        $("#lol").fadeToggle()
    }
    constructor(props)
    {
      super(props);
      this.state={
        signs:[],
        couleur:[],
        types:[],
        date1:" ",
        date2:" ",
        id:0,
        typeSign:"",
        statut:"",
        ready:true
      };
      this.terminer=this.terminer.bind(this);
    }
    async terminer(e)
    {
        await fetch("https://test-rojo.herokuapp.com/signalementTermine/1/14777").then((res)=>{
            if(res.ok)
            {
              return res.json();
            }
            throw res;
        })
    }
    onChangeDate1(e)
    {
      this.setState({date1:e.target.value })
    }
    onChangeDate2(e)
    {
      this.setState({date2:e.target.value })
    }
   componentDidMount()
   {
     const col=["#7FFFD4","#00FF00","#F08080","#A0522D","#EE82EE"]
      const coul=new Array();
      for(let i=0;i<10;i++)
      {
        coul.push(col[i]);
      }
      this.setState({couleur:coul});
     /* let {id} = useParams();
      console.log(id);*/
      fetch("https://test-rojo.herokuapp.com/token/"+localStorage.getItem("token")).then((res)=>{
          if(res.ok)
          {
            return res.json();
          }
          throw res;
      })
      .then((data)=>{
          if(data.erreur==0)
          {
              this.setState({id:data.chef.idReg});
              fetch("https://test-rojo.herokuapp.com/signalementRegion/"+data.chef.idReg+"/1").then((res)=> {
       
                if(res.ok)
                {
                  return res.json();
                }
                throw res;
            })
            .then((data1)=> {
                this.setState({signs:data1.lise_Region});
                console.log(this.state.signs);
                console.log(this.state.signs[0].type);
                this.setState({ready:false});
            });
          }
          else if(data.erreur==1)
          {
              this.props.history.push("/login");
          }
      });
     
      fetch("https://test-rojo.herokuapp.com/typeSignalements").then((res)=> {
        if(res.ok)
        {
          return res.json();
        }
        throw res;
    })
    .then((data)=> {
        this.setState({types:data});
    });
   }

    render()
    {
      const position = [-18.234567,47.2345677];
      const{signs,ready}=this.state;
      if(ready)
      {
        return(
          <p> loding...</p>
        )
      }
      const marker=signs.map((sign)=> 
        <Marker position={[sign.x,sign.y]}>
        <Popup>
           <p> Statut: { sign.statut} </p>
           <p> Type: {sign.type}</p>
           <p> date: { sign.dateS} </p>
           <p> utilisateur: {sign.nom}</p>
        </Popup>
    </Marker>
     );
     const tab=signs.map((sign)=> 
        <tr>
          <td>sign.type</td>
          <td>sign.dateS</td>
          <td class="font-weight-medium"><div class="badge badge-success"></div></td>
        </tr>
     );
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
                                                        { this.state.types.map((type)=>

                                                            <option value={type.id}>{type.nom}</option>
                                                        )
                                                        }
                                                         
                                                    </select> </div>
                                                    <div className="col-md-3"> Statut:<select value="" className="form-control" placeholder="">
                                                         <option value="en cours">en cours</option>
                                                         <option  value="termine">termine</option>
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
               {marker}
               
           </MapContainer>

                    </div>
                    <div id="espace">
                        
                    </div>
                    <div id="map">
                        
                    <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Signalement</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Description</th>
                          <th>Status</th>
                          <th></th>
                          
                        </tr>  
                      </thead>
                      <tbody>
                      { signs.map((sign) => 
        <tr>
          <td>{sign.type}</td>
          <td>{sign.commentaire}</td>
          <td class="font-weight-medium"><div class="badge badge-success">{sign.statut}</div></td>
          <td > <button onClick={this.terminer(sign.id)}>terminer</button></td>
        </tr>
     )
                      }
                    
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