import React from 'react';

const RenderHeader = ({ item }) => {
  return (
    <header>
      <div className="jumbotron-fluid">
        <div className="container-fluid hero-container">
          <img src={item.heroImage} alt="hero" />
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center logo-column">
        <img
          src={item.pageTitleImage}
          alt="header logo"
          className="img-fluid logo-header"
        />
      </div>
    </header>
  );
};

export default RenderHeader;
