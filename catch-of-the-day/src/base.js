// import react firebase specific package
import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDRHBczf-lJ96f8m2KNiS0HuwguLI8Q4vA',
  authDomain: 'catch-of-the-day-yannick.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-yannick.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
