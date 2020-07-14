import React, { Component } from 'react'
import './LinkInput.css'

export default class TextPost extends Component {
  render() {
    return (
      <div className='linkPost'>
        <h6>Add a new Link</h6>
        <input 
          placeholder="URL"
        />
        <input 
          placeholder="#Tags"
        />
        <button>+</button>
      </div>
    )
  }
}
