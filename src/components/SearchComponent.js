import React from 'react';

const SearchPage = ({ item }) => {
  function loadTvShow(tvSearch) {
    fetch(`https://omdbapi.com/?s=${tvSearch}&page=1&apikey=99e6a288`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // if (data.Response === 'True') console.log(data.Search);
        if (data.Response === 'True') displayTVList(data.Search);
        // const list = data.Search;

        // console.log(`list is: ${list}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function findTvShow() {
    const tvSearchBox = document.querySelector('#tv-title');
    const searchListTV = document.querySelector('#search-list-tv');
    const resultGridTV = document.querySelector('#result-grid-tv');
    let tvPoster;
    let searchFor = tvSearchBox.value.trim();
    // console.log(`searched for ${searchFor}`);
    if (searchFor.length > 0) {
      searchListTV.classList.remove('hide-search-list');
      loadTvShow(searchFor);
    } else {
      searchListTV.classList.add('hide-search-list');
    }
  }

  function displayTVList(tvShow) {
    const tvSearchBox = document.querySelector('#tv-title');
    const searchListTV = document.querySelector('#search-list-tv');
    const resultGridTV = document.querySelector('#result-grid-tv');
    let tvPoster;
    searchListTV.innerHTML = '';
    for (let tvx = 0; tvx < tvShow.length; tvx++) {
      let tvListItem = document.createElement('div');
      // console.log(tvListItem);
      tvListItem.dataset.id = tvShow[tvx].imdbID;

      tvListItem.classList.add('search-list-item');
      if (tvShow[tvx].Poster != 'N/A') {
        tvPoster = tvShow[tvx].Poster;
      } else {
        tvPoster = '../assets/images/image_not_found.png';
      }
      let tvYear = tvShow[tvx].Year;
      let tvType = tvShow[tvx].Type;
      if (tvYear >= '1990' && tvYear <= '2009' && tvType === 'series') {
        tvListItem.innerHTML = `
        <div class="search-list-item">
        <div class="search-item-thumbnail">
          <img src="${tvPoster}" />
        </div>
      </div>
        `;
        searchListTV.appendChild(tvListItem);
      } else {
        tvListItem.innerHTML = '../assets/images/image_not_found.png';
      }
    }
    loadTVDetails();
  }

  function loadTVDetails() {
    const tvSearchBox = document.querySelector('#tv-title');
    const searchListTV = document.querySelector('#search-list-tv');
    const resultGridTV = document.querySelector('#result-grid-tv');
    let tvPoster;
    const searchListTvShows =
      searchListTV.querySelectorAll('.search-list-item');
    searchListTvShows.forEach((tvShow) => {
      // console.log(tvShow);
      tvShow.addEventListener('click', async () => {
        // console.log(movie.dataset.id);
        searchListTV.classList.add('hide-search-list');
        tvSearchBox.value = '';
        const resultDetails = await fetch(
          `https://www.omdbapi.com/?i=${tvShow.dataset.id}&apikey=99e6a288`
        );
        const tvShowDetails = await resultDetails.json();
        const tvYear = tvShowDetails.Year;
        // console.log(tvShowDetails);
        if (tvYear >= '1990' && tvYear <= '2009') {
          displayTVDetails(tvShowDetails);
        } else {
          resultGridTV.innerText =
            'TV Show was not released between 1990 - 2009';
        }
      });
    });
  }

  function displayTVDetails(detailsTV) {
    const tvSearchBox = document.querySelector('#tv-title');
    const searchListTV = document.querySelector('#search-list-tv');
    const resultGridTV = document.querySelector('#result-grid-tv');
    let tvPoster;
    resultGridTV.innerHTML = `
    <div class="movie-poster">
    <img
      src="${
        detailsTV.Poster != 'N/A'
          ? detailsTV.Poster
          : '../assets/images/image_not_found.png'
      }"
      alt="movie poster"
    />
  </div>
  <div class="movie-info">
    <h3 class="movie-title">${detailsTV.Title}</h3>
    <ul class="movie-misc-info">
      <li class="year">Year: ${detailsTV.Year}</li>
    </ul>
    <p class="plot">
      <b>Plot:</b> ${detailsTV.Plot}
    </p>
  </div>
    `;
  }

  // findTvShow('Friends');

  // tvSearchBox.addEventListener('keyup', findTvShow);

  return (
    <div className="container" key={item.id}>
      <div className="row custom-row search-row">
        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
          <form>
            <h2>Search Movies</h2>
            <div className="form-group">
              <label for={item.searhID}></label>
              <input
                type="text"
                className="form-control"
                id={item.searchID}
                placeholder={item.placeHolder}
                onKeyDown={findTvShow}
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
