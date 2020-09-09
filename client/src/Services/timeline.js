import api from './api-helper'

export const timeline = async () => {
  const response = await api.get('/timeline')
  return response.data
}
