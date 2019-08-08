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
    const {email, password, error} = this.state;
    if (email === '' || password === '') {
      this.setState({error: 'Error : Form Data Required!'});
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.setState({error: 'Error : Email Is Invalid!'});
    } else {
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
            error: 'Error : ' + error.message,
          });
        });
    }
  };
  render() {
    const {email, password, error} = this.state;
    return (
      <div className="container my-5">
        <h5>Login Form </h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary float-left">
            Submit
          </button>
          <p className="text-danger float-right">{error}</p>
        </form>
      </div>
    );
  }
}

export default Login;
