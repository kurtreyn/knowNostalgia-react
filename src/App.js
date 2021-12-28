import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
