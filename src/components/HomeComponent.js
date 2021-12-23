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

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: HomePageContent,
    };
  }

  render() {
    return (
      <>
        <CardComponent />
      </>
    );
  }
}

export default HomeComponent;
