import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Movies from './MoviesComponent';
import TVshows from './TVshowsComponent';
import Music from './MusicComponent';
import VideoGames from './VideoGamesComponent';
import Home from './HomeComponent';

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/movies" component={Movies} />
          <Route path="/music" component={Music} />
          <Route path="/tvshows" component={TVshows} />
          <Route path="/videogames" component={VideoGames} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
