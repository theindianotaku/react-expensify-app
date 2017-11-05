import React from 'react';

const ExpenseListItem = ({ amount, createdAt, description }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
