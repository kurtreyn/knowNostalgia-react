import React, { Component } from 'react';

class TVshows extends Component {
  render() {
    return (
      <div className="container">
        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img
              src="../assets/images/tv-shows-south-park.jpeg"
              alt="south park"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">South Park</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="south-park"
              >
                The curious, adventure-seeking, fourth grade group of 10 year
                old boys, Stan, Kyle, Cartman, and Kenny, all join in in
                buffoonish adventures that sometimes evolve nothing. Sometimes
                something that was simple at the start, turns out to get out of
                control.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="south-park"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img src="../assets/images/tv-shows-sapranos.jpg" alt="sopranos" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">The Sopranos</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="sopranos"
              >
                An innovative look at the life of fictional Mafia Capo Tony
                Soprano, this serial is presented largely first person, but
                additional perspective is conveyed by the intimate conversations
                Tony has with his psychotherapist. We see Tony at work, at home,
                and in therapy.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="sopranos"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img src="../assets/images/tv-shows-dexter.jpg" alt="dexter" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">Dexter</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="dexter"
              >
                As a Miami forensics expert, he spends his days solving crimes,
                and nights committing them. But Dexter lives by a strict code of
                honor that is both his saving grace and lifelong burden. Torn
                between his deadly compulsion and his desire for true happiness,
                Dexter is a man in profound conflict with the world and himself.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="dexter"
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
                <label for="tv-title"></label>
                <input
                  type="text"
                  className="form-control"
                  id="tv-title"
                  placeholder="Search TV Shows"
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

export default TVshows;
