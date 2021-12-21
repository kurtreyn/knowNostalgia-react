import React from 'react';
import semiCharmed from '../images/thirdEyeBlind-semiCharmedLife.jpg';

const CardElement = (image) => {
  return (
    <div className="card h-100">
      <img className="card-img-top" src="" alt="album cover" />
      <div className="fact-container hide-item" id="semi-charmed">
        <button type="button" className="close close-button" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="fact-info"></div>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Music</h5>
        <p className="card-text">
          Semi-Charmed Life by Third Eye Blind was released in 1997.
        </p>
        <button
          className="btn btn-primary mt-auto btn-fun-fact musicAttrib"
          data-fact="semi-charmed"
        >
          Fun Fact
        </button>
      </div>
    </div>
  );
};

export default CardElement;
