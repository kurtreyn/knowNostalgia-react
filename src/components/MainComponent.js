import React, { Component } from 'react';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Home from './HomeComponent';
// import About from './AboutComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePageContent } from '../shared/HomePageContent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: HomePageContent,
    };
  }

  render() {
    return (
      <>
        <Header />
        <Navigation />

        <Footer />
      </>
    );
  }
}

export default Main;
