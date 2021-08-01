import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import api from '../utils/api'

function AddFile(selected) {
  const fileInput = useRef(null);
  const [image, setImage] = useState({
    //to update only provide the partition key and the sort key
    username: selected.selected.username,
    createdAt: selected.selected.createdAt,
    // email: selected.selected.email,
    // show: selected.selected.show, 
    // location: selected.selected.location
  })
  console.log(image)
  console.log(fileInput)

  function handleSubmit(e) {
    e.preventDefault();
    api.updateAWS(image)
  }

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
        setImage({...image, photo: postResponse.Location})
        console.log("postImage: ", postResponse.Location)
        return postResponse.Location;
      } catch (error) {
        console.log(error);
      }
    };
    postImage();
  };
    return (
      <Form>
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
        {/* <Form.Group>
          <Form.File id="exampleFormControlFile1" ref={fileInput} label="Share a photo" />
        </Form.Group>*/}
        <Button variant="warning" size="sm" onClick={handleSubmit} >
        Add Photo
      </Button> 

      </Form>
    )
}

export default AddFile;