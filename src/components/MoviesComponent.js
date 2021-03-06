import React, { Component } from 'react';

class Movies extends Component {
  render() {
    return (
      <div className="container">
        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img src="../assets/images/movies-anchorman.jpg" alt="Anchorman" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">Anchorman</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="anchorman"
              >
                Ron Burgundy is San Diego's top-rated newsman in the
                male-dominated broadcasting of the 1970s, but that's all about
                to change for Ron and his cronies when an ambitious woman is
                hired as a new anchor.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="anchorman"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img
              src="../assets/images/movies-cloverfield.jpg"
              alt="cloverfield"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">Cloverfield</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="cloverfield"
              >
                A group of friends venture deep into the streets of New York on
                a rescue mission during a rampaging monster attack.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="cloverfield"
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>

        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img
              src="../assets/images/movies-donnie-darko.jpg"
              alt="donnie darko"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">Donnie Darko</h2>
            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container="donnie-darko"
              >
                After narrowly escaping a bizarre accident, a troubled teenager
                is plagued by visions of a man in a large rabbit suit who
                manipulates him to commit a series of crimes.
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button="donnie-darko"
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
                <label for="movieTitle"></label>
                <input
                  type="text"
                  className="form-control"
                  id="movie-title"
                  placeholder="Search for a Movie"
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

export default Movies;

/*
const factCont = document.querySelectorAll('[data-container]');
const factPageBtns = document.querySelectorAll('[data-fact-button]');
let curFB = '';
let curCont = '';

// const testClick = function () {
//   console.log(`test click`);
// };

const pageSetup = function () {
  curFB = this.getAttribute('data-fact-button');
  // console.log(`current button is ${curFB}`);

  for (let y = 0; y < factCont.length; y++) {
    // console.log(factCont[y]);
    curCont = factCont[y].getAttribute('data-container');
    // console.log(`current container is ${curCont}`);

    let originalText = factCont[y].innerText;
    let initBtnTxt = factPageBtns[y].innerText;

    if (curCont === curFB) {
      // console.log(`current container is: ${curCont}`);
      // console.log(`it's a match`);
      // console.log(factCont[y]);

      function delta() {
        factCont[y].innerText = '';
        // factCont[y].classList.add('delta');
        factPageBtns[y].innerText = 'close';
        factCont[y].appendChild(para);
        // console.log(`factContY is ${factCont[y]}`);
      }

      const unDelta = function () {
        para.innerText = '';
        factCont[y].innerText = originalText;
        factPageBtns[y].innerText = initBtnTxt;
        curFB = '';
        curCont = '';
        // console.log(`curFB is now ${curFB} curCont is now ${curCont}`);
      };

      switch (curCont) {
        case 'anchorman':
          para.innerText = facts.anchorman;
          delta();
          break;
        case 'cloverfield':
          para.innerText = facts.cloverfield;
          delta();
          break;
        case 'donnie-darko':
          console.log(`current cont is now ${curCont}`);
          para.innerText = facts.donnieDarko;
          delta();
          break;
        case 'bittersweet':
          para.innerText = facts.bittersweetSymphony;
          delta();
          break;
        case 'spirit':
          para.innerText = facts.teenSpirit;
          delta();
          break;
        case 'hammer':
          para.innerText = facts.hammer;
          delta();
          break;
        case 'south-park':
          para.innerText = facts.southPark;
          delta();
          break;
        case 'sopranos':
          para.innerText = facts.sopranos;
          delta();
          break;
        case 'dexter':
          para.innerText = facts.dexter;
          delta();
          break;
        case 'god-of-war':
          para.innerText = facts.godOfWar;
          delta();
          break;
        case 'half-life':
          para.innerText = facts.halfLife;
          delta();
          break;
        case 'mario':
          para.innerText = facts.mario64;
          delta();
          break;
        default:
          '';
      }

      for (const fpb of factPageBtns) {
        if (fpb.innerText === 'close') {
          fpb.addEventListener('click', unDelta);
        } else {
          curCont = curFB;
        }
      }
    }
  }
};

for (const fb of factPageBtns) {
  fb.addEventListener('click', pageSetup);
}



*/
