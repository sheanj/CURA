import React, { Component } from 'react'
import './UserTimeLine.css'

import TextInput from '../InputForms/TextInput'
import LinkInput from '../InputForms/LinkInput'

export default class UserTimeLine extends Component {
  render() {
    return (
      <div className="timeline">
        <h6>Welcome, Username. Its THIS DATE.</h6>
        <div className="container">
          <div className="userTimeline">
            <h1>Your Timeline</h1>
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
