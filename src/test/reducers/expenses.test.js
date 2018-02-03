import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set the default state', () => {
  const result = expensesReducer(undefined, {});
  expect(result).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'chocolates',
    note: '',
    amount: 2500,
    createdAt: 5000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'bought gum'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([{
    ...expenses[0],
    ...updates
  }, expenses[1], expenses[2]]);
});

test('should not edit expenses on id unmatch', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '100',
    updates: {
      description: 'bought gum'
    }
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should set expenes', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: expenses[0]
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses[0]);
});
