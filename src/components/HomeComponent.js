import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import CardComponent from './CardComponent';
import { HomePageContent } from '../shared/HomePageContent';
import semiCharmed from '../images/thirdEyeBlind-semiCharmedLife.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: HomePageContent,
    };
  }

  render() {
    return (
      <Card className="h-100">
        <CardImg variant="top" src={semiCharmed} />
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
          <CardTitle>Music</CardTitle>
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
}

export default App;
