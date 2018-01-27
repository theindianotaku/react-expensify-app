import React, { Component } from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummary from './ExpenseSummary';

class App extends Component {
  render() {
    return (
      <div>
        <ExpenseSummary />
        <ExpenseListFilter />
        <ExpenseList />
      </div>
    );
  }
}

export default App;
