import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBTruV31XROZ7RhvVpF7aH0156WiRuAzbc',
  authDomain: 'expensify-de6bd.firebaseapp.com',
  databaseURL: 'https://expensify-de6bd.firebaseio.com',
  projectId: 'expensify-de6bd',
  storageBucket: 'expensify-de6bd.appspot.com',
  messagingSenderId: '1009495622037'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};