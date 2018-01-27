import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

let totalAmount;

test('should return 0 if no expenses', () => {
  totalAmount = getExpensesTotal([]);
  expect(totalAmount).toBe(0);
});

test('should add correctly 1 expense', () => {
  totalAmount = getExpensesTotal([expenses[0]]);
  expect(totalAmount).toBe(expenses[0].amount);
});

test('should add correctly multiple expenses', () => {
  totalAmount = getExpensesTotal(expenses);
  expect(totalAmount).toBe(5650);
});
