import React, { Component } from "react";
import "./LinkInput.css";
import Axios from "axios";
import { key } from '../../../Services/.env';

export default class TextPost extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    url: "",
  };

  // linkPost = async (e) => {
  //   this.setState({ [name]: value });
  // };

  linkMetadata = async (e) => {
    console.log('working')
    console.log(e.target.value)
    const metadata = await Axios.get(
      `http://api.linkpreview.net/?key=61a96cdca666e25e6b9937fffa190c2d&q=${e.target.value}`
    );
    const response = metadata.data;
    console.log(response);
    this.setState({...response})
  };

  render() {
    const { linkMetadata } = this;
    return (
      <div className="linkInput">
        <h6>Add a new Link</h6>
        <input onChange={linkMetadata} placeholder="URL" />
        <input placeholder="#Tags" />
        <button>+</button>
      </div>
    );
  }
}
