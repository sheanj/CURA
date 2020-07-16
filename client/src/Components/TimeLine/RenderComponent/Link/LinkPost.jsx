import React, { Component } from "react";
import '../Link/LinkPost.css';



export default class TextPost extends Component {
  

  render() {
    return (
      <div className="linkPost">
        <div className="linkDot">
        {/* <img src="https://i.ya-webdesign.com/images/small-circle-png-4.png" /> */}
          <h6>Article Posted at TIME</h6>
        </div>
        <div className="tags">
          <h4>{this.props.post.tags}</h4>
        </div>
        <img src={this.props.post.image}></img>
        <div className="title">
          <h4>{this.props.post.title}</h4>
          <h4>{this.props.post.description}</h4>
        </div>
        <div className="crud">
          <h4>edit tags</h4>
          <h4>delete</h4>
        </div>
      </div>
    );
  }
}
