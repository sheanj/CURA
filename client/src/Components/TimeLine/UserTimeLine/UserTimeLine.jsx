import React, { Component } from "react";
import "./UserTimeLine.css";
import { withRouter } from "react-router-dom";
import { timeline } from "../../../Services/timeline";
import { postLink } from '../../../Services/linkpost';
import { postText } from "../../../Services/textpost.js";


import TextInput from "../TextInput/TextInput";
import LinkInput from "../LinkInput/LinkInput";
import LinkPost from "../RenderComponent/Link/LinkPost";
import TextPost from "../RenderComponent/Text/TextPost";

class UserTimeLine extends Component {
  state = {
    timeline: [],
  };

  componentDidMount = () => {
    if (!localStorage.getItem("authToken")) {
      this.props.history.push("/login");
    }
    if (this.props.loggedUser) {
      this.fetchTimeline();
    }
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.loggedUser !== this.props.loggedUser) {
      this.fetchTimeline();
    }
  };

  fetchTimeline = async () => {
    const render = await timeline();
    this.setState({
      timeline: render
    });
  };

  handleTextPost = async (postData) => {
    const newPost = await postText(postData);
    this.setState(prevState => ({
      timeline: [newPost, ...prevState.timeline]
    }))
  };

  handleSubmit = async (linkData) => {
    const newLink = await postLink(linkData);
    this.setState(prevState => ({
      timeline: [newLink, ...prevState.timeline]
    }))
  }

  render() {
    return (
      <div className="timeline">
        <h6>Welcome, {this.props.username}. Its THIS DATE.</h6>

        <div className="container">
          <div className="bar">
            <div className="userTimeline"></div>
          </div>
          <div className="posts">
            <div className="header">
              <h1>Your Timeline</h1>
              <button>+</button>
            </div>
            <div className="render">
              {this.state.timeline.map((post) =>
                post.description ? (
                  <LinkPost post={post} />
                ) : (
                  <TextPost post={post} />
                )
              )}
            </div>
          </div>
          <div className="inputComponents">
            <h1>Add to Timeline</h1>
            <div className="text">
              <TextInput handleTextPost={this.handleTextPost}/>
            </div>
            <div className="link">
              <LinkInput handleSubmit={this.handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserTimeLine);
