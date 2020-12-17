import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../AppHeader/Header";
import Landing from "../Landing/Landing";
import UserTimeLine from "../TimeLine/UserTimeLine/UserTimeLine";

export default class Main extends Component {
  render() {
    const {
      handleLogin,
      handleRegister,
      handleLogout,
      handlePopOver,
      registerPopOver,
      registerPopUp,
      loggedUser,
      username,
    } = this.props;
    return (
      <div className="main">
        <Header
          {...this.props}
          handleLogout={handleLogout}
          handlePopOver={handlePopOver}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          registerPopOver={registerPopOver}
        />
        <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Landing
              {...this.props}
              {...props}
              handlePopOver={handlePopOver}
              handleLogin={handleLogin}
              registerPopOver={registerPopOver}
              registerPopUp={registerPopUp}
              handleRegister={handleRegister}
            />
          )}
        />
        <Route
          exact
          path="/timeline"
          render={(props) => (
            <UserTimeLine
              {...this.props}
              {...props}
              loggedUser={loggedUser}
              username={username}
            />
          )}
          />
          </Switch>
      </div>
    );
  }
}
