import React, { Component } from "react";
import "../Link/LinkPost.css";
import { FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa";

export default class TextPost extends Component {
  state = {
    tags: "",
  };

  componentDidMount = () => {
    this.setFormData();
  };

  setFormData = () => {
    this.setState({
      tags: this.props.post.tags,
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
      deleteTimelineLinkPost,
      id,
      post,
      edit,
      updateLinkPost,
      editPost,
    } = this.props;
    const {tags} = this.state
    return (
      <>
        <div className='dot'>
          <img
            src='https://i.ya-webdesign.com/images/small-circle-png-4.png'
            alt='timeline marker'
          />
        </div>
        <div className='linkPost'>
          <div className='linkDot'>
            <h6>Article Posted at {post.created_at}</h6>
          </div>
          <div className='tags'>
            {edit === id ? (
              <input
                name='tags'
                onChange={this.handleChange}
                value={tags}
              />
            ) : (
              <h4>{post.tags}</h4>
            )}
          </div>
          <a target='_blank' rel='noopener noreferrer' href={post.url}>
            <img src={post.image} alt='article'></img>
          </a>
          <div className='title'>
            <h4>{post.title}</h4>
            <h4>{post.description}</h4>
          </div>
          <div className='crud'>
            {edit === id ? (
              <button onClick={() => updateLinkPost(id, this.state)}>
                <FaCheckCircle />
              </button>
            ) : (
              <>
                <button onClick={() => editPost(id)}>
                  <FaEdit />
                </button>
                <button onClick={() => deleteTimelineLinkPost(id)}>
                  <FaTrash />
                </button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
