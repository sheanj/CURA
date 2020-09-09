import api from "./api-helper";

// export const getTexts = async () => {
//   const response = await api.get("/texposts");
//   return response.data;
// };

// export const getText = async (id) => {
//   const response = await api.get(`/texposts/${id}`);
//   return response.data;
// };

// export const postText = async (postData) => {
//   const response = await api.post("/textposts", { textpost: postData });
//   return response.data;
// };

// export const putText = async (id, postData) => {
//   const response = await api.put(`/textposts/${id}`, { textpost: postData });
//   return response.data;
// };

// export const deleteTextPost = async (id) => {
//   const response = await api.delete(`/textposts/${id}`);
//   return "destroyed";
// };



export const getTexts = async () => {
  await api.get("/texposts");
};

export const getText = async (id) => {
  return await api.get(`/texposts/${id}`);
};

export const postText = async (postData) => {
  return await api.post("/textposts", { textpost: postData });
};

export const putText = async (id, postData) => {
  return await api.put(`/textposts/${id}`, { textpost: postData });
};

export const deleteTextPost = async (id) => {
  return await api.delete(`/textposts/${id}`);
};