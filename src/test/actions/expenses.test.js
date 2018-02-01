import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should setup addExpense action with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

const createMockStore = configureMockStore([thunk]);

test('should add expense to DB and store', () => {
  const store = createMockStore({});
  const expenseData = {
    description: 'test',
    amount: 1000,
    note: 'test note',
    createdAt: 10000
  };

  return store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
    });
});

test('should add expense with defaults to DB and store', () => {
  const store = createMockStore({});
  const expenseData = {
    description : '',
    note : '',
    amount : 0,
    createdAt : 0
  };

  return store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
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
