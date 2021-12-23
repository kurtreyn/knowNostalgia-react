import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import CardComponent from './CardComponent';
import { HomePageContent } from '../shared/HomePageContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: HomePageContent,
    };
  }

  render() {
    const cardCont = this.state.cardContent.map((content) => {
      return (
        <Card>
          <CardImg top src={content.image} alt={content.title} />
          <CardBody>
            <CardTitle>{content.title}</CardTitle>
            <CardText>{content.description}</CardText>
          </CardBody>
        </Card>
      );
    });
    return (
      <div className="container">
        <div className="row">{cardCont}</div>
      </div>
    );
  }
}

export default App;
