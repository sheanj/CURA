import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../Header/Header";
import LoginPopUp from "../Login/LoginPopUp";
import UserRegisterPopUp from "../Login/UserRegisterPopUp";
import TextInput from "../TimeLine/TextInput/TextInput";
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
      registerPopUp
    } = this.props;
    return (
      <div>
        <Header
          {...this.props}
          handleLogout={handleLogout}
          handlePopOver={handlePopOver}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          registerPopOver={registerPopOver}
        />
        <Route exact path="/test">
          <TextInput />
        </Route>
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
          render={(props) => <UserTimeLine {...this.props} {...props} />}
        />
      </div>
    );
  }
}
