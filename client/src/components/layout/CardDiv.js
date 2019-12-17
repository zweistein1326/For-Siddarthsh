import React, { Component } from "react";
import { Card, ListGroup } from 'react-bootstrap';
class CardDiv extends Component {
  render() {
    return (
        <Card bg="light" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default CardDiv;
