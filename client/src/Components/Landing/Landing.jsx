import React, { Component } from "react";
import "../Landing/Landing.css";
import { Logo } from "../../Assets/Logo/LogoLarge.png";
import LoginPopUp from "../Login/LoginPopUp";
import UserRegisterPopUp from "../Login/UserRegisterPopUp";
import { withRouter, Route } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <>
        <div className="landing blur">
          <div className="preview">
            <p>
              CURA is your personal data management application. Every day we
              traverse the web on multiple devices - reading articles, watching
              videos, setting tasks, and sharing our thoughts. Each of these
              actions often requires its own application. Where did I watch that
              video last week? Who published that article I read last month?
              Which app did I write my grocery list in? Where did I write that
              note? CURA aims to organize these events in one seamless timeline
              so that nothing is ever on the tip of your tongue, but just a
              click away. Write notes, save articles, create task lists, and
              catalogue all your digital media with CURA.{" "}
            </p>
          </div>
        </div>
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
      </>
    );
  }
}

export default withRouter(Landing);
