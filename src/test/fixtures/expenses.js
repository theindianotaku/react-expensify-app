import moment from 'moment';

export default [{
  id: '1',
  description: 'gum bills',
  note: '',
  amount: 1000,
  createdAt: 0
}, {
  id: '2',
  description: 'rent',
  note: '',
  amount: 100,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'fees',
  note: '',
  amount: 4550,
  createdAt: moment(0).add(4, 'days').valueOf()
}];
