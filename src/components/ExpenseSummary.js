import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <p className="page-header__title">Viewing <strong>{expenseCount}</strong> {expenseWord} totalling <strong>{formattedExpensesTotal}</strong></p>
        <div className="page-header__actions">
          <Link className="button simple valign-wrapper" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let selectedExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount : selectedExpenses.length,
    expensesTotal : getExpensesTotal(selectedExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
