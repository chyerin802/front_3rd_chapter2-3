import axiosInstance from "@/shared/api/axiosInstance"
import { Post } from "../model/types"

const POST_ENDPOINT = "/posts"

export const postApi = {
  getPosts: async (limit: number, skip: number) => {
    const res = await axiosInstance.get(`${POST_ENDPOINT}`, { params: { limit, skip } })
    return res.data
  },

  getPostsByTag: async (tag: string) => {
    const res = await axiosInstance.get(`${POST_ENDPOINT}/tag/${tag}`)
    return res.data
  },

  getPostTags: async () => {
    const res = await axiosInstance.get(`${POST_ENDPOINT}/tags`)
    return res.data
  },

  searchPosts: async (searchQuery: string) => {
    const res = await axiosInstance.get(`${POST_ENDPOINT}/search`, { params: { q: searchQuery } })
    return res.data
  },

  createPost: async (post: Omit<Post, "id">) => {
    const res = await axiosInstance.post(`${POST_ENDPOINT}/add`, post)
    return res.data
  },

  updatePost: async (id: number, post: Partial<Post>) => {
    const res = await axiosInstance.put(`${POST_ENDPOINT}/${id}`, post)
    return res.data
  },

  deletePost: async (id: number) => {
    return await axiosInstance.delete(`${POST_ENDPOINT}/${id}`)
  },
}
