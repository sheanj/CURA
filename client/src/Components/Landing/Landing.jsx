import React, { Component } from "react";
import "./Landing.css";
import LoginPopUp from "../Login/LoginPopUp";
import UserRegisterPopUp from "../Login/UserRegisterPopUp";
import { withRouter, Route } from "react-router-dom";
import ClockWidget from "../Widgets/Clock/ClockWidget.jsx";
import CalendarWidget from "../Widgets/Calendar/CalendarWidget";
import Weather from "../Widgets/Weather/Weather";
import TimeLinePreview from '../../Assets/Landing/TimeLinePreview.png'

class Landing extends Component {
  state = {
    windowHeight: '',
    loginComponent: false
  }

  componentDidMount() {
    this.setState({
      windowHeight: this.getWindowHeight()
    })
  }

  launchLoginScreen = () => {
    this.setState((prevState) => ({
      loginComponent: !prevState.loginComponent
    }))
  }
  getWindowHeight = () => {
    return window.innerHeight - 79
  }
  render() {
    return (
      <div className='landingContainer'>
        <div
          className='landingScreenOne'
          style={{ height: this.state.windowHeight }}
        >
          <div className='landingRowOne'>
            <div className='weatherPreview'>
              <Weather />
            </div>
          </div>
          <div className='landingHeader'>
            <div className='clockPreview'>
              <ClockWidget />
            </div>
            <div className='landingMessage'>
              <h2>Your days are hectic.</h2>
              <h1>Manage them.</h1>
              <div className='cta'>
                <button onClick={this.props.registerPopOver}>SIGN UP</button>
              </div>
            </div>
          </div>
          <div className='landingRowThree'>
            <div className='calendarPreview'>
              <CalendarWidget />
            </div>
          </div>
        </div>
        <div
          className='landingScreenTwo'
          style={{ height: this.state.windowHeight }}
        >
          <div className="timelinePreview"><img src={TimeLinePreview} /></div>
          <div className="timeLinePreviewCopy">
            <h1>Organize Each Day with <br />Timeline</h1>
            <h4>Render notes and links, and upload photos to your daily Timeline</h4>
            <h4>Helpful widgets like News and Weather keep you up to date on current events.</h4>
              <h4>CURA is your hub for daily digital management.</h4>
            <h3></h3>
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
      </div>
    );
  }
}

export default withRouter(Landing);
