export const postText = async (postData) => {
  const response = await api.post('/textposts', { textpost: postData })
  return response.data;
}