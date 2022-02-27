import React, { Component} from 'react';
import {Button, Container, FormGroup , Input , Form } from 'reactstrap';
import { MapContainer,TileLayer,ZoomControl,Marker,Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

class Leaflet extends Component{
   
    render()
    {
        const position = [-18.234567,47.2345677]
        return (
            
            <MapContainer  center={position} zoom={13} scrollWheelZoom={false}>
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


            );

        }
    }
export default Leaflet;