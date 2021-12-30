import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import RenderPage from './RenderPageComponent';
import SearchPage from './SearchComponent';
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
      let item = '';
      return (item = this.state.pageContent
        .filter((content) => content.category === 'movie-page')
        .map((item) => {
          return <RenderPage item={item} />;
        }));
      <SearchPage />;
    };

    const MusicPage = () => {
      let item = '';
      return (item = this.state.pageContent
        .filter((content) => content.category === 'music-page')
        .map((item) => {
          return <RenderPage item={item} />;
        }));
    };

    const TVshowPage = () => {
      let item = '';
      return (item = this.state.pageContent
        .filter((content) => content.category === 'tv-show-page')
        .map((item) => {
          return <RenderPage item={item} />;
        }));
    };

    const VideoGamesPage = () => {
      let item = '';
      return (item = this.state.pageContent
        .filter((content) => content.category === 'video-games-page')
        .map((item) => {
          return <RenderPage item={item} />;
        }));
    };

    return (
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/tvshows" element={<TVshowPage />} />
          <Route path="/videogames" element={<VideoGamesPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
