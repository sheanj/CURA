import api from "./api-helper";

export const getLinks = async () => {
  return await api.get('/linkposts')
}

export const getLink = async (id) => {
  return await api.get(`linkposts/${id}`)
} 

export const postLink = async (linkData, id) => {
  return await api.post("/linkposts", { linkpost: linkData });
};

export const putLinkPost = async (id, linkData) => {
  return await api.put(`/linkposts/${id}`, { linkpost: linkData });
};

export const deleteLinkPost = async (id) => {
  await api.delete(`/linkposts/${id}`);
  return 'destroyed'
}