import axiosInstance from "@/shared/api/axiosInstance"
import { Post } from "../model/types"

const POST_ENDPOINT = "/posts"

export const postApi = {
  fetchPosts: async (limit: number, skip: number) => {
    const res = await axiosInstance.get(`${POST_ENDPOINT}`, { params: { limit, skip } })
    return res.data
  },

  fetchPostsByTag: async (tag: string) => {
    const res = await axiosInstance.get(`${POST_ENDPOINT}/tag/${tag}`)
    return res.data
  },

  fetchPostTags: async () => {
    const res = await axiosInstance.get(`${POST_ENDPOINT}/tags`)
    return res.data
  },

  searchPosts: async (searchQuery: string) => {
    const res = await axiosInstance.get(`${POST_ENDPOINT}/search`, { params: { q: searchQuery } })
    return res.data
  },

  createPost: async (post: Post) => {
    const res = await axiosInstance.post(`${POST_ENDPOINT}/add`, { post })
    return res.data
  },

  updatePost: async (post: Post) => {
    const res = await axiosInstance.put(`${POST_ENDPOINT}/${post.id}`, post)
    return res.data
  },

  deletePost: async (id: number) => {
    return await axiosInstance.delete(`${POST_ENDPOINT}/${id}`)
  },
}
