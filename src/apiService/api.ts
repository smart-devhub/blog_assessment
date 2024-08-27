import axios from "axios";

export const getPosts=async ()=>{
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
}
export const getPostDetail=async (id:any)=>{
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

export const getPostComments=(id:any)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
}