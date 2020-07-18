import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { loginUser, registerUser, removeToken, verifyUser } from './Services/auth';

import Main from './Components/Main/Main';


class App extends Component {
  state = {
    loggedUser: null,
    username: ''
  }

  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const loggedUser = await loginUser(userData);
    this.setState({ loggedUser })
  }

  handleRegister = async (userData) => {
    const loggedUser = await registerUser(userData);
    this.setState({ loggedUser });
  }

  handleLogout = () => {
    this.setState({
      loggedUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/');
  }

  handleVerify = async () => {
    const loggedUser = await verifyUser();
    this.setState({ loggedUser });
  }

  render() {
    return (
      <div>
        {/* <Header
          loggedUser={this.state.loggedUser}
          handleLogout={this.handleLogout}
        /> */}
        <Main
          loggedUser={this.state.loggedUser}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
          handleLogout={this.handleLogout}
        />
        
      </div>
    )
  }
}

export default withRouter(App);