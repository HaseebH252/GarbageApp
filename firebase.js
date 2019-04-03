import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAhqPILYiQz4-f5pIy3lYXz-GIDYqTZcuI",
  authDomain: "https://garbageapp-d3bd6.firebaseapp.com/",
  databaseURL: "http://garbageapp-d3bd6.firebaseio.com",
  projectId:"garbageapp-d3bd6",
  storageBucket: "gs://garbageapp-d3bd6.appspot.com",
  messagingSenderId: "347169073887"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
