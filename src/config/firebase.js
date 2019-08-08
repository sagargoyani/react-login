import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCgpyK2749pcqLcQendoCbJ-jPqGy1p1f4',
  authDomain: 'reat-auth-demo.firebaseapp.com',
  databaseURL: 'https://reat-auth-demo.firebaseio.com',
  projectId: 'reat-auth-demo',
  storageBucket: '',
  messagingSenderId: '849885588076',
  appId: '1:849885588076:web:66a08c6de0262776',
};

firebase.initializeApp(config);

export default firebase;
