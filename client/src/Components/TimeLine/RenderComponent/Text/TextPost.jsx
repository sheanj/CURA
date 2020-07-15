import React, { Component } from "react";
import '../Text/TextPost.css'

export default class TextPost extends Component {


  render() {
    return (
      <div className="textPost">
        <div className="linkDot">
          {/* <img src="https://i.ya-webdesign.com/images/small-circle-png-4.png" /> */}
          <h6>Note posted at TIME</h6>
        </div>
        <div className="tags">
          <h4>#tags</h4>
        </div>
        <div className="note">
          <h4>Note Title Here</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit ex optio suscipit quam molestias id? Consequatur, repellendus quos. Similique sunt laboriosam optio inventore distinctio ad ea nihil et enim.</p>
        </div>
        <div className="crud">
          <h4>edit tags</h4>
          <h4>delete</h4>
        </div>
      </div>
    );
  }
}
