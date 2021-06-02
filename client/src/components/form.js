import React, { useState } from "react"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import api from '../utils/api'

function AddForm({ handleChange }) {
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [show, setShow] = useState("")
        const [address, setAddress] = useState("")
      
        function AddYourself(e) {
          e.preventDefault();
          console.log("Friend Data: ", name, email, show, address)
        
            api.saveFriend(name, email, show, address)
           
            }
        
    
        
      
    return (
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Which show were you on?</Form.Label>
    <Form.Control type="email" placeholder="Show" onChange={(e) => setShow(e.target.value)} value={show}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Where are you located?</Form.Label>
    <Form.Control type="email" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address}/>
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={AddYourself}
>
    Submit
  </Button>
</Form>
    )}

export default AddForm;