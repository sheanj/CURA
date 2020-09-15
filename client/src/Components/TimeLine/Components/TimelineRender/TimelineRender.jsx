import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./TimelineRender.css";
import LinkPost from "../TimelineComponents/Link/LinkPost.jsx";
import TextPost from "../TimelineComponents/Text/TextPost.jsx";
import { timeline } from '../../../Services/timeline.js'
import { deleteTextPost, postText, putText } from '../../../Services/textpost.js'
import {deleteLinkPost, postLink, putLinkPost} from '../../../Services/linkpost.js'

class TimelineRender extends Component {
  state = {
    timeline: [],
    editComponent: false,
  };

  componentDidMount = () => {
    if (this.props.loggedUser) {
      this.setState({ username: this.props.loggedUser.username });
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
      timeline: render,
    });
  };

  deleteTimelineTextPost = async (id) => {
    await deleteTextPost(id);
    this.setState((prevState) => ({
      timeline: prevState.timeline.filter((timeline) => timeline.id !== id),
    }));
  };

  deleteTimelineLinkPost = async (id) => {
    await deleteLinkPost(id);
    this.setState((prevState) => ({
      timeline: prevState.timeline.filter((timeline) => timeline.id !== id),
    }));
  };

  handleTextPost = async (postData) => {
    const newPost = await postText(postData);
    this.setState((prevState) => ({
      timeline: [newPost, ...prevState.timeline],
      addComponent: false,
    }));
  };

  handleSubmit = async (linkData) => {
    const newLink = await postLink(linkData);
    this.setState((prevState) => ({
      timeline: [newLink, ...prevState.timeline],
      addComponent: false,
    }));
  };

  editPost = async (id) => {
    this.setState({
      editComponent: id,
    });
  };

  updateTextPost = async (id, linkData) => {
    await putText(id, linkData);
    this.fetchTimeline();
    this.setState((prevState) => ({
      editComponent: false,
    }));
  };

  putTextPost = async (id, postData) => {
    await putText(id, postData);
  };

  updateLinkPost = async (id, linkData) => {
    await putLinkPost(id, linkData);
    this.fetchTimeline();
    this.setState((prevState) => ({
      editComponent: false,
    }));
  };

  render() {
    const {
      timeline,
      deleteTimelineLinkPost,
      editComponent,
      editPost,
      updateLinkPost,
      deleteTimelineTextPost,
      putTextPost,
      updateTextPost,
    } = this;

    const {} = this;
    return (
      <div>
        {timeline.map((post, id) =>
          post.url ? (
            <LinkPost
              post={post}
              id={post.id}
              deleteTimelineLinkPost={deleteTimelineLinkPost}
              edit={editComponent}
              editPost={editPost}
              updateLinkPost={updateLinkPost}
            />
          ) : (
            <TextPost
              post={post}
              id={post.id}
              deleteTimelineTextPost={deleteTimelineTextPost}
              editPost={editPost}
              edit={editComponent}
              putTextPost={putTextPost}
              updateTextPost={updateTextPost}
            />
          )
        )}
      </div>
    );
  }
}

export default withRouter(TimelineRender);
