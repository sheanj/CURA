import React, { Component } from "react";
import "../Text/TextPost.css";
// import { putText, deleteTextPost } from "../../../../Services/textpost";
import { FaPlusCircle, FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";

export default class TextPost extends Component {
  state = {
    title: "",
    body: "",
    tags: "",
  };

  componentDidMount = () => {
    this.setFormData();
  };

  setFormData = () => {
    const { title, body, tags } = this.props.post;
    this.setState({
      title: title,
      body: body,
      tags: tags,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      post,
      deleteTimelineTextPost,
      id,
      updateTextPost,
      edit,
      editPost,
    } = this.props;
    const { handleChange } = this;
    const {body, title, tags} = this.state
    return (
      <div className='textPost'>
        <img
          src='https://i.ya-webdesign.com/images/small-circle-png-4.png'
          alt='timeline marker'
        />
        <div className='linkDot'>
          <h6>Note posted at {post.created_at}</h6>
        </div>
        <div className='tags'>
          {edit === id ? (
            <input value={tags} name="tags" onChange={handleChange}/>
          ) : (
            <h4>{post.tags}</h4>
          )}
        </div>
        <div className='note'>
          {edit === id ? (
            <input
              value={title}
              name="title"
              onChange={handleChange}
            />
          ) : (
            <h4>{post.title}</h4>
          )}
          {edit === id ? (
            <input value={body} name="body" onChange={handleChange} />
          ) : (
            <p>{post.body}</p>
          )}
        </div>
        <div className='crud'>
          {edit === id ? (
            <button onClick={() => updateTextPost(id, this.state)}>
              <FaCheckCircle />
            </button>
          ) : (
            <>
              <button onClick={() => editPost(id)}>
                <FaEdit />
              </button>
              <button onClick={() => deleteTimelineTextPost(id)}>
                <FaTrash />
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}
