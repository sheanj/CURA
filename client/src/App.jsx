import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';


import { loginUser, registerUser, removeToken, verifyUser } from './Services/auth';

import Main from './Components/Main/Main';


class App extends Component {
  state = {
    loggedUser: null,
    username: '',
    loginPopUp: false, 
    registerPopUp: false
  }

  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const loggedUser = await loginUser(userData);
    this.setState({ loggedUser })
    this.props.history.push('/timeline')
  }

  handleRegister = async (userData) => {
    const loggedUser = await registerUser(userData);
    this.setState({ loggedUser });
    this.props.history.push('/timeline')
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

  handlePopOver = () => {
    this.setState({ 
      loginPopUp: true
    })
  }

  registerPopOver = () => {
    this.setState({
      registerPopUp: true
    })
  }

  render() {
    return (
      <div>
        <Route
        render={(props) => (<Main
          loggedUser={this.state.loggedUser}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
          handleLogout={this.handleLogout}
          handlePopOver={this.handlePopOver}
          loginPopUp={this.state.loginPopUp}
          registerPopOver={this.registerPopOver}
          registerPopUp={this.state.registerPopUp}
          {...props}
        />)}
        />
      </div>
    )
  }
}

export default withRouter(App);