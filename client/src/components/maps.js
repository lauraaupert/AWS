
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import Locations from './locations';
// import CurrentLocation from './current'
import MarkerBis from './marker'
// import Geocode from "react-geocode";
import api from '../utils/api'
import GetLocations from './locations';
// Geocode.setApiKey(process.env.REACT_APP_APIKEY);


const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
      };
    
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
    
      onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };
    //   getLocations() {
    //     // function showAddress() {
    
    //     api.getFriends()
    //     .then(res => {
    //         // for (i = 0; i < res.data.length; i+1) {
    //         // console.log(res.data[i].email)
    
    //         //LOOP THROUGH ARRAY AND DISPLAY EVERY LOCATION
    
    //         console.log(res.data)
    //         const friend = res.data
    //         console.log(friend)
    //     })      
    //       .catch(err => console.log(err));
    // }
    
      
  render() {
    // Geocode.fromAddress(friend.address).then(
    //     (response) => {
    //       const { lat, lng } = response.results[0].geometry.location;
    //       console.log(lat, lng);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    return (
    //     <CurrentLocation
    //     centerAroundCurrentLocation
    //     google={this.props.google}
    //   >

    <Map
      google={this.props.google}
      zoom={2.5}
      style={mapStyles}
      initialCenter={
        {
          // lat: -1.2884,
          // lng: 36.8233
          lat: -1.2884,
          lng: 9.2266
        }
      }
    > 

        {/* <MarkerBis
            lat={48.8566}
            lng={2.3522}
            name="My Marker"
            color="pink"
          /> */}

          <Marker


          onClick={this.onMarkerClick}
          name={'You Are Here'}
          style={{ color: 'green', cursor: 'pointer'}}
          >
              </Marker>
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        {/* </CurrentLocation> */}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_APIKEY
})(MapContainer);

// function GoogleMaps() {
//     return (
//         <div>

//         </div>
//     )

// }