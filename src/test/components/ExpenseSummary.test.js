import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should show multiple expenses correctly', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={2} expensesTotal={94} />);

  expect(wrapper).toMatchSnapshot();
});

test('should show 1 expense correctly', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={94} />);

  expect(wrapper).toMatchSnapshot();
});
