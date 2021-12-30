import React from 'react';
import { PageContent } from '../shared/PageContent';

const RenderPage = ({ item }) => {
  const pageSetup = function (e) {
    // let content = PageContent.map((cont) => {});

    const factCont = document.querySelectorAll('[data-container]');
    const factPageBtns = document.querySelectorAll('[data-fact-button]');
    let curFB = '';
    let curCont = '';
    curFB = e.target.getAttribute('data-fact-button');
    // console.log(`current button is ${curFB}`);

    for (let y = 0; y < factCont.length; y++) {
      curCont = factCont[y].getAttribute('data-container');

      let originalText = factCont[y].innerText;
      let initBtnTxt = factPageBtns[y].innerText;

      if (curCont === curFB) {
        // console.log(`current container is: ${curCont}`);
        // console.log(`it's a match`);
        // console.log(factCont[y]);

        function delta() {
          factCont[y].innerText = PageContent[0].trivia;
          factPageBtns[y].innerText = 'close';
          // console.log(`factContY is ${factCont[y]}`);
        }

        const unDelta = function () {
          factCont[y].innerText = originalText;
          factPageBtns[y].innerText = initBtnTxt;
          curFB = '';
          curCont = '';
          // console.log(`curFB is now ${curFB} curCont is now ${curCont}`);
        };

        switch (curCont) {
          case 'anchorman':
            factCont.innerText = '';
            delta();
            break;
          case 'cloverfield':
            factCont.innerText = '';
            delta();
            break;
          case 'donnie-darko':
            factCont.innerText = '';
            delta();
            break;
          case 'bittersweet':
            factCont.innerText = '';
            delta();
            break;
          case 'spirit':
            factCont.innerText = '';
            delta();
            break;
          case 'hammer':
            factCont.innerText = '';
            delta();
            break;
          case 'south-park':
            factCont.innerText = '';
            delta();
            break;
          case 'sopranos':
            factCont.innerText = '';
            delta();
            break;
          case 'dexter':
            factCont.innerText = '';
            delta();
            break;
          case 'god-of-war':
            factCont.innerText = '';
            delta();
            break;
          case 'half-life':
            factCont.innerText = '';
            delta();
            break;
          case 'mario':
            factCont.innerText = '';
            delta();
            break;
        }
      }
    }
  };

  return (
    <div className="container" key={item.id}>
      <div className="row custom-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-col">
          <h2 className="movie-h2 badge-pill">{item.title}</h2>

          <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
            <div
              className="page-fact-container d-flex flex-column"
              data-container={item.name}
            >
              {item.info}
            </div>
            <button
              className="btn btn-primary mt-auto badge-pill btn-fun-fact-page"
              data-fact-button={item.name}
              onClick={pageSetup}
            >
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderPage;
