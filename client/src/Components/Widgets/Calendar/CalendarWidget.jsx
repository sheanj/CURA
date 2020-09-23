import React, { Component } from "react";
import "./CalendarWidget.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default class CalendarWidget extends Component {
  state = {
    currentMonth: "",
    currentDays: '',
  };

  componentDidMount() {
    this.getMonth();
    this.getDays();
  }

  getMonth = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const currentMonth = months[date.getMonth()];
    const currentDate = date.toDateString();
    this.setState({
      currentMonth: currentMonth,
      currentDate: currentDate,
    });
  };

  getDays = () => {
    const date = new Date();
    const days = [];
    date.setDate(1)
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const nextDays = 7 - date.getDay() - 1;
    for (let x = date.getDay(); x > 0; x--) {
      days.push(`${prevLastDay - x + 1}`);
    }
    for (let i = 1; i <= lastDay; i++) {
      days.push(`${i}`);
    }
    for (let j = 1; j < nextDays; j++) {
      days.push(`${j}`);
    }
    this.setState({
      currentDays: days
    })
  }

  //write change functions using setMonth()

  render() {
    const { currentMonth, currentDate } = this.state;
    return (
      <div className='calendar'>
        <div className='month'>
          <FaAngleLeft />
          <div className='date'>
            <h1>{currentMonth}</h1>
          </div>
          <FaAngleRight />
        </div>
        <div className='weekdays'>
          <div className='sunday'>Sun</div>
          <div className='monday'>Mon</div>
          <div className='tuesday'>Tues</div>
          <div className='wednesday'>Wed</div>
          <div className='thursday'>Thur</div>
          <div className='friday'>Fri</div>
          <div className='saturday'>Sat</div>
        </div>
        <div className='days'>
          {this.state.currentDays &&
            this.state.currentDays.map((day) => <div>{day}</div>)}
        </div>
      </div>
    );
  }
}
