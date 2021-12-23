import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Navigation from './components/NavigationComponent';
import CardComponent from './components/CardComponent';
import Home from './components/HomeComponent';
import Footer from './components/FooterComponent';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navigation />
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
