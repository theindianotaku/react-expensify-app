import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';

import 'normalize.css/normalize.css';
import './styles/styles.css';
//import registerServiceWorker from './registerServiceWorker';

const routes = (
  <BrowserRouter>

  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
//registerServiceWorker();
