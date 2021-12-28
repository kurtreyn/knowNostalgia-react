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
    return (
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tvshows" element={<TVshows />} />
          <Route path="/videogames" element={<VideoGames />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
