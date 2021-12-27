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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: HomePageContent,
    };
  }

  displayFact() {
    const factContainer = document.querySelector('.fact-container');
    const buttonId = document.querySelector('.btn-fun-fact').dataset.id;
    factContainer.classList.remove('hide-item');
    console.log(`button id: ${buttonId}`);
  }

  render() {
    const RenderCard = this.state.cards.map((card) => {
      return (
        <div
          className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
          key={card.id}
        >
          <Card className="h-100">
            <CardImg variant="top" src={card.image} />
            <div className="fact-container hide-item" id="semi-charmed">
              <button
                type="button"
                className="close close-button"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="fact-info"></div>
            </div>
            <CardBody className="d-flex flex-column">
              <CardTitle tag="h5">{card.category}</CardTitle>
              <CardText>{card.info}</CardText>
              <Button
                onClick={this.displayFact}
                variant="primary"
                className="mt-auto btn-fun-fact"
                data-id={card.id}
              >
                Fun Fact
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row custom-row">{RenderCard}</div>
      </div>
    );
  }
}

export default Home;
