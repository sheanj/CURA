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

  imageHandler = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        this.setState({ profilePhoto: reader.result });
        console.log('stored in state successfully ' + this.state.profilePhoto);
      } 
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const {
      name,
      username,
      phone_number,
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
