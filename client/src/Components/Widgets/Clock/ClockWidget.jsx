import React, { Component } from "react";
import "./ClockWidget.css";

export default class ClockWidget extends Component {
  state = {
    date: this.getDate(),
    angleSeconds: '', 
    angleMinutes: '',
    angleHours: ''
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
        this.setState(this.getDate());
  }

  updateClock() {
    let angleSeconds = (this.state.seconds / 60) * 360;
    let angleMinutes = (this.state.minutes / 60) * 360;
    let angleHours = (this.state.hours / 12) * 360;
    this.setState({
      angleSeconds: angleSeconds,
      angleMinutes: angleMinutes, 
      angleHours: angleHours
    })
  }

  componentDidMount = async () => {
    await this.updateClock();
    let timeInterval = setInterval(() => {
      this.updateDate();
      this.updateClock();
    }, 1000);
  }

  render() {
    const { setClock } = this;
    const {angleHours, angleMinutes, angleSeconds} = this.state
    return (
      <div className='clock' onLoad={() => setClock()}>
        {this.state.angleSeconds !== null ? <><div
          id='js-hours'
          className='hand hour'
          style={{transform: "translate(-55%, -50%) rotate(" + angleHours + "deg)"}}
        ></div>
        <div
          id='js-minutes'
          className='hand minute'
          style={{transform: "translate(-55%, -50%) rotate(" + angleMinutes + "deg)"}}
        ></div>
        <div
          id='js-seconds'
          className='hand second'
          style={{transform: "translate(-55%, -50%) rotate(" + angleSeconds + "deg)"}}
        ></div></> : <></>}
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
