import React, { Component } from "react";
import "./UserTimeLine.css";
import { withRouter } from "react-router-dom";
import { timeline, displayDate } from "../../Services/timeline";
import {
  postLink,
  deleteLinkPost,
  putLinkPost,
} from "../../Services/linkpost";
import {
  postText,
  deleteTextPost,
  putText,
} from "../../Services/textpost.js";

import UserHeader from '../UserHeader/UserHeader.jsx'
import LinkPost from "../RenderComponent/Link/LinkPost";
import TextPost from "../RenderComponent/Text/TextPost";
import Widgets from "../../Widgets/Widgets";
import ComponentDrawer from "../Components/ComponentDrawer/ComponentDrawer";

class UserTimeLine extends Component {
  state = {
    timeline: [],
    addComponent: false,
    editComponent: false,
    username: null,
    profilePhoto: null,
    date: "",
    photoUpload: ''
  };

  componentDidMount = async () => {
    if (!localStorage.getItem("authToken")) {
      this.props.history.push("/");
    }
    if (this.props.loggedUser) {
      this.setState({
        username: this.props.loggedUser.username,
      });
      this.fetchTimeline();
    }
    this.setState({ date: displayDate()});

  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.loggedUser !== this.props.loggedUser) {
      this.fetchTimeline();
      // let stateUpdate = await timeline();
      // this.setState({
      //   timeline: stateUpdate
      // })
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

  addComponent = () => {
    this.setState(prevState => ({
      addComponent: !prevState.addComponent,
    }));
  };

  editPost = async (id) => {
    this.setState({
      editComponent: id,
    });
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

  updateTextPost = async (id, linkData) => {
    await putText(id, linkData);
    this.fetchTimeline();
    this.setState((prevState) => ({
      editComponent: false,
    }));
  };

  render() {
    const { timeline, date, editComponent, username } = this.state;
    const { loggedUser } = this.props; 
    const {
      updateLinkPost,
      updateTextPost,
      deleteTimelineLinkPost,
      deleteTimelineTextPost,
      editPost,
      putTextPost,
      handleTextPost,
      handleSubmit,
      addComponent,
    } = this;
    return (
      <div className='timeline'>
        <div className='container'>
          <div className='bar'>
            <div className='userTimeline'></div>
          </div>
          <div className='posts'>
            {loggedUser ? 
              <UserHeader addComponent={addComponent} loggedUser={loggedUser}/> :
              <UserHeader addComponent={addComponent} />}
            <div className='nullTimeLine'>
              {this.props.loggedUser && !timeline[0]  ? (
                <div className='welcome'>
                  <h3>
                    Welcome, {loggedUser.username}. Click the plus sign above to get started.
                  </h3>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className='render'>
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
          </div>
          <div className='inputComponents'>
            {this.state.addComponent ? (
              <ComponentDrawer
                handleTextPost={handleTextPost}
                handleSubmit={handleSubmit}

              />
            ) : (
                <Widgets
                  loggedUser={loggedUser}
                  date={date}
                  handleSubmit={handleSubmit}
                />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserTimeLine);
