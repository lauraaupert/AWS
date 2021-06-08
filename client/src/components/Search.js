import React, { useState, useEffect, useContext } from "react"
import { Button, Form } from "react-bootstrap"
import api from "../utils/api"
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MarkerContext } from "../utils/MarkerContext"

function Search() {
  const [search, setSearch] = useState("")
  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState(allData);
  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
    setSelected(item);
  }
  const context = useContext(MarkerContext)

  const handleSearch = (event) =>{
    let value = event.target.value;
    let result = [];
    console.log(value)
    result = allData.filter((data) => {
      return data.name.search(value) != -1;
    });
    setFilteredData(result);
    context.setList(result);
  }

  useEffect(() => {
    console.log()
    api.getFriends()
    .then(res => {
      console.log(res.data)
      setAllData(res.data);
      setFilteredData(res.data);
      context.setList(res.data)
    })
    .catch(error => {
      console.log('Error getting fake data: ' + error);
      })
  
  }, []);
console.log(filteredData)
  function handleClick(e) {
    e.preventDefault();
    console.log(search)
}

    return (
    <div>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="name" placeholder="Find Someone"
    onChange={(event) =>handleSearch(event)}
    // onChange={(e) => setSearch(e.target.value)} value={search} 
    />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleClick}>
    Submit
  </Button>
</Form>
<div>
<ul>
{filteredData.map((value,index)=>{
  console.log(value.location)
  return (
    <Marker 
    icon={
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      // scale: 7,
      // fillColor: "yellow",
                }   
      key={value.name} 
      position={value.location} 
      onClick={() => onSelect(value.name)}
      />
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


{/* <li key={value.id}

position={value.location}

name={value.name}>{value.name}

</li>


  })
} */}
</ul>
</div>
</div>
    )
    
}

export default Search;