import React, { useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"


function SearchBar(props) {
    // const handleSearch = (event) =>{
    //     let value = event.target.value;
    //     let result = [];
    //     console.log(value)
    //     result = props.allData.filter((data) => {
    //       return data.name.search(value) != -1;
    //     });
    // }    
    return (
        <div>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="name" placeholder="Find Someone"
        onChange={(event) => props.handleSearch(event)}
        // onChange={(e) => setSearch(e.target.value)} value={search} 
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={props.handleClick}>
        Submit
      </Button>
    </Form>
    </div>
)}    

export default SearchBar;