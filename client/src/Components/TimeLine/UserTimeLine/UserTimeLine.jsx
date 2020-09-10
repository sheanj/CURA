import React, { Component } from "react";
import "./UserTimeLine.css";
import { withRouter } from "react-router-dom";
import { timeline } from "../../../Services/timeline";
import {
  postLink,
  deleteLinkPost,
  putLinkPost,
} from "../../../Services/linkpost";
import {
  postText,
  deleteTextPost,
  putText,
} from "../../../Services/textpost.js";

import TextInput from "../TextInput/TextInput";
import LinkInput from "../LinkInput/LinkInput";
import LinkPost from "../RenderComponent/Link/LinkPost";
import TextPost from "../RenderComponent/Text/TextPost";
import { FaPlusCircle } from "react-icons/fa";

class UserTimeLine extends Component {
  state = {
    timeline: [],
    addComponent: false,
    editComponent: false,
    username: null,
    date: "",
  };

  componentDidMount = () => {
    if (!localStorage.getItem("authToken")) {
      this.props.history.push("/login");
    }
    if (this.props.loggedUser) {
      this.setState({username: this.props.loggedUser.username})
      this.fetchTimeline();
    }
    // this.setFormData();
    this.displayDate();
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

  addComponent = () => {
    this.setState({
      addComponent: true,
    });
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

  displayDate = () => {
    let d = new Date(),
      minutes =
        d.getMinutes().toString().length === 1
          ? "0" + d.getMinutes()
          : d.getMinutes(),
      hours =
        d.getHours().toString().length === 1 ? "0" + d.getHours() : d.getHours()-12,
      ampm = d.getHours() >= 12 ? "PM" : "AM",
      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date =
      days[d.getDay()] +
      " " +
      months[d.getMonth()] +
      " " +
      d.getDate() +
      ", " +
      d.getFullYear() +
      " " +
      hours +
      ":" +
      minutes +
      ampm
    this.setState({ date });
  };

  render() {
    const { timeline, date, editComponent } = this.state;
    const { loggedUser } = this.props;
    const { updateLinkPost, deleteTimelineLinkPost, deleteTimelineTextPost, editPost, putTextPost, handleTextPost, handleSubmit, addComponent } = this;
    return (
      <div className="timeline">
        <div className="container">
          <div className="bar">
            <div className="userTimeline"></div>
          </div>
          <div className="posts">
            <div className="header">
              <h1>@{this.state.username} Timeline</h1>
              <button onClick={addComponent}><FaPlusCircle/></button>
            </div>
            <div className="nullTimeLine">
              {this.props.loggedUser && !timeline[0] ? (
                <div className="welcome">
                  <h3>Welcome {loggedUser.name} it's {date}</h3>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="render">
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
                  />
                )
              )}
            </div>
          </div>
          <div className="inputComponents">
            {this.state.addComponent ? (
              <div className="components">
                <h1>Add to Timeline</h1>
                <div className="text">
                  <TextInput handleTextPost={handleTextPost} />
                </div>
                <div className="link">
                  <LinkInput handleSubmit={handleSubmit} />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserTimeLine);
