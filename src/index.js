import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';
//import registerServiceWorker from './registerServiceWorker';

import { addExpense } from './actions/expenses';
// import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500, createdAt: 1516546283047}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 1000, createdAt: 1516546283048}));
store.dispatch(addExpense({description: 'Rent', amount: 9000, createdAt: 1516546283049}));

const App = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
//registerServiceWorker();
