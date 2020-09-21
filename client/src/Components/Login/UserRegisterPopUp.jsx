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
    profilePhoto: null,
  };

  // componentDidMount() {
  //   this.handlePictureChange();
  // }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // handlePictureChange = async (e) => {
  //   const { name, value, file } = e.target;
  //   let picture = new FormData();
  //   console.log(picture.append('picture', file))
  //   this.setState({
  //     profilePhoto: picture
  //   })
  //   console.log(this.state.profilePhoto)
  // }

  imageHandler = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState == 2) {
        this.setState({ profilePhoto: reader.result });
        this.userPicture(reader.result)
      } 
    };
  };

userPicture = async (userData, userId) => {
  const response = await api.post(`/users/${userId}/picture`, userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(response.data)
  return response.data;
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
          <div className='pfpRegisterUpload'>
            <input
              type='file'
              className='profilePhotoUpload'
              // name='profilePhoto'
              // value={profilePhoto}
              onChange={imageHandler}
            />
            {profilePhoto == null ? <img src={PFP} className='profilePhotoBlank' /> : 
            <img src={profilePhoto} />}
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
          {/* <input
            type='text'
            placeholder="What's your phone number?"
            name='phone_number'
            value={phone_number}
            onChange={handleChange}
          /> */}
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
