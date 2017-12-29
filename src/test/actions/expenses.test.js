import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup addExpense action with provided values', () => {
  const expenseData = {
    description: 'rent',
    note: 'months rent',
    amount: '20',
    createdAt: '123'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup addExpense action with defaul values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      amount: 0,
      createdAt: 0,
      description: '',
      note: ''
    }
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
