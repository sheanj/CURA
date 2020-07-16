import api from "./api-helper";

export const getTexts = async () => {
  const response = await api.get('/texposts')
  return response.data
}

export const getText = async (id) => {
  const response = await api.get(`/texposts/${id}`);
  return response.data;
};

export const postText = async (postData) => {
  const response = await api.post("/textposts", { textpost: postData });
  return response.data;
};

export const putText = async (id, postData) => {
  const response = await api.put(`/textposts/${id}`, { textpost: postData });
  return response.data;
};

export const deleteTextPost = async (id) => {
  const response = await api.delete(`/textposts/${id}`);
  return "destroyed";
};
