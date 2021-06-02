import React from "react"
import AddForm from './form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function AddYourself(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Yourself!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Enter Your Info:</h4>
        <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function AddModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" size="lg" block onClick={() => setModalShow(true)}>
          Add Yourself!
        </Button>
  
        <AddYourself
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
//   render(<AddModal />);

  export default AddModal;