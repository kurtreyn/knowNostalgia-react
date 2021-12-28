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

  displayFact(e) {
    let currentBtn = e.target.getAttribute('data-button');
    const closeBtn = document.querySelectorAll('.close-button');
    let currentCont = '';
    const containers = document.querySelectorAll('.fact-container');
    console.log(`current button is ${currentBtn}`);

    for (let i = 0; i < containers.length; i++) {
      currentCont = containers[i].getAttribute('data-container');
      // console.log(`current cont is ${currentCont}`);

      if (currentCont === currentBtn) {
        let attrib = currentCont;

        containers[i].classList.remove('hide-item');
        containers[i].classList.add('fade-in');
      } else {
        containers[i].classList.add('hide-item');
      }

      const hideContainer = function () {
        containers[i].classList.add('hide-item');
      };
      for (const cb of closeBtn) {
        cb.addEventListener('click', hideContainer);
      }
    }

    currentBtn = '';
    currentCont = '';
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
              <div className="fact-info">{card.funFact}</div>
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
