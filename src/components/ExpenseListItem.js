import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, amount, createdAt, description }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => dispatch(removeExpense({ id }))}>X</button>
  </div>
);

export default connect()(ExpenseListItem);
