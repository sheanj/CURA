import React, { Component } from "react";
import "./CalendarWidget.css";

export default class CalendarWidget extends Component {
  state = {
    month: "",
    day: "",
    year: "",
  };

  componentDidMount() {
    this.setState({
      month: this.getMonth(),
    });
    console.log(this.state.month)
  }

  componentDidUpdate = async (prevState) => { 
    if (prevState.month !== this.state.month) {
      let prevMonth = await this.getPreviousMonth();
      this.setState({
        month: prevMonth
      })
    } else {
      
    }
  }

  getMonth = () => {
    let months = [
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
    let currentMonth = new Date().getMonth();
    return months[currentMonth];
  };

  getPreviousMonth = () => {
    let months = [
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
    let previousMonth = new Date().getMonth - 1;
    return months[previousMonth]
  };

  // displayDate = () => {
  //   let date = new Date(),

  //   const firstDayIndex = date.setDay()
  //   const prevLastDay = new Date(date.getFullYear(), date.getMonth, 0).getDate()
  //   const lastDayIndex = new Date(
  //     date.getFullYear(),
  //     date.getMonth() + 1,
  //     0
  //   ).getDay();

  //   const nextDays = 7 - lastDayIndex - 1

  //     months = [
  //       "January",
  //       "February",
  //       "March",
  //       "April",
  //       "May",
  //       "June",
  //       "July",
  //       "August",
  //       "September",
  //       "October",
  //       "November",
  //       "December",
  //     ],
  //     // days = [

  //     // ];

  //   for (let j = 1; j <= nextDays; j++) {
  //     days += `<div className="next-date>${j}</div>`
  //   }

  //   for (let x = firstDayIndex; x > 0; x--) {
  //     days += `<div class="prev-date>${prevLastDay - x + 1}</div>`
  //   }

  //   for (let i = 1; i <= lastDay; i++) {
  //     if (i === new Date.getDate() && date.getMonth === new Date.getMonth()) {
  //       days += `<div className="today">${i}</div>`
  //     } else {

  //       days += `<div>${i}</div>`
  //     }
  //   }
  //   //get last month
  //   // date.setMonth(date.getMonth() - 1)
  //   //get next month
  //   // date.setMonth(date.getMonth() + 1)

  //   this.setState({
  //     month: months[date.getMonth()],
  //     day: days[date.getDay()],
  //     year: date.getFullYear
  //   });
  // };

  render() {
    const { month } = this.state;
    return (
      <div className='calendar'>
        <div className='calHeader'>
          <div className='month'>
            <h3>{month}</h3>
          </div>
          <div className='year'>
            <h3>2020</h3>
          </div>
        </div>
        <div className='dates'>
          <div className='previous'>
            <button onClick={this.getPreviousMonth}>P</button>
          </div>
          <div id='weekdays' className='week1'>
            <button>S</button>
            <button>M</button>
            <button>T</button>
            <button>W</button>
            <button>T</button>
            <button>F</button>
            <button>S</button>
          </div>
          <div className='week2'></div>
          <div className='week3'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className='week4'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className='week5'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className='week6'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className='next'>
            <button>N</button>
          </div>
        </div>
      </div>
    );
  }
}
