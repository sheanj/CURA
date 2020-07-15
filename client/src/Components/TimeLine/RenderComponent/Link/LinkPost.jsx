import React, { Component } from "react";
import '../Link/LinkPost.css';



export default class TextPost extends Component {
  // state = {
  //   title: "",
  //   description: "",
  //   image: "",
  //   url: "",
  // };


  render() {
    return (
      <div className="linkPost">
        <div className="linkDot">
        {/* <img src="https://i.ya-webdesign.com/images/small-circle-png-4.png" /> */}
          <h6>Article Posted at TIME</h6>
        </div>
        <div className="tags">
          <h4>#tags</h4>
        </div>
        <img src="https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"></img>
        <div className="title">
          <h4>Article Title Here</h4>
          <h4>Byline</h4>
        </div>
        <div className="crud">
          <h4>edit tags</h4>
          <h4>delete</h4>
        </div>
      </div>
    );
  }
}
