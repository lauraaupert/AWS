import React, { useState, useContext } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Search from "./Search"
import { MarkerContext } from "../utils/MarkerContext"
import AddFile from "./AddFile"

const googleKey = process.env.REACT_APP_APIKEY
const styles = require('./GoogleMapStyles.json')

const MapContainer = () => {
  const [ selected, setSelected ] = useState({});
  console.log(selected)

  const onSelect = item => {
        setSelected(item);
      }

  const marker = useContext(MarkerContext);
      console.log(marker.list)

  const mapStyles = {        
    height: "70vh",
    width: "100%",
    opacity: ".85"
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

        options={{styles: styles}}

        zoom={2.3}
        center={defaultCenter}>

        {marker.list.map(item => {
            return (

                <Marker 
                  key={item.username} 
                  position={item.location} 
                  onClick={() => onSelect(item)}
                />
            )
        })
        }
         
        {selected.location && 
            (
              <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <div>
                  <p style={{fontSize: "20px"}}>{selected.username}</p>
                  <p>{selected.show}</p>
                  <p>{selected.email}</p>
                  {selected.image ? 
                <img src={selected.image}></img> : <AddFile selected={selected} />
                }

                  

                </div>
              </InfoWindow>
            )
        }

      </GoogleMap>

    </LoadScript>

  )
}

export default MapContainer;