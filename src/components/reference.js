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

// ----------

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
