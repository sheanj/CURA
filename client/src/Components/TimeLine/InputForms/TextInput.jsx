import React, { Component } from 'react'

export default class TextPost extends Component {
  render() {
    return (
      <div className='linkPost'>
        <input 
          placeholder="Title"
        />
        <input 
          placeholder="New Note..."
        />
        <input 
          placeholder="Tags"
        />
      </div>
    )
  }
}
