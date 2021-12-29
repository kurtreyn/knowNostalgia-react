import React, { Component } from 'react';
import { PageContent } from '../shared/PageContent';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageContent: PageContent,
    };
  }

  pageSetup() {
    const factCont = document.querySelectorAll('[data-container]');
    const factPageBtns = document.querySelectorAll('[data-fact-button]');
    let curFB = '';
    let curCont = '';
    let para = document.createElement('p');

    curFB = this.getAttribute('data-fact-button');
    // console.log(`current button is ${curFB}`);

    for (let y = 0; y < factCont.length; y++) {
      // console.log(factCont[y]);
      curCont = factCont[y].getAttribute('data-container');
      // console.log(`current container is ${curCont}`);

      let originalText = factCont[y].innerText;
      let initBtnTxt = factPageBtns[y].innerText;

      if (curCont === curFB) {
        console.log(`current container is: ${curCont}`);
        console.log(`it's a match`);
        console.log(factCont[y]);

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

        // switch (curCont) {
        //   case 'anchorman':
        //     para.innerText = facts.anchorman;
        //     delta();
        //     break;
        //   case 'cloverfield':
        //     para.innerText = facts.cloverfield;
        //     delta();
        //     break;
        //   case 'donnie-darko':
        //     console.log(`current cont is now ${curCont}`);
        //     para.innerText = facts.donnieDarko;
        //     delta();
        //     break;
        //   case 'bittersweet':
        //     para.innerText = facts.bittersweetSymphony;
        //     delta();
        //     break;
        //   case 'spirit':
        //     para.innerText = facts.teenSpirit;
        //     delta();
        //     break;
        //   case 'hammer':
        //     para.innerText = facts.hammer;
        //     delta();
        //     break;
        //   case 'south-park':
        //     para.innerText = facts.southPark;
        //     delta();
        //     break;
        //   case 'sopranos':
        //     para.innerText = facts.sopranos;
        //     delta();
        //     break;
        //   case 'dexter':
        //     para.innerText = facts.dexter;
        //     delta();
        //     break;
        //   case 'god-of-war':
        //     para.innerText = facts.godOfWar;
        //     delta();
        //     break;
        //   case 'half-life':
        //     para.innerText = facts.halfLife;
        //     delta();
        //     break;
        //   case 'mario':
        //     para.innerText = facts.mario64;
        //     delta();
        //     break;
        //   default:
        //     '';
        // }

        for (const fpb of factPageBtns) {
          if (fpb.innerText === 'close') {
            fpb.addEventListener('click', unDelta);
          } else {
            curCont = curFB;
          }
        }
      }
    }
  }

  render() {
    const RenderPage = this.state.pageContent.map((cont) => {
      return (
        <div key={cont.id}>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img src={cont.image} alt={cont.title} />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
            <h2 className="movie-h2 badge-pill">{cont.title}</h2>

            <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
              <div
                className="page-fact-container d-flex flex-column"
                data-container={cont.name}
              >
                {cont.info}
              </div>
              <button
                className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
                data-fact-button={cont.name}
                onClick={this.pageSetup}
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row custom-row">{RenderPage}</div>
      </div>
    );
  }
}

export default Page;

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
