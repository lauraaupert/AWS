import React from "react"
import { Button, Form } from "react-bootstrap"

function Search() {
    return (
    <div>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="name" placeholder="Find Someone" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    )
}

export default Search;