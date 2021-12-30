import React from 'react';

const SearchPage = ({ item }) => {
  async function loadMovies(searchTitle) {
    const url = `https://omdbapi.com/?s=${searchTitle}&page=1&apikey=99e6a288`;
    const searchRes = await fetch(`${url}`);
    const data = await searchRes.json();
    if (data.Response === 'True') console.log(data.Search);
    // if (data.Response === 'True') displayMovieList(data.Search);
  }

  return (
    <div className="container" key={item.id}>
      <div className="row custom-row search-row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <form>
            <h2>Search Movies</h2>
            <div className="form-group">
              <label for={item.searhID}></label>
              <input
                type="text"
                className="form-control"
                id={item.searchID}
                placeholder={item.placeHolder}
                onKeyUp={loadMovies}
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
};

export default SearchPage;
