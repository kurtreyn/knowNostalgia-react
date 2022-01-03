import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './HeaderComponent';
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
    const abra = (item = '', matchThis) => {
      item = '';
      return (item = this.state.topPageCont
        .filter((content) => content.category === matchThis)
        .map((item) => {
          return <RenderHeader item={item} />;
        }));
    };

    const cadabra = (item = '', matchThis) => {
      item = '';
      return (item = this.state.pageContent
        .filter((content) => content.category === matchThis)
        .map((item) => {
          return <RenderPage item={item} />;
        }));
    };

    const alakazam = (item = '', matchThis) => {
      item = '';
      return (item = this.state.topPageCont
        .filter((content) => content.category === matchThis)
        .map((item) => {
          return <SearchPage item={item} />;
        }));
    };

    const HomeAboutHeader = () => {
      return abra('', 'home-about-page');
    };

    const HomeGroup = () => {
      return (
        <>
          <HomeAboutHeader />
          <Navigation />
          <Home />
          <Footer />
        </>
      );
    };

    const AboutGroup = () => {
      return (
        <>
          <HomeAboutHeader />
          <Navigation />
          <About />
          <Footer />
        </>
      );
    };

    const MovieHeader = () => {
      return abra('', 'movie-page');
    };

    const MoviePage = () => {
      return cadabra('', 'movie-page');
    };

    const MovieSearch = () => {
      return alakazam('', 'movie-page');
    };

    const MovieGroup = () => {
      return (
        <>
          <MovieHeader />
          <Navigation />
          <MoviePage />
          <MovieSearch />
          <Footer />
        </>
      );
    };

    const MusicHeader = () => {
      return abra('', 'music-page');
    };

    const MusicPage = () => {
      return cadabra('', 'music-page');
    };

    const MusicGroup = () => {
      return (
        <>
          <MusicHeader />
          <Navigation />
          <MusicPage />
          <Footer />
        </>
      );
    };

    const TVshowHeader = () => {
      return abra('', 'tv-show-page');
    };

    const TVshowPage = () => {
      return cadabra('', 'tv-show-page');
    };

    const TVSearch = () => {
      return alakazam('', 'tv-show-page');
    };

    const TVshowGroup = () => {
      return (
        <>
          <TVshowHeader />
          <Navigation />
          <TVshowPage />
          <TVSearch />
          <Footer />
        </>
      );
    };

    const VideoGamesHeader = () => {
      return abra('', 'video-games-page');
    };

    const VideoGamesPage = () => {
      return cadabra('', 'video-games-page');
    };

    const VideoGamesGroup = () => {
      return (
        <>
          <VideoGamesHeader />
          <Navigation />
          <VideoGamesPage />
          <Footer />
        </>
      );
    };

    return (
      <div>
        <Routes>
          <Route path="/" element={<HomeGroup />} />
          <Route path="/about" element={<AboutGroup />} />
          <Route path="/movies" element={<MovieGroup />} />
          <Route path="/music" element={<MusicGroup />} />
          <Route path="/tvshows" element={<TVshowGroup />} />
          <Route path="/videogames" element={<VideoGamesGroup />} />
        </Routes>
      </div>
    );
  }
}

export default Main;
