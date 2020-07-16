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
    tags: ""
  };

  linkMetadata = async (e) => {
    const metadata = await Axios.get(
      `http://api.linkpreview.net/?key=61a96cdca666e25e6b9937fffa190c2d&q=${e.target.value}`
    );
    const response = metadata.data;
    console.log(response);
    this.setState(prevState => ({
      ...response
    }))
    console.log(this.state)
  };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { linkMetadata } = this;
    const {tags} = this.state
    return (
      <form
        className="linkInput"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSubmit(this.state)
        }}>
        <h6>Add a new Link</h6>
        <input 
          onChange={linkMetadata}
          placeholder="URL" />
        <input
          name="tags"
          value={tags}
          placeholder="#Tags"
          onChange={this.handleChange} />
        <button>+</button>
      </form>
    );
  }
}
