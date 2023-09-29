import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function KittenCard({ kittens }) {
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {kittens.map((kitten) => (
            <Col key={kitten.id}>
          <Card style={{ width: 375 }}>
            <Card.Img style={{ width: 375, height: 400 }} variant="top" src={kitten.image} />
            <Card.Body>
              <Card.Title>{kitten.name}</Card.Title>
              <Card.Text>{kitten.breed}</Card.Text>
              <Card.Text>{kitten.color}</Card.Text>
              <Card.Text>{kitten.gender}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default KittenCard;
