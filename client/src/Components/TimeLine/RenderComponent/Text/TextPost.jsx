import React, { Component } from "react";
import "../Text/TextPost.css";
import { putText, deleteTextPost } from "../../../../Services/textpost";

export default class TextPost extends Component {
  render() {
    const { post, deleteTimelineTextPost, putText, id, putTextPost, postData, edit, editPost } = this.props;
    return (
      <div className="textPost">
        <img src="https://i.ya-webdesign.com/images/small-circle-png-4.png" />
        <div className="linkDot">
          <h6>Note posted at {post.created_at}</h6>
        </div>
        <div className="tags">
          {edit === id ?
            <input value={post.tags} /> :
            <h4>{post.tags}</h4>}
        </div>
        <div className="note">
          {edit === id ?
            <input value={post.title} /> :
            <h4>{post.title}</h4>
          }
          {edit === id ?
            <input value={post.body} /> :
            <p>{post.body}</p>
          }
        </div>
        <div className="crud">
          {edit === id ? (
            <button onClick={() => putTextPost(id, post)}>+</button>
          ) : (
            <>
              <button onClick={() => editPost(id)}>=</button>
              <button onClick={() => deleteTimelineTextPost(id)}>-</button>
            </>
          )}
        </div>
      </div>
    );
  }
}
