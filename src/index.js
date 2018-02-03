import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';
//import registerServiceWorker from './registerServiceWorker';

import { startSetExpenses } from './thunks/expenses';
import { firebase } from './firebase/firebase';

const store = configureStore();

const App = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading..</p>, document.getElementById('root'));
//registerServiceWorker();

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(App, document.getElementById('root')); 
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
});