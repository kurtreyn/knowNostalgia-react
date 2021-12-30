import React from 'react';

const RenderPage = ({ item }) => {
  // const testClick = function () {
  //   console.log(`clicked`);
  // };

  const pageSetup = function (e) {
    const factCont = document.querySelectorAll('[data-container]');
    const factPageBtns = document.querySelectorAll('[data-fact-button]');
    let curFB = '';
    let curCont = '';
    const closeBtn = document.createElement('button');
    const parentCol = document.querySelectorAll('.btn-parent');

    closeBtn.classList.add('btn', 'mt-auto', 'badge-pill', 'btn-fun-fact-page');
    closeBtn.innerText = 'close';

    curFB = e.target.getAttribute('data-fact-button');
    // console.log(`current button is ${curFB}`);

    for (let y = 0; y < factCont.length; y++) {
      curCont = factCont[y].getAttribute('data-container');

      if (curCont === curFB) {
        // console.log(`current container is: ${curCont}`);
        // console.log(`it's a match`);
        // console.log(factCont[y]);

        function delta(props) {
          if ((factPageBtns[y].innerText = 'Find Out More')) {
            factCont[y].innerText = item.trivia;
            factCont[y].classList.add('delta');
            factPageBtns[y].innerText = 'close';
            factPageBtns[y].style.display = 'none';
            parentCol[y].appendChild(closeBtn);
          } else {
            factCont[y].innerText = item.info;
            factPageBtns[y].innerText = 'Find Out More';
            curFB = '';
            curCont = '';
          }
        }

        const unDelta = function () {
          factCont[y].innerText = item.info;
          factPageBtns[y].innerText = 'Find Out More';
          factCont[y].classList.remove('delta');
          parentCol[y].removeChild(closeBtn);
          factPageBtns[y].style.display = 'block';
          curFB = '';
          curCont = '';
          // console.log(`curFB is now ${curFB} curCont is now ${curCont}`);
        };

        closeBtn.addEventListener('click', unDelta);

        switch (curCont) {
          case 'anchorman':
            delta();
            break;
          case 'cloverfield':
            delta();
            break;
          case 'donnie-darko':
            delta();
            break;
          case 'bittersweet-symphony':
            delta();
            break;
          case 'teen-spirit':
            delta();
            break;
          case 'cant-touch-this':
            delta();
            break;
          case 'south-park':
            delta();
            break;
          case 'sopranos':
            delta();
            break;
          case 'dexter':
            delta();
            break;
          case 'god-of-war':
            delta();
            break;
          case 'half-life':
            delta();
            break;
          case 'mario':
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

          <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 btn-parent">
            <div
              className="page-fact-container d-flex flex-column"
              data-container={item.name}
            >
              <p>{item.info}</p>
            </div>
            <button
              className="btn mt-auto badge-pill btn-fun-fact-page"
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
