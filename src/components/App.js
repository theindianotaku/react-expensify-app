import React, { Component } from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

class App extends Component {
  render() {
    return (
      <div>
        <ExpenseListFilter />
        <ExpenseList />
      </div>
    );
  }
}

export default App;
