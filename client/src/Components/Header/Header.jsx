import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/Logo/CURA.png';
import '../Header/Header.css';

export default class Header extends Component {
  render() {
    // if (this.props.loggedUser)
    return (
      <header>
        <Link to='/'><img src={Logo} /></Link>
        {this.props.loggedUser ?
          <button onClick={this.props.handleLogout}>LOGOUT</button>
          :
          <>
            <Link to='/login'><button>Log In</button></Link> 
            <Link to='/register'><button>Register</button></Link>
          </>
        }
      </header>
    )
  }
}
