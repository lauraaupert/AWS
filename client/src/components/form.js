import React, { useState, useEffect } from "react"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import api from '../utils/api'
import DisplayCurrent from "./displayCurrent"
import MapModal from "./MapModal"

function AddForm({ handleChange }) {
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [show, setShow] = useState("")
        const [address, setAddress] = useState("")
        const [latitude, setLatitude] = useState("")
        const [longitude, setLongitude] = useState("")
    
        // useEffect(() => {
        //   new CurrentLocation()
        //   .then(console.log(CurrentLocation))
        // })
       

        function onAddress(e) {
          e.preventDefault();
          navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            console.log(position.coords)
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            console.log(latitude + ", " + longitude)
            // Show a map centered at latitude / longitude.
          })
          setAddress(latitude + ", " + longitude)
          console.log("Address: " + address)
        }


        async function AddYourself(e) {
          e.preventDefault();


          if (name === "" || email === "" || show === "" || address === "") {
            alert("Please fill out your name, email, show, and location")
          } else {
            if (latitude, longitude) {
              const address = latitude + ", " + longitude

              console.log("Friend Data: ", name, email, show, address)
        
              api.saveFriend(name, email, show, address)
              alert("Success!")
            } else {
              const location = address;
              console.log(location)
              api.geocode(location)
              .then(res => {
                // console.log(res.data.data[0].latitude)
                const apiLatitude = res.data.data[0].latitude
                const apiLongitude = res.data.data[0].longitude
                // setLatitude(res.data.data[0].latitude)
                // setLongitude(res.data.data[0].longitude)
                
                console.log(latitude)
                const address = apiLatitude + ", " + apiLongitude
                console.log("Friend Data: ", name, email, show, address)
        
                api.saveFriend(name, email, show, address)
  
                  // if (res.data === undefined) {
                  //     setGames({ results: [] });
                  //     console.log(setGames)
                  // } else {
                      // setGames({ results: res.data.results })
                      // console.log(setGames)
                  // }
              })
              .catch(err => console.log(err));

              // alert("Success!")

            }

         
            }
          }
  
          //   function coordinates() {

          //     navigator.geolocation.getCurrentPosition(position => {
          //      const { latitude, longitude } = position.coords;
          //      console.log(position.coords)
          //      // Show a map centered at latitude / longitude.
          //    })
          // }
      
        
      
    return (
<Form>
  <Form.Group controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name}/>
  </Form.Group>
  <br/>

  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
  </Form.Group>
  <br/>
  <Form.Group controlId="show">
    <Form.Label>Which show were you on?</Form.Label>
    <Form.Control type="email" placeholder="Show" onChange={(e) => setShow(e.target.value)} value={show}/>
  </Form.Group>
  <br/>

  <Form.Group controlId="address">
    <Form.Label>Where are you located?</Form.Label>

    <Form.Control type="email" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address}/>
    <Button variant="success" onClick={onAddress}>Use Current Location 
    {/* <MapModal /> */}
    </Button> 

</Form.Group>
<br/>



  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit" onClick={AddYourself}
>
    Submit
  </Button>
</Form>
    )}

export default AddForm;
