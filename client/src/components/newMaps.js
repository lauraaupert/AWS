import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import api from "../utils/api"


const googleKey = process.env.REACT_APP_APIKEY

const MapContainer = () => {
    const [friends, setFriends] = useState({ results: [] })
    const [locations, setLocations] = useState({ results: [] })
    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
      }

    useEffect(() => {
        api.getFriends()
    .then(res => {
    setFriends({ results: res.data })
    // setLocations({ results: res.data.latitude, res.data.longitude })
})
.catch(err => console.log(err));

}, [])

console.log(friends.results)
console.log(locations)

  const mapStyles = {        
    height: "70vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey = {googleKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={2.3}
          center={defaultCenter}>
          {friends.results.map(item => {
              return (
              <Marker 
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