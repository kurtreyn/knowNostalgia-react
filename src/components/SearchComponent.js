import React from 'react';

const SearchPage = ({ item }) => {
  async function loadEm(searchTitle) {
    const url = `https://omdbapi.com/?s=${searchTitle}&page=1&apikey=99e6a288`;
    const searchRes = await fetch(`${url}`);
    const data = await searchRes.json();
    if (data.Response === 'True') console.log(data.Search);
    if (data.Response === 'True') displayList(data.Search);
  }

  function findEm() {
    const searchBox = document.querySelector('#title');
    const searchList = document.getElementById('search-list');
    let searchTerm = searchBox.value.trim();
    // console.log(searchTerm);
    if (searchTerm.length > 0) {
      searchList.classList.remove('hide-search-list');
      loadEm(searchTerm);
    } else {
      searchList.classList.add('hide-search-list');
    }
  }

  function loadDetails() {
    const searchList = document.getElementById('search-list');
    const searchBox = document.querySelector('#title');
    const resultGrid = document.getElementById('result-grid');
    const searchListItems = searchList.querySelectorAll('.search-list-item');
    searchListItems.forEach((item) => {
      // console.log(item);
      item.addEventListener('click', async () => {
        // console.log(item.dataset.id);
        searchList.classList.add('hide-search-list');
        searchBox.value = '';
        const resDetails = await fetch(
          `https://www.omdbapi.com/?i=${item.dataset.id}&apikey=99e6a288`
        );
        const movieDetails = await resDetails.json();
        const movieYear = movieDetails.Year;
        // console.log(movieYear);
        if (movieYear >= '1990' && movieYear <= '2009') {
          displayDetails(movieDetails);
        } else {
          resultGrid.innerText = 'Movie was not released between 1990 - 2009';
        }
        const tvShowDetails = await resDetails.json();
        const tvYear = tvShowDetails.Year;
        // console.log(tvShowDetails);
        if (tvYear >= '1990' && tvYear <= '2009') {
          displayDetails(tvShowDetails);
        } else {
          resultGrid.innerText = 'TV Show was not released between 1990 - 2009';
        }
      });
    });
  }

  function displayDetails(details) {
    const resultGrid = document.getElementById('result-grid');
    resultGrid.innerHTML = `
    <div class="movie-poster">
    <img
      src="${
        details.Poster !== 'N/A'
          ? details.Poster
          : '../assets/images/image_not_found.png'
      }"
      alt="movie poster"
    />
  </div>
  <div class="movie-info">
    <h3 class="movie-title">${details.Title}</h3>
    <ul class="movie-misc-info">
      <li class="year">Year: ${details.Year}</li>
    </ul>
    <p class="plot">
      <b>Plot:</b> ${details.Plot}
    </p>
  </div>
    `;
  }

  function displayList(things) {
    const searchList = document.getElementById('search-list');
    // const resultGrid = document.getElementById('result-grid');
    let poster;
    searchList.innerHTML = '';
    for (let idx = 0; idx < things.length; idx++) {
      let movieListItem = document.createElement('div');
      let tvListItem = document.createElement('div');
      // console.log(movieListItem);
      movieListItem.dataset.id = things[idx].imdbID;
      tvListItem.dataset.id = things[idx].imdbID;
      movieListItem.classList.add('search-list-item');
      tvListItem.classList.add('search-list-item');
      if (things[idx].Poster !== 'N/A') {
        poster = things[idx].Poster;
      } else {
        poster = '../assets/images/image_not_found.png';
      }
      let movieYear = things[idx].Year;
      let movieType = things[idx].Type;
      let tvYear = things[idx].Year;
      let tvType = things[idx].Type;
      if (movieYear >= '1990' && movieYear <= '2009' && movieType === 'movie') {
        movieListItem.innerHTML = `
        <div class="search-list-item">
        <div class="search-item-thumbnail">
          <img src="${poster}" />
        </div>
      </div>
        `;
        searchList.appendChild(movieListItem);
      } else {
        movieListItem.innerHTML = `'../assets/images/image_not_found.png'`;
      }
      if (tvYear >= '1990' && tvYear <= '2009' && tvType === 'series') {
        tvListItem.innerHTML = `
        <div class="search-list-item">
        <div class="search-item-thumbnail">
          <img src="${poster}" />
        </div>
      </div>
        `;
        searchList.appendChild(tvListItem);
      } else {
        tvListItem.innerHTML = '../assets/images/image_not_found.png';
      }
    }
    loadDetails();
  }

  // function TVdisplayList(things) {
  //   const searchList = document.getElementById('search-list');
  //   // const resultGrid = document.getElementById('result-grid');
  //   let poster;
  //   searchList.innerHTML = '';
  //   for (let idx = 0; idx < things.length; idx++) {
  //     let tvListItem = document.createElement('div');
  //     // console.log(movieListItem);
  //     tvListItem.dataset.id = things[idx].imdbID;
  //     tvListItem.classList.add('search-list-item');
  //     if (things[idx].Poster !== 'N/A') {
  //       poster = things[idx].Poster;
  //     } else {
  //       poster = '../assets/images/image_not_found.png';
  //     }
  //     let tvYear = things[idx].Year;
  //     let tvType = things[idx].Type;
  //     if (tvYear >= '1990' && tvYear <= '2009' && tvType === 'series') {
  //       tvListItem.innerHTML = `
  //       <div class="search-list-item">
  //       <div class="search-item-thumbnail">
  //         <img src="${poster}" />
  //       </div>
  //     </div>
  //       `;
  //       searchList.appendChild(tvListItem);
  //     } else {
  //       tvListItem.innerHTML = '../assets/images/image_not_found.png';
  //     }
  //   }
  //   loadDetails();
  // }

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
                data-type={item.type}
                onKeyUp={findEm}
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
