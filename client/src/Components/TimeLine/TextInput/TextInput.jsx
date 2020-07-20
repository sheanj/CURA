import React, { Component } from "react";
import "../TextInput/TextInput.css";

export default class TextPost extends Component {
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
    const { title, date, body, tags } = this.state;
    const { handleTextPost } = this.props;
    return (
      <form className="textInput" onSubmit={(e) => {
        e.preventDefault();
        handleTextPost(this.state);
      }}>
        <h6>Add a new Note</h6>
        <input
          placeholder="Title"
          name="title"
          value={title}
          onChange={this.handleInput}
        />
        <input
          placeholder="Todays Date"
          name="date"
          value={date}
          onChange={this.handleInput}
        />
        <div className="noteInput">
          <input
            placeholder="New Note..."
            name="body"
            value={body}
            onChange={this.handleInput}
          />
        </div>
        <input
          placeholder="#Tags"
          name="tags"
          value={tags}
          onChange={this.handleInput}
        />
        <button>+</button>
      </form>
    );
  }
}
