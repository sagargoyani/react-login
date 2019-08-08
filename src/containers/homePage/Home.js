import React, {Component} from 'react';
import firebase from '../../config/firebase';

class Home extends Component {
  logOutUser = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <div className="container my-5">
        <h5 className="float-left">Home Page</h5>
        <button
          className="btn btn-primary float-right"
          onClick={this.logOutUser}
        >
          Sing Out
        </button>
      </div>
    );
  }
}
export default Home;
