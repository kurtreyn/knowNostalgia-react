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

  displayFact(event) {
    let button = event.target;
    let buttonID = button.dataset.button;
    const container = document.querySelector('.fact-container');
    console.log(`button ID: ${buttonID}`);
    container.classList.remove('hide-item');
  }

  render() {
    const RenderCard = this.state.cards.map((card) => {
      return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <Card className="h-100" key={card.id}>
            <CardImg variant="top" src={card.image} />
            <div className="fact-container hide-item" data-container={card.id}>
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
                className="mt-auto btn-fun-fact"
                data-button={card.id}
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
