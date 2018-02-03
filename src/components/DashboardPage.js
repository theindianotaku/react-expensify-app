import React, { Component } from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummary from './ExpenseSummary';

class DashboardPage extends Component {
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

export default DashboardPage;
