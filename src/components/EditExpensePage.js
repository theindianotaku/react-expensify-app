import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends Component {
  onSubmitHandler = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onClickHandler = () => {
    this.props.removeExpense({ id : this.props.expense.id });
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
    editExpense: (id, expense) => {
      return dispatch(editExpense(id, expense));
    },
    removeExpense: (data) => {
      return dispatch(removeExpense(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
