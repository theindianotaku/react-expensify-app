import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper ;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      filters={filters}
    />
  );
});

test('should render ExpenseListFilter properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt data properly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'test';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should set sort by date', () => {
  const value = 'date';
  const e = {
    target: { value }
  };
  wrapper.find('select').simulate('change', e);
  expect(sortByDate).toHaveBeenCalled();
});

test('should set sort by date', () => {
  const value = 'amount';
  const e = {
    target: { value }
  };
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', e);
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const args = {
    startDate: 1,
    endDate: 2
  };
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(args);
  expect(setStartDate).toHaveBeenLastCalledWith(args.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(args.endDate);
});

test('should handle date focus changes', () => {
  const calendarFocussed = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocussed);
  expect(wrapper.state('calendarFocussed')).toEqual(calendarFocussed);
});
