import React, { Component } from 'react';

class Music extends Component {
  render() {
    return (
      <div className="container">
        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img
              src="../assets/images/music-bittersweet-symphony.jpg"
              alt="bittersweet symphony"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">Bittersweet Symphony</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="bittersweet"
              >
                Recorded by English rock band the Verve as the lead track on
                their third studio album, Urban Hymns (1997). The song was
                released on 16 June 1997 by Hut Recordings and Virgin Records as
                the first single from the album, reaching number two on the UK
                Singles Chart and remaining in the chart for three months.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="bittersweet"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img
              src="../assets/images/music-smells-like-teen-spirit.jpg"
              alt="smells like teen spirit"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">Smells Like Teen Spirit</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="spirit"
              >
                A song by American rock band Nirvana. It is the opening track
                and lead single from the band's second album, Nevermind (1991),
                released on DGC Records. The unexpected success of the song
                propelled Nevermind to the top of several albums charts at the
                start of 1992, an event often marked as the point when grunge
                entered the mainstream.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="spirit"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img
              src="../assets/images/music-u-cant-touch-this.jpg"
              alt="cant touch this"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">U Can't Touch This</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="hammer"
              >
                A song co-written, produced and performed by MC Hammer from his
                1990 album Please Hammer, Don't Hurt 'Em. It is considered to be
                his signature song.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="hammer"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row search-row">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <form>
              <h2>Search Music</h2>
              <div className="form-group">
                <label for="music-search"></label>
                <input
                  type="text"
                  className="form-control"
                  id="music-title"
                  placeholder="Search Music"
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

export default Music;
