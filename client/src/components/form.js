import React, { useState, useEffect, useRef } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import api from '../utils/api'

function AddForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState("");
    const [address, setAddress] = useState("");
    const [currentLatitude, setCurrentLatitude] = useState("");
    const [currentLongitude, setCurrentLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [photo, setPhoto] = useState("")
    const fileInput = useRef(null);

    const handleImageUpload = event => {
      event.preventDefault();
      const data = new FormData();
      console.log(fileInput)
      data.append('image', fileInput.current.files[0]);
      console.log(data)
      const postImage = async () => {
        try {
          const res = await fetch('/api/image-upload', {
            mode: 'cors',
            method: 'POST',
            body: data
          })
          if (!res.ok) throw new Error(res.statusText);
          const postResponse = await res.json();
          setPhoto(postResponse.Location)
          console.log("postImage: ", postResponse.Location)
          return postResponse.Location;
        } catch (error) {
          console.log(error);
        }
      };
      postImage();
    };

    //FOR DYNAMO
    // const [formState, setFormState] = useState({
    //   username: "",
    //   email: "",
    //   show: "", 
    //   location: 
    //   {
    //     // lat: "",
    //     // lng: ""
    //   }
    // })

    // console.log(formState)
    // const handleChange = (event) => {
    //     setFormState({ ...formState, [event.target.name]: event.target.value });
    //   }
    
  
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords);
          setCurrentLatitude(position.coords.latitude);
          setCurrentLongitude(position.coords.longitude);
        })
      }, 
    []);

    function onAddress(e) {
        e.preventDefault();
        setLatitude(currentLatitude);
        setLongitude(currentLongitude);
        setAddress(currentLatitude, currentLongitude);
        // setFormState({...formState, location: {lat: Number(currentLatitude), lng: Number(currentLongitude)}})
        // console.log(formState)

    };

    async function AddYourself(e) {
        e.preventDefault();
        //FOR DYNAMO
        // if (formState.username === "" || formState.email === "" || formState.show === "" ) {
        //     alert("Please fill out your name, email, show, and location");
        // } else {
        //   if (formState.location.lat || formState.location.lng) {
        // console.log(formState)
        // api.postAWS(formState)
    
      // else {
      //         const location = address;
      //       console.log(address)
      //         api.geocode(location)
      //         .then(res => {

                
      //           const apiLatitude = res.data.data[0].latitude
      //           const apiLongitude = res.data.data[0].longitude

      //           console.log(res, res.data.data[0].latitude)
      //           console.log(formState)
      //           setFormState({...formState, location: {lat: Number(apiLatitude), lng: Number(apiLongitude)}})
      //           console.log(formState)
      //         api.postAWS(formState)
      //       })
              

            //   console.log(formState)
            //   const postData = async () => {
            //     const res = await fetch('/api/users', {
            //       method: 'POST',
            //       headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json'
            //       },
            //       body: JSON.stringify(formState)
            //     })
            //     const data = await res.json();
            //     console.log(data);
            //   }
            //   postData();
        
      

        if (name === "" || email === "" || show === "" || address === "") {
            alert("Please fill out your name, email, show, and location");
        } else {
            if (latitude, longitude) {
              api.saveFriend(name, email, show, latitude, longitude, photo);
            } else {
              const location = address;

              api.geocode(location)
              .then(res => {
                const apiLatitude = res.data.data[0].latitude
                const apiLongitude = res.data.data[0].longitude
                console.log("Friend Data: ", name, email, show, apiLatitude, apiLongitude);
        
                api.saveFriend(name, email, show, apiLatitude, apiLongitude, photo)
              })
              .catch(err => console.log(err));
            }
        }
    };
  
      
    return (
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter your name" 
         onChange={(e) => setName(e.target.value)} 
         value={name}
          name="username"
          // onChange={handleChange}
          // value={formState.username}
          />
        </Form.Group>

        <br/>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" 
         onChange={(e) => setEmail(e.target.value)} 
         value={email}
          name="email" 
          // onChange={handleChange}
          // value={formState.email}
          />
        </Form.Group>

        <br/>

        <Form.Group controlId="show">
          <Form.Label>Which show were you on?</Form.Label>
          <Form.Control type="email" placeholder="Show" 
         onChange={(e) => setShow(e.target.value)} 
         value={show}
          name="show"
          // onChange={handleChange}
          // value={formState.show}
          />
        </Form.Group>

        <br/>

        <Form.Group controlId="address">
          <Form.Label>Where are you located?</Form.Label>
          <Form.Control type="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address}/>
          <Button variant="success" onClick={onAddress}>Use Current Location</Button> 
        </Form.Group>

        <br/>

        <Form.Group controlId="photo">
          <input
            type="file"
            ref={fileInput}
            className="form-input p-2"
          />
          <button 
            className="btn" 
            onClick={handleImageUpload} 
            type="submit"
          >
            Upload
          </button>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={AddYourself}>
          Submit
        </Button>

      </Form>
    )
};

export default AddForm;
