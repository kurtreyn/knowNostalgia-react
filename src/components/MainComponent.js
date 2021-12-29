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
import Page from './PageComponent';
import RenderPage from './RenderPage';
import { PageContent } from '../shared/PageContent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageContent: PageContent,
    };
  }

  render() {
    const MoviePage = () => {
      return (
        <RenderPage
          item={this.state.pageContent.filter(
            (content) => content.category === 'movie-page'
          )}
        />
      );
    };

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
          <Route path="/protopage" element={<Page />} />
          <Route path="/rendpage" element={<MoviePage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
