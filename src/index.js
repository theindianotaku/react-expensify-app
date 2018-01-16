import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.css';
//import registerServiceWorker from './registerServiceWorker';

import { addExpense } from './actions/expenses';
// import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500, createdAt: 2000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 1000, createdAt: 8000}));
store.dispatch(addExpense({description: 'Rent', amount: 9000, createdAt: 5000}));

// const state = store.getState();
//
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//
// console.log(visibleExpenses);

const App = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
//registerServiceWorker();
