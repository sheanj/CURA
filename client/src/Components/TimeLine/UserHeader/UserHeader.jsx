import React, { Component } from "react";
import "./UserHeader.css";
import Logo from "../../../Assets/Logo/LogoMedium.png";
import PFP from "../../../Assets/PFP.png";

export default class UserHeader extends Component {
  render() {
    const { addComponent, loggedUser } = this.props;
    return (
      <div className='header'>
        <div className='userPhoto'>
          {loggedUser ? (
            <img src={Logo} />
          ) : (
            <div className='pfpUpload'>
              <input type='file' className='profilePhotoUpload' />
              <img src={PFP} className='profilePhotoBlank' />
            </div>
          )}
        </div>
        <div className='headline'>
          <h1>@{loggedUser.username}'s Timeline</h1>
        </div>
        <button onClick={addComponent}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
          >
            <path
              id='Path_1'
              data-name='Path 1'
              d='M18,34A16,16,0,1,0,2,18,16,16,0,0,0,18,34ZM16.4,11.6a1.6,1.6,0,1,1,3.2,0v4.8h4.8a1.6,1.6,0,1,1,0,3.2H19.6v4.8a1.6,1.6,0,1,1-3.2,0V19.6H11.6a1.6,1.6,0,1,1,0-3.2h4.8Z'
              transform='translate(-2 -2)'
              fill-rule='evenodd'
            />
          </svg>
        </button>
      </div>
    );
  }
}
