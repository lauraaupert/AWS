import React from "react"
import CurrentLocation from './current'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import GoogleApiWrapper from "./displayCurrent"


function CurrentModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            You are here!
          </Modal.Title>
        </Modal.Header>
        {/* <Modal.Body> */}
            <div style={{height: "600px"}}>
        <GoogleApiWrapper />
            </div>
        {/* </Modal.Body> */}
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function MapModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="success" size="lg" block onClick={() => setModalShow(true)}>
          Use Current Location
        </Button>
  
        <CurrentModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default MapModal;