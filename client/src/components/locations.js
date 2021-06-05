import React, { useState, useEffect } from 'react';
// import friend from '../../../models/friend';
import api from '../utils/api'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Jumbotron from 'react-bootstrap/Jumbotron'




function GetLocations() {
    // function showAddress() {
        const [friends, setFriends] = useState({ results: [] });
           


// function displayFriends(event) {
//     event.preventDefault();
useEffect(() => {
api.getFriends()
    .then(res => {
        // for (i = 0; i < res.data.length; i+1) {
        // console.log(res.data[i].email)

        //LOOP THROUGH ARRAY AND DISPLAY EVERY LOCATION

        console.log(res.data)
        setFriends({ results: res.data })

        console.log(setFriends)
        
    // }).then(function display() {
    //     const friends = friend.map((friend) =>
    
    // <li>{friend}</li>
    // )
    // console.log(friends)
})
      .catch(err => console.log(err));

     }, [])
    
    // displayFriends()
      return (

        <Jumbotron >
              <h1>Hello, world!</h1>

              {friends.results.length ?
<ul>
  {friends.results.map((friend =>
    
    <li>{friend.name} {friend.address} {friend.email}</li>

  ))} 
  </ul>
  : (<h1> </h1>)
  }
</Jumbotron>
            
        )
    
}

export default GetLocations;
