import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import './static/app.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
