import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startEditExpense, startRemoveExpense } from '../thunks/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends Component {
  onSubmitHandler = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onClickHandler = () => {
    this.props.startRemoveExpense({ id : this.props.expense.id });
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <ExpenseForm
          expense={ this.props.expense }
          onSubmit={ this.onSubmitHandler }
        />
        <button onClick={ this.onClickHandler }>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startEditExpense: (id, expense) => {
      return dispatch(startEditExpense(id, expense));
    },
    startRemoveExpense: (data) => {
      return dispatch(startRemoveExpense(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
