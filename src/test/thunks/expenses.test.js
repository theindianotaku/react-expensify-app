import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import database from '../../firebase/firebase';
import { startAddExpense, startSetExpenses, startRemoveExpense } from '../../thunks/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({id, description, amount, note, createdAt}) => {
    expenseData[id] = {description, note, amount, createdAt};
  });

  database.ref('expenses').set(expenseData).then(() => done());
});

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

test('should fetch the data from firebase store', () => {
  const store = createMockStore({});

  return store.dispatch(startSetExpenses())
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
    });
});

test('should remove expense from firebase', () => {
  const store = createMockStore({});
  const id = expenses[2].id;

  return store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });

      return database.ref(`expenses/${ id }`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
    });
});