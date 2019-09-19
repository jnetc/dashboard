 // Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'

 // WIZENSE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBEXIWj8OSsxUjm4EPogPeDU9aZb92csk8",
  authDomain: "petsense-dev.firebaseapp.com",
  databaseURL: "http://petsense-dev.firebaseio.com",
  projectId: "petsense-dev",
  storageBucket: "petsense-dev.appspot.com",
  messagingSenderId: "113837783730"
};

  // TEST FIREBASE
// const firebaseConfig = {
//   apiKey: "AIzaSyANJH64IafNWab8vNJQ8qSQd6hm5KKh7vY",
//   authDomain: "testdb-d9fc3.firebaseapp.com",
//   databaseURL: "https://testdb-d9fc3.firebaseio.com",
//   projectId: "testdb-d9fc3",
//   storageBucket: "testdb-d9fc3.appspot.com",
//   messagingSenderId: "422026067644",
//   appId: "1:422026067644:web:162ce687612f5258"
// };
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }