import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, startEditExpense, startRemoveExpense , history;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
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
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2]['id'], expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('Click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id : expenses[2]['id'] });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
