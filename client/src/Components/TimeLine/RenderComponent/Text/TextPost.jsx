import React, { Component } from "react";
import '../Text/TextPost.css'

export default class TextPost extends Component {


  render() {
    return (
      <div className="textPost">
          <img src="https://i.ya-webdesign.com/images/small-circle-png-4.png" />
        <div className="linkDot">
          <h6>Note posted at TIME</h6>
        </div>
        <div className="tags">
          <h4>{this.props.post.tags}</h4>
        </div>
        <div className="note">
          <h4>{this.props.post.title}</h4>
          <p>{this.props.post.body}</p>
        </div>
        <div className="crud">
          <h4>edit tags</h4>
          <h4>delete</h4>
        </div>
      </div>
    );
  }
}
