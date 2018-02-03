import { addExpense, editExpense, removeExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should setup addExpense action with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should set up editExpense action', () => {
  const action = editExpense('123', 'abc');
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: 'abc'
  });
});

test('should set up removeExpense action', () => {
  const action = removeExpense({ id : '123' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('should set up setExpenses object with provided values', () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});
