import React, { Component } from "react";
import "./LinkInput.css";
import Axios from "axios";
import { FaPlusCircle } from "react-icons/fa";

export default class TextPost extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    url: "",
    tags: ""
  };

  linkMetadata = async (e) => {
    let key = process.env.REACT_APP_LINK_INPUT_API_TOKEN
    const metadata = await Axios.get(
      `https://api.linkpreview.net/?key=${key}&q=${e.target.value}`
    );
    const response = metadata.data;
    this.setState(prevState => ({
      ...response
    }))
    console.log(this.state.image)
    console.log(response)
  };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { linkMetadata, handleChange } = this;
    const { tags } = this.state
    const {handleSubmit} = this.props
    return (
      <form
        className="linkInput"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(this.state)
        }}>
        <div className="inputHead">
        <h6>Add a new Link</h6>
        <button><FaPlusCircle/></button></div>
        <input 
          onChange={linkMetadata}
          placeholder="URL" />
        <input
          name="tags"
          value={tags}
          placeholder="#Tags"
          onChange={handleChange} />
      </form>
    );
  }
}
