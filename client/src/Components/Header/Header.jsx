import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Logo from '../../Assets/Logo/CURA.png';
import '../Header/Header.css';

export default class Header extends Component {
  render() {
    return (
      // <header>
      //   {localStorage.getItem("authToken") ?
      //     (<Link to='/timeline'><img src={Logo} /></Link>) :
      //     (<Link to='/'><img src={Logo} /></Link>)}
      //   {this.props.loggedUser ?
      //     <button onClick={this.props.handleLogout}>LOGOUT</button>
      //     :
      //     <>
      //       <button onClick={this.props.handlePopOver}>Log In</button>
      //       <button onClick={this.props.registerPopOver}>Register</button>
      //     </>
      //   }
      // </header>
      <header>
        <Route path="/" exact><button onClick={this.props.registerPopOver}>REGISTER</button></Route>
        {localStorage.getItem("authToken") ?
          (<Link to='/timeline'><img src={Logo} /></Link>) :
          (<Link to='/'><img src={Logo} /></Link>)}
        {this.props.loggedUser ?
          <button onClick={this.props.handleLogout}>LOGOUT</button>
          :
          <>
            <button onClick={this.props.handlePopOver}>LOGIN</button>
          </>
        }
      </header>
    )
  }
}
