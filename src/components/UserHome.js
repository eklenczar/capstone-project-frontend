import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

function UserHome() {

    const userKittens = user.kittens.map((kitten) => {
        <Row>
          <Col>{kitten.image}</Col>
          <Col>
          {kitten.name}
          {kitten.gender}
          </Col>
        </Row>
    })

    
  return (
    <div>
        <h3>Your kittens</h3>
        <Container>
        {userKittens}
      </Container>
      <h3>Your litters</h3>
      <Container>
        
      </Container>
    </div>
  )
}

export default UserHome