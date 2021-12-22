import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const CardComponent = (item) => {
  return (
    <Card className="card h-100">
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>Title</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
