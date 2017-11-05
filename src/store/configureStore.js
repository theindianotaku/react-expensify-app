import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filtersReducer';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer ,
      filters: filtersReducer
    })
  );

  return store;
};
