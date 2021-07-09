import './App.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function App() {
  // start with just number of players per region
  // need a menu for selecting character
  // maybe another menu for selecting region. either that or a zoom?
  //
  return (
    <MapContainer
      center={[40.7, -98.7]}
      scrollWheelZoom={false}
      zoomControl={false}
      maxZoom={5}
      zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
        subdomains='abcd'/>
    </MapContainer>
  );
}

export default App;
