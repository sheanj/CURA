import React, { Component } from "react";
import "../Landing/Landing.css";
import LoginPopUp from "../Login/LoginPopUp";
import UserRegisterPopUp from "../Login/UserRegisterPopUp";
import { withRouter, Route } from 'react-router-dom';
import LandingImg from '../../Assets/Landing/LANDING.png'

class Landing extends Component {
  render() {
    return (
      <div className="landingContainer">
        {this.props.loginPopUp ? (
          <LoginPopUp handleLogin={this.props.handleLogin} />
        ) : (
          <></>
        )}
        {this.props.registerPopUp ? (
          <Route
          render={(props) => (
            <UserRegisterPopUp
              {...this.props}
              {...props}
              handleRegister={this.props.handleRegister}
            />
          )}
        />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default withRouter(Landing);
