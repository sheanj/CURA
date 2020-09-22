import React, { Component } from "react";
import "./TextInput.css";
import { FaPlusCircle } from "react-icons/fa";

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
      <form
        className='textInput'
        onSubmit={(e) => {
          e.preventDefault();
          handleTextPost(this.state);
        }}
      >
        <div className='inputHead'>
          <h6>Add a new Note</h6>
          <button>
            <FaPlusCircle />
          </button>
        </div>
        <input
          placeholder='Title'
          name='title'
          value={title}
          onChange={this.handleInput}
        />
        <input
          placeholder='Todays Date'
          name='date'
          value={date}
          onChange={this.handleInput}
        />
        <div className='noteInput'>
          <input
            placeholder='New Note...'
            name='body'
            value={body}
            onChange={this.handleInput}
          />
        </div>
        <input
          placeholder='#Tags'
          name='tags'
          value={tags}
          onChange={this.handleInput}
        />
      </form>
    );
  }
}
