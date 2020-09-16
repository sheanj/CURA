import React, { Component } from 'react'
import './NewsWidget.css'

export default class NewsWidget extends Component {
    render() {
        return (
            <div className="news">
                <div className="newsHeader">
                    <h3>Todays Top News</h3>
                </div>
            </div>
        )
    }
}
