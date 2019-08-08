import React, {Component} from 'react';
import firebase from '../../config/firebase';

class Home extends Component {

  logOutUser = () => {
    firebase.auth().signOut();
   };
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <button  onClick={this.logOutUser}>Sing Out</button>
      </div>
    );
  }
}
export default  Home;
