import React, { Component } from 'react'


export default class LoginPopUp extends Component {
  state = {
    username: '', 
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target; 
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLogin, history } = this.props;
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin(this.state);
          history.push('/')
        }}>
          <h1>Welcome Back!</h1>
          <input 
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={this.handleChange}
            required
          />
          <input 
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          {/* <Link to="/register"><h6>Need an account?</h6></Link> */}
          <button>Login</button>
        </form>
      </div>
    )
  }
}
