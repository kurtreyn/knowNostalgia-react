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
    // const abra = (matchThis) => {
    //   let item = '';
    //   return (item = this.state.topPageCont
    //     .filter((content) => content.category === matchThis)
    //     .map((item) => {
    //       return <RenderHeader item={item} />;
    //     }));
    // };

    const HomeAboutHeader = () => {
      let item = '';
      return (item = this.state.topPageCont
        .filter((content) => content.category === 'home-about-page')
        .map((item) => {
          return <RenderHeader item={item} />;
        }));
      // let match = 'home-about-page';
      // abra(match);
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
      // let matchThis = 'movie-page';
      // abra();
    };

    const MovieSearch = () => {
      let item = '';
      return (item = this.state.topPageCont
        .filter((content) => content.category === 'movie-page')
        .map((item) => {
          return <SearchPage item={item} />;
        }));
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

    const MusicPage = () => {
      let item = '';
      return (item = this.state.pageContent
        .filter((content) => content.category === 'music-page')
        .map((item) => {
          return <RenderPage item={item} />;
        }));
    };

    const MusicHeader = () => {
      let item = '';
      return (item = this.state.topPageCont
        .filter((content) => content.category === 'music-page')
        .map((item) => {
          return <RenderHeader item={item} />;
        }));
      // let matchThis = 'music-page';
      // abra();
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

    const TVshowPage = () => {
      let item = '';
      return (item = this.state.pageContent
        .filter((content) => content.category === 'tv-show-page')
        .map((item) => {
          return <RenderPage item={item} />;
        }));
    };

    const TVshowHeader = () => {
      let item = '';
      return (item = this.state.topPageCont
        .filter((content) => content.category === 'tv-show-page')
        .map((item) => {
          return <RenderHeader item={item} />;
        }));
      // let matchThis = 'tv-show-page';
      // abra();
    };

    const TVSearch = () => {
      let item = '';
      return (item = this.state.topPageCont
        .filter((content) => content.category === 'tv-show-page')
        .map((item) => {
          return <SearchPage item={item} />;
        }));
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

    const VideoGamesPage = () => {
      let item = '';
      return (item = this.state.pageContent
        .filter((content) => content.category === 'video-games-page')
        .map((item) => {
          return <RenderPage item={item} />;
        }));
    };

    const VideoGamesHeader = () => {
      let item = '';
      return (item = this.state.topPageCont
        .filter((content) => content.category === 'video-games-page')
        .map((item) => {
          return <RenderHeader item={item} />;
        }));
      // let matchThis = 'video-games-page';
      // abra();
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
