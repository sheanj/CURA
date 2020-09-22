import React, { Component, useEffect, useState } from "react";
import CalendarWidget from "./Calendar/CalendarWidget";
import ClockWidget from "./Clock/ClockWidget.jsx";
import NewsWidget from "./News/NewsWidget.jsx";
import Weather from "./Weather/Weather.jsx";
import "./Widgets.css";


export default class Widgets extends Component {
  render() {
    const { loggedUser, date, handleSubmit } = this.props;
    return (
      <div className='widgets'>
        <div className="widgetHeader"><h3>{date}</h3></div>
        <div className='twoSquare'>
          <div className='leftWidget'>
            <ClockWidget />
          </div>
          <div className='rightWidget'>
            <Weather />
          </div>
        </div>
        <div className='singleSquare'>
          <NewsWidget handleSubmit={handleSubmit} />
        </div>
        <div className='singleSquare'>
          <CalendarWidget />
        </div>
      </div>
    );
  }
}
