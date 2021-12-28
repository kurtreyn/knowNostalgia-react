import React, { Component } from 'react';

class VideoGames extends Component {
  render() {
    return (
      <div className="container">
        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img
              src="../assets/images/video-games-god-of-war.jpg"
              alt="god of war"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">God of War</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="god-of-war"
              >
                Developed by Santa Monica Studio and published by Sony Computer
                Entertainment. First released on March 22, 2005, for the
                PlayStation 2 console.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="god-of-war"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img
              src="../assets/images/video-games-half-life.jpg"
              alt="half-life"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">Half-Life</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="half-life"
              >
                Developed by Valve and published by Sierra Studios for Windows
                in 1998. It was Valve's debut product and the first game in the
                Half-Life series.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="half-life"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img
              src="../assets/images/video-games-mario-64.jpeg"
              alt="mario-64"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">Mario 64</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="mario"
              >
                A 1996 platform game for the Nintendo 64 and the first Super
                Mario game to feature 3D gameplay. It was developed by Nintendo
                EAD and published by Nintendo.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="mario"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row search-row">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <form>
              <h2>Search Movies</h2>
              <div className="form-group">
                <label for="game-title"></label>
                <input
                  type="text"
                  className="form-control"
                  id="game-title"
                  placeholder="Search Video Games"
                />
              </div>
              {/* <div className="form-group">
              <button className="btn btn-primary" id="search-movies-btn">
                Search
              </button>
            </div> */}
            </form>
          </div>
          <div
            className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 search-list"
            id="search-list"
          >
            {/* <div className="search-list-item">
            <div className="search-item-thumbnail">
              <img src="../assets/images/medium-cover.jpg" />
            </div>
          </div>  */}
          </div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
            <div className="result-grid" id="result-grid">
              {/* <div className="movie-poster">
                  <img src="../assets/images/medium-cover.jpg" alt="movie poster" />
                </div>
                <div className="movie-info">
                  <h3 className="movie-title">Guardians of the Galaxy Vol. 2</h3>
                  <ul className="movie-misc-info">
                    <li className="year">Year: 2017</li>
                  </ul>
                  <p class="plot">
                    <b>Plot:</b> The Guardians struggle to keep together as a team
                    while dealing with their personal family issues, notably
                    Star-Lord's ecounter with his father the ambitious celestial
                    being Ego.
                  </p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoGames;
