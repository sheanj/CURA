import React, { Component } from "react";
import "./ClockWidget.css";
import {setClock} from "./ClockWidget.js";

export default class ClockWidget extends Component {
  state = {
    date: this.getDate(),
  };
    
    getDate() {
        const newDate = new Date();
        const date = {};
        date.hours = newDate.getHours();
        date.minutes = newDate.getMinutes();
        date.seconds = newDate.getSeconds();
        return date;
    }
    
    updateDate() {
        console.log(this.state.date.minutes)
        this.setState(this.getDate());
  }

  updateClock() {
    let angleSeconds = (this.state.seconds / 60) * 360;
    let angleMinutes = (this.state.minutes / 60) * 360;
    let angleHours = (this.state.hours / 12) * 360;
    document.getElementById("js-seconds").style.transform =
      "translate(-50%, -50%) rotate(" + angleSeconds + "deg)";
    document.getElementById("js-minutes").style.transform =
      "translate(-50%, -50%) rotate(" + angleMinutes + "deg)";
    document.getElementById("js-hours").style.transform =
      "translate(-50%, -50%) rotate(" + angleHours + "deg)";
  }

  componentDidMount = async () => {
    await this.updateClock();
    let timeInterval = setInterval(() => {
      this.updateDate();
      this.updateClock();
    }, 1000);
  }

//   componentWillUnmount() {
//     clearInterval(timeInterval);
//   }

  render() {
    const { setClock } = this;
    return (
      <div className='clock' onLoad={() => setClock()}>
        <div id="js-hours" className='hand hour' data-hour-hand></div>
        <div id="js-minutes" className='hand minute' data-minute-hand></div>
        <div id="js-seconds" className='hand second' data-second-hand></div>
        <div className='number number1'>|</div>
        <div className='number number2'>|</div>
        <div className='number number3'>3</div>
        <div className='number number4'>|</div>
        <div className='number number5'>|</div>
        <div className='number number6'>9</div>
        <div className='number number7'>|</div>
        <div className='number number8'>|</div>
        <div className='number number9'>9</div>
        <div className='number number10'>|</div>
        <div className='number number11'>|</div>
        <div className='number number12'>12</div>
      </div>
    );
  }
}
