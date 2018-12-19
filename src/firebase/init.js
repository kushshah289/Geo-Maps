import firebase from 'firebase';
import firestore from 'firebase/firestore';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQbVYqgLagGD0YD5JBd7M1b3dkJaDW2sA",
    authDomain: "geo-ninjas-f9714.firebaseapp.com",
    databaseURL: "https://geo-ninjas-f9714.firebaseio.com",
    projectId: "geo-ninjas-f9714",
    storageBucket: "geo-ninjas-f9714.appspot.com",
    messagingSenderId: "716673129491"
  };
  // try{
  //   //firebase.initializeApp(config);
  // }
  // catch(err){
  //   console.log(err);
  // }
  
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampsInSnapshots: true
});

export default firebaseApp.firestore();
