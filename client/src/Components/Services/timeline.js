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