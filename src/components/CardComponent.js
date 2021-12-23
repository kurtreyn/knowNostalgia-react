import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import { HomePageContent } from '../shared/HomePageContent';

function RenderCard({ card }) {
  return (
    <Card className="h-100">
      <CardImg variant="top" src={card.image} />
      <div className="fact-container hide-item" id="semi-charmed">
        <button type="button" className="close close-button" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="fact-info"></div>
      </div>
      <CardBody className="d-flex flex-column">
        <CardTitle>{card.category}</CardTitle>
        <CardText>
          Semi-Charmed Life by Third Eye Blind was released in 1997.
        </CardText>
        <Button variant="primary" className="btn-fun-fact">
          Fun Fact
        </Button>
      </CardBody>
    </Card>
  );
}

function CardComponent() {
  const cardComp = this.props.cards.map((card) => {
    return (
      <div
        key={card.id}
        className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
      >
        <RenderCard card={card} />
      </div>
    );
  });
  return <div className="row">{cardComp}</div>;
}

export default CardComponent;
