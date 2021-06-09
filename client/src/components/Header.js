import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import AddModal from './AddModal'

function Header() {
    return(
<Jumbotron fluid>
  <Container>
    <h1>Find Each Other</h1>
    <p>
Your Circus Family is just a click away    
</p>
<AddModal />

  </Container>
</Jumbotron>
)
}
export default Header;

