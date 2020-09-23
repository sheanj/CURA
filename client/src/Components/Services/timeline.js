import api from './api-helper'


export const timeline = async () => {
  const response = await api.get('/timeline')
  return response.data
}

export const photoUpload = async (e) => {
  e.preventDefault();
  const userData = new FormData();
  return await api.post("/users", userData)  
}

export const userPicture = async (userData, userId) => {
  const response = await api.post(`/users/${userId}/picture`, userData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const displayDate = () => {
    let d = new Date(),
      minutes =
        d.getMinutes().toString().length === 1
          ? "0" + d.getMinutes()
          : d.getMinutes(),
      hours =
        d.getHours().toString().length === 1
          ? "0" + d.getHours()
          : d.getHours(),
      ampm = d.getHours() >= 12 ? "PM" : "AM",
      months = [
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
      ],
      days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    let date =
      days[d.getDay()] +
      " " +
      months[d.getMonth()] +
      " " +
      d.getDate() +
      ", " +
      d.getFullYear()
    return date
  };