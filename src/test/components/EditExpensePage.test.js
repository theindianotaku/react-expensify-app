import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, removeExpense , history;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      expense={expenses[2]}
      history={history}
    />
  );
});

test('should render EditExpensePage properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const expense = {
    createdAt: 100,
    note: '',
    amount: 100,
    description: 'new expense'
  };

  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2]['id'], expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('Click');
  expect(removeExpense).toHaveBeenLastCalledWith({ id : expenses[2]['id'] });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
