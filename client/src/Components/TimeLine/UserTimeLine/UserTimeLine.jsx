import React, { Component } from "react";
import "./UserTimeLine.css";
import { withRouter } from "react-router-dom";
import { timeline } from "../../../Services/timeline";
import { postLink, deleteLinkPost, putLinkPost } from '../../../Services/linkpost';
import { postText, deleteTextPost, putText } from "../../../Services/textpost.js";


import TextInput from "../TextInput/TextInput";
import LinkInput from "../LinkInput/LinkInput";
import LinkPost from "../RenderComponent/Link/LinkPost";
import TextPost from "../RenderComponent/Text/TextPost";

class UserTimeLine extends Component {
  state = {
    timeline: [],
    addComponent: false
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

  deleteTimelineTextPost = async (id) => {
    await deleteLinkPost(id) 
    this.setState(prevState => ({
      timeline: prevState.timeline.filter(timeline => timeline.id !== id)
    }))
  }

  deleteTimelineLinkPost = async (id) => {
    await deleteTextPost(id)
    this.setState(prevState => ({
      timeline: prevState.timeline.filter(timeline => timeline.id !== id)
    }))
  }

  handleTextPost = async (postData) => {
    const newPost = await postText(postData);
    this.setState(prevState => ({
      timeline: [newPost, ...prevState.timeline],
      addComponent: false
    }))
  };

  handleSubmit = async (linkData) => {
    const newLink = await postLink(linkData);
    this.setState(prevState => ({
      timeline: [newLink, ...prevState.timeline],
      addComponent: false
    }))
  }

  addComponent = () => {
    this.setState({
      addComponent: true
    })
  }

  render() {
    return (
      <div className="timeline">
        <div className="container">
          <div className="bar">
            <div className="userTimeline"></div>
          </div>
          <div className="posts">
            <div className="header">
              <h1>Your Timeline</h1>
              <button onClick={this.addComponent}>+</button>
            </div>
            <div className="render">
              {this.state.timeline.map((post, id) =>
                post.url ? (
                  <LinkPost post={post} id={post.id} deleteLinkPost={this.deleteTimelineLinkPost} putLinkPost={putLinkPost} />
                ) : (
                    <TextPost post={post} id={post.id} deleteTextPost={this.deleteTimelineTextPost} putText={putText} />
                )
              )}
            </div>
          </div>
          <div className="inputComponents">
              {
              this.state.addComponent ? 
                <div className="components">
            <h1>Add to Timeline</h1>
            <div className="text">
              <TextInput handleTextPost={this.handleTextPost}/>
            </div>
            <div className="link">
              <LinkInput handleSubmit={this.handleSubmit} />
                  </div>
                  </div> :
                  <></>
                }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserTimeLine);
