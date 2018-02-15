import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <div className="page-header">
          <div className="content-container">
            <p className="page-header__title">Edit Expense</p>
            <div className="page-header__actions">
              <Link className="button simple valign-wrapper" to="/dashboard">Go back</Link>
            </div>
          </div>
        </div>
        <div className="content-container m-b-l">
          <ExpenseForm
            expense={ this.props.expense }
            onSubmit={ this.onSubmitHandler }
          />
          <button className="button grey red-text" onClick={ this.onClickHandler }>Remove Expense</button>
        </div>
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
