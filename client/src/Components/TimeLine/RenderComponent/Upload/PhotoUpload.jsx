import React, { Component } from "react";
import "./PhotoUpload.css";
import { FaArrowCircleUp, FaImages } from "react-icons/fa";
import {processFile, handlePhotoUpload, handleClickRemove} from '../../../../Services/photoupload'


export default class PhotoUpload extends Component {
  state = {
    title: "",
    body: "",
    date: "",
    tags: "",
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { processFile, handlePhotoUpload, handleClickRemove } = this;
    const { title, date, body, tags } = this.state;
    const { handleTextPost } = this.props;
    return (
      <form autoComplete='off' action='' className='photoForm'>
        <div className='inputHead'>
          <h6>Upload a Photo</h6>
          <button>
            <FaArrowCircleUp />
          </button>
        </div>
        <div className='photoIcon'>
          <button>
            <i class='bx bx-x' />
          </button>
          <div class='con-bg'>
            <img class='bg' src='' alt='' />
          </div>
          <svg
            id='Group_10'
            data-name='Group 10'
            xmlns='http://www.w3.org/2000/svg'
            width='36.442'
            height='36.442'
            viewBox='0 0 36.442 36.442'
          >
            <path id='Frames-24px' d='M0,0H36.442V36.442H0Z' fill='none' />
            <g id='Solid' transform='translate(1.518 3.04)'>
              <path
                id='Path_23'
                data-name='Path 23'
                d='M16.384,11.508,14.634,8.7,12,12.957H22.629L19.055,7.226Z'
                transform='translate(4.703 0.706)'
              />
              <path
                id='Path_24'
                data-name='Path 24'
                d='M8.037,5H5V21.7a3.041,3.041,0,0,0,3.037,3.037H23.221V21.7H8.037V5Z'
                transform='translate(1.074 -0.447)'
              />
              <path
                id='Path_25'
                data-name='Path 25'
                d='M4.037,9H1V25.7a3.041,3.041,0,0,0,3.037,3.037H19.221V25.7H4.037V9Z'
                transform='translate(-1 1.627)'
              />
              <path
                id='Path_26'
                data-name='Path 26'
                d='M25.7,2H12.037A3.04,3.04,0,0,0,9,5.039V17.186a3.041,3.041,0,0,0,3.037,3.037H25.7a3.041,3.041,0,0,0,3.037-3.037V5.039A3.04,3.04,0,0,0,25.7,2ZM12.037,17.186V5.039H25.7l0,12.147Z'
                transform='translate(3.147 -2.002)'
              />
            </g>
          </svg>
        </div>
        <div className='uploadText'>Drop your Image Here, or Browse</div>
        <div className='photoUpload'>
          <input class='input_btn' type='file' name='picture' id='file'
            onChange={processFile}
          />
        </div>
      </form>
    );
  }
}
