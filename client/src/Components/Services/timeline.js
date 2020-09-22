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