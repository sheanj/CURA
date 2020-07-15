import React, { Component } from 'react'
import './UserTimeLine.css'
import {withRouter} from 'react-router-dom'

import TextInput from '../TextInput/TextInput'
import LinkInput from '../LinkInput/LinkInput'
import LinkPost from '../RenderComponent/Link/LinkPost'
import TextPost from '../RenderComponent/Text/TextPost'

class UserTimeLine extends Component {
  componentDidMount = () => {
    if (!this.props.loggedUser) {
      this.props.history.push('/login')
    }
  }
  render() {
    
    return (
      <div className="timeline">
        <h6>Welcome, {this.props.username}. Its THIS DATE.</h6>
        <div className="container">
          <div className="userTimeline">
            <h1>Your Timeline</h1>
            <LinkPost />
            <TextPost />
            <LinkPost />
          </div>
          <div className="inputComponents">
            <h1>Add to Timeline</h1>
            <div className="text"><TextInput /></div>
            <div className="link"><LinkInput /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(UserTimeLine)
