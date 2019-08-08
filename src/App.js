import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Login from './containers/loginComponent';
import Home from './containers/homePage/Home';
import NotFound from './containers/notFoundPage/NotFound';
import {PrivateRoute, PublicRoute} from '../src/components/Routes';
import {createBrowserHistory} from 'history';
import firebase from './config/firebase';

export const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      loading: true,
    };
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(authenticated => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
            loading: false,
          }))
        : this.setState(() => ({
            authenticated: false,
            loading: false,
          }));
    });
  }

  render() {
    const {authenticated, loading} = this.state;
    if(loading){
      return (
        <div>
          Loading ...
        </div>
      )
    }
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <PublicRoute
              exact
              path="/"
              authenticated={authenticated}
              component={Login}
            />
            <PrivateRoute
              exact
              path="/home"
              authenticated={authenticated}
              component={Home}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
