import React, { Component } from "react";
import '../Link/LinkPost.css';
import {Link} from 'react-router-dom'

export default class TextPost extends Component {


  render() {
    const {deleteTimelineLinkPost, putLinkPost, id, post} = this.props
    return (
      <>
        <div className="dot">
          <img src="https://i.ya-webdesign.com/images/small-circle-png-4.png" />
        </div>
      <div className="linkPost">
        <div className="linkDot">
          <h6>Article Posted at {post.created_at}</h6>
        </div>
        <a target="_blank" href={post.url}>
        <div className="tags">
          <h4>{post.tags}</h4>
        </div>
        <img src={post.image}></img>
        <div className="title">
          <h4>{post.title}</h4>
          <h4>{post.description}</h4>
        </div>
        </a>
        <div className="crud">
          <button onClick={() => putLinkPost(id)}>=</button>
          <button onClick={() => deleteTimelineLinkPost(id)}>-</button>
        </div>
          </div>
        </>
    );
  }
}
