import React, { Component } from "react";
import "./UserRegisterPopUp.css";
import PFP from "../../Assets/PFP.png";

export default class UserRegisterPopUp extends Component {
  state = {
    name: "",
    username: "",
    phone_number: "",
    email: "",
    password: "",
    profilePhoto: ""
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handlePictureChange = async (e) => {
    const { files } = e.target;
    let picture = new FormData();
    console.log(picture.append('picture', files[0]))
    this.setState({
      profilePhoto: picture
    })
    console.log(this.state.profilePhoto)
  }

  render() {
    const { name, username, phone_number, email, password, profilePhoto } = this.state;
    const { handleRegister, history, handleLogin } = this.props;
    const {handlePictureChange, handleChange, } = this
    return (
      <div className='register'>
        <div className='registerHeader'></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(this.state);
          }}
        >
          <div className='pfpRegisterUpload'>
            <input
              type='file'
              className='profilePhotoUpload'
              name='profilePhoto'
              value={profilePhoto}
              onChange={handlePictureChange}
            />
            <img src={PFP} className='profilePhotoBlank' />
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
            placeholder="What's your phone number?"
            name='phone_number'
            value={phone_number}
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
