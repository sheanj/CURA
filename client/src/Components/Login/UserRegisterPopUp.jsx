import React, { Component } from "react";
import './UserRegisterPopUp.css'
import PFP from '../../Assets/PFP.png'

export default class UserRegisterPopUp extends Component {
  state = {
    name: "",
    username: "",
    phone_number: "",
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
    const { name, username, phone_number, email, password } = this.state;
    const { handleRegister, history, handleLogin } = this.props;
    return (
      <div className='register'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(this.state);
            handleLogin(this.state);
            history.push("/timeline");
          }}
        >
          <h1>Register</h1>
          <div className='pfpRegisterUpload'>
            <input type='file' className='profilePhotoUpload' />
            <img src={PFP} className='profilePhotoBlank' />
            <div className="nameRegisterInput"><input
              className="registerName"
            type='text'
            placeholder="Name"
            name='name'
            value={name}
            onChange={this.handleChange}
          /></div>
          </div>
          <input
            type='text'
            placeholder='Create a username...'
            name='username'
            value={username}
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder="What's your phone number?"
            name='phone_number'
            value={phone_number}
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Please provide your email...'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            placeholder='Create a password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
