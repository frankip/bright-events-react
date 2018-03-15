import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Main from './components/Main';

import { Provider } from 'react-redux';
import store from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default App;
