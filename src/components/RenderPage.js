import React from 'react';

const RenderThePage = ({ item }) => {
  return (
    <div className="row custom-row" key={item.id}>
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
          >
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

const RenderPage = (props) => {
  return <RenderThePage item={props.pageContent} />;
};

export default RenderPage;
