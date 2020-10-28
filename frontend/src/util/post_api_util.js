import axios from 'axios';

export const getPosts = () => {
  return axios.get('/api/posts')
};

export const getUserPosts = id => {
  return axios.get(`/api/posts/user/${id}`)
};

export const writePost = data => {
  debugger
  return axios.post('/api/posts/', data)
}

export const likePost = id => {
  // console.log(id)
  // console.log(axios.put(`/api/posts/${id}`))
  return axios.put(`/api/posts/${id}`)
}