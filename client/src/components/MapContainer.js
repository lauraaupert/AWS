import React, { useState, useContext } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Search from "./Search"
import { MarkerContext } from "../utils/MarkerContext"

const googleKey = process.env.REACT_APP_APIKEY

const MapContainer = () => {
  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
        setSelected(item);
      }

  const marker = useContext(MarkerContext);
      console.log(marker.list)

  const mapStyles = {        
    height: "70vh",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
    <LoadScript
       googleMapsApiKey = {googleKey}>
    <Search />
    <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={2.3}
        center={defaultCenter}>
        {marker.list.map(item => {
            return (
            <Marker 
            //   icon={
            //     "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            //     // scale: 7,
            //     // fillColor: "yellow",
            //               }   
                key={item.name} 
                position={item.location} 
                onClick={() => onSelect(item)}/>
              )
            })
         }
         {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
                <div>
              <p style={{fontSize: "20px"}}>{selected.name}</p>
              <p>{selected.show}</p>
              <p>{selected.email}</p>
              </div>
            </InfoWindow>
            )
         }
        </GoogleMap>
     </LoadScript>

  )
}

export default MapContainer;