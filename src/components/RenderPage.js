import React from 'react';

const RenderPage = (props) => {
  const RenderPages = this.state.pageContent.map((cont) => {
    return (
      <div className="row custom-row" key={cont.id}>
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
};

export default RenderPage;
