import React, { Component } from 'react'
import './ComponentDrawer.css'
import TextInput from '../InputComponents/TextInput/TextInput.jsx'
import LinkInput from '../InputComponents/LinkInput/LinkInput.jsx'
import PhotoUpload from '../InputComponents/PhotoUpload/PhotoUpload.jsx'


export default class ComponentDrawer extends Component {
    render() {
        const {handleTextPost, handleSubmit} = this.props
        return (
          <div className='components'>
            {/* <h3>ADD TO TIMELINE</h3> */}
            <div className='text'>
              <TextInput handleTextPost={handleTextPost} />
            </div>
            <div className='link'>
              <LinkInput handleSubmit={handleSubmit} />
            </div>
            <div className='photo'>
              <PhotoUpload handleSubmit={handleSubmit} />
            </div>
          </div>
        );
    }
}
