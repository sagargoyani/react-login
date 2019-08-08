import React, {Component} from 'react';
// import auth from '../../services/auth';
import auth from '../../services/auth';
import {history} from '../../App';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };
  handleSubmit = event => {
    event.preventDefault();
    const {email, password} = this.state;
    console.log(email, password);
    auth
      .login(email, password)
      .then(user => {
        console.log(user);
        this.setState({
          error: null,
        });
        history.push('/home');
      })
      .catch(error => {
        this.setState({
          error: error.message,
        });
      });
  };
  render() {
    const {email, password, error} = this.state;
    return (
      <>
        <p>Login Form </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={this.handleInputChange}
          />
          <button type="submit">Sign In</button>
        </form>
        <h4>{error}</h4>
      </>
    );
  }
}

export default Login;
