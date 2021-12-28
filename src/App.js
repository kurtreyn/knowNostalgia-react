import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import Navigation from './components/NavigationComponent';
import Footer from './components/FooterComponent';
import About from './components/AboutComponent';
import Movies from './components/MoviesComponent';
import TVshows from './components/TVshowsComponent';
import Music from './components/MusicComponent';
import VideoGames from './components/MusicComponent';
import Home from './components/HomeComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navigation />
          <Home />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
