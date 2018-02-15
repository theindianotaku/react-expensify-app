import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';

import 'normalize.css/normalize.css';
import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';
//import registerServiceWorker from './registerServiceWorker';

import { login, logout } from './actions/auth';
import { startSetExpenses } from './thunks/expenses';
import { firebase } from './firebase/firebase';

const store = configureStore();

const App = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(App, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses())
      .then(() => {
        renderApp();
        if(history.location.pathname === '/') {
          history.push('/dashboard');
        }
      });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
