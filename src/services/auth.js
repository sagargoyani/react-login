import React from 'react';
import firebase from '../config/firebase';

const auth = {
  login: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  //   isAuthenticated: () => {
  //     console.log('firebase :::::::::::: ', firebase.auth().currentUser);
  //     if (firebase.auth().currentUser) {
  //       return true;
  //     } else {
  //       return false;
  //     }

  //     firebase.auth().currentUser(authenticated => {
  //         console.log('authenticatredf :::::::::: ', authenticated);
  //     });
  //   },
};

export default auth;
