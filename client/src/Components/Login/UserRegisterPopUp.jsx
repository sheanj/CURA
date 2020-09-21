import React, { Component } from "react";
import "./UserRegisterPopUp.css";
import PFP from "../../Assets/PFP.png";
import api from '../Services/api-helper'

export default class UserRegisterPopUp extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      name,
      username,
      email,
      password,
      profilePhoto,
    } = this.state;
    const { handleRegister, history, handleLogin } = this.props;
    const { imageHandler, handleChange } = this;
    return (
      <div className='register'>
        <div className='registerHeader'></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(this.state);
          }}
        >
            <div className='nameRegisterInput'>
              <input
                className='registerName'
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={handleChange}
              />
            </div>
          <input
            type='text'
            placeholder='Create a username...'
            name='username'
            value={username}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Please provide your email...'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Create a password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
