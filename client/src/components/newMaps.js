import React, { useState, useEffect, useContext } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import api from "../utils/api"
import Search from "./Search"
import { MarkerContext } from "../utils/MarkerContext"

const googleKey = process.env.REACT_APP_APIKEY

const MapContainer = () => {
    const [friends, setFriends] = useState({ results: [] })
    const [locations, setLocations] = useState({ results: [] })
    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
      }
//       const markers = useContext(MarkerContext)
// console.log(markers)

  const marker = useContext(MarkerContext);
      console.log(marker.list)

    useEffect(() => {
        api.getFriends()
    .then(res => {
    setFriends({ results: res.data })
    // setLocations({ results: res.data.latitude, res.data.longitude })
})
.catch(err => console.log(err));

}, [])

//THIS IS WHAT I WANT THE CONTEXT DATA TO BE STORED IN
// const friends = useContext(MarkerContext)

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

           <Search />
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={2.3}
          center={defaultCenter}>
          {/* {friends.results.map(item => { */}
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