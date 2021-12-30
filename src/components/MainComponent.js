import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import RenderPage from './RenderPageComponent';
import SearchPage from './SearchComponent';
import { PageTopContent } from '../shared/PageTopContent';
import { PageContent } from '../shared/PageContent';
import RenderHeader from './RenderHeaderComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageContent: PageContent,
      topPageCont: PageTopContent,
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
    };

    const MovieHeader = () => {
      let item = '';
      return (item = this.state.topPageCont
        .filter((content) => content.category === 'movie-page')
        .map((item) => {
          return <RenderHeader item={item} />;
        }));
    };

    const MovieGroup = () => {
      return (
        <>
          <MovieHeader />
          <Navigation />
          <MoviePage />
          <Footer />
        </>
      );
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
          <Route path="/preview" element={<MovieGroup />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
