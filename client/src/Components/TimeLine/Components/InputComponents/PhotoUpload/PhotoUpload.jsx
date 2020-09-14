import React, { Component } from "react";
import "./PhotoUpload.css";
import { FaArrowCircleUp } from "react-icons/fa";



export default class PhotoUpload extends Component {
  state = {
    tags: "",
    image: null,
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        this.setState({ image: reader.result });
        console.log(this.state.image);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  imageReset = (e) => {
    e.preventDefault();
    this.setState({
      image: null,
    });
  };

  // photoUpload = async (e) => {
  //   e.preventDefault();
  //   const userData = new FormData();
  //   return await api.post("/users", userData);
  // };

  render() {
    const { imageReset, photoUpload, imageHandler } = this;
    const { tags, image } = this.state;
    const { handleTextPost } = this.props;
    return (
      <form autoComplete='off' action='' className='photoForm'>
        <div className='inputHead'>
          <h6>Upload a Photo</h6>
          <button onClick={photoUpload}>
            <FaArrowCircleUp />
          </button>
        </div>
        <div className='photoIcon'>
          <div class='con-bg'>
            <img class='bg' src={this.state.temp} alt='' />
          </div>
          {image == null ? (
            <>
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
              <div className='uploadText'>Drop your Image Here, or Browse</div>
            </>
          ) : (
            <button onClick={imageReset} className='imageResetButton'>
              X
            </button>
          )}
        </div>
        <div className='photoUpload'>
          {image == null ? (
            <input
              className='input_btn'
              type='file'
              name='picture'
              onChange={imageHandler}
              accept='image/*'
            />
          ) : (
            <img src={image} className='imagePreview' />
          )}
        </div>
      </form>
    );
  }
}
