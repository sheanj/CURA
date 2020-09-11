import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import "./App.css";

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./Services/auth";

import Main from "./Components/Main/Main";

class App extends Component {
  state = {
    loggedUser: [],
    loginPopUp: false,
    registerPopUp: false,
    username: "",
  };

  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const loggedUser = await loginUser(userData);
    this.setState({
      loggedUser: loggedUser,
      username: loggedUser.username,
    });
    this.props.history.push("/timeline");
  };

  handleRegister = async (userData) => {
    const loggedUser = await registerUser(userData);
    this.setState({ loggedUser });
    this.props.history.push("/timeline");
  };

  handleLogout = () => {
    this.setState({
      loggedUser: null,
    });
    localStorage.removeItem("authToken");
    removeToken();
    this.props.history.push("/");
  };

  handleVerify = async () => {
    const loggedUser = await verifyUser();
    this.setState({ loggedUser });
  };

  handlePopOver = () => {
    this.setState({
      loginPopUp: true,
    });
  };

  registerPopOver = () => {
    this.setState({
      registerPopUp: true,
    });
  };

  render() {
    const { loggedUser, loginPopUp, registerPopUp, username } = this.state;
    const { handleLogin, handleLogout, handleRegister, handlePopOver, registerPopOver} = this;
    return (
      <div className='App'>
        <Route
          render={(props) => (
            <Main
              loggedUser={loggedUser}
              handleLogin={handleLogin}
              handleRegister={handleRegister}
              handleLogout={handleLogout}
              handlePopOver={handlePopOver}
              loginPopUp={loginPopUp}
              registerPopOver={registerPopOver}
              registerPopUp={registerPopUp}
              username={username}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
