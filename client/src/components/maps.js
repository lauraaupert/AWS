
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
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
      />
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