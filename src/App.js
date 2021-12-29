import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Main />
      </HashRouter>
    );
  }
}

export default App;
