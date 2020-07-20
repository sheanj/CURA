import api from "./api-helper";

export const getLinks = async () => {
  const response = await api.get('/linkposts')
  return response.data
}

export const getLink = async (id) => {
  const response = await api.get(`linkposts/${id}`)
  return response.data
} 

export const postLink = async (linkData, id) => {
  const response = await api.post("/linkposts", { linkpost: linkData });
  return response.data;
};

export const putLinkPost = async (id, linkData) => {
  const response = await api.put(`/linkposts/${id}`, { linkpost: linkData });
  return response.data;
};

export const deleteLinkPost = async (id) => {
  const response = await api.delete(`/linkposts/${id}`);
  return 'destroyed'
}