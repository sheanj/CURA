import React, { Component } from 'react'
import './TextInput.css'

export default class TextPost extends Component {
  render() {
    return (
      <div className='textPost'>
        <h6>Add a new Note</h6>
        <input 
          placeholder="Title"
        />
        <div className="note">
        <input 
          placeholder="New Note..."
          />
        </div>
        <input 
          placeholder="#Tags"
        />
        <button>+</button>
      </div>
    )
  }
}
