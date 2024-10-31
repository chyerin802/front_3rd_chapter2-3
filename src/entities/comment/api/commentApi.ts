import axiosInstance from "@/shared/api/axiosInstance"
import { Comment } from "../model/types"

const COMMENTS_ENDPOINT = "/comments"

export const commentApi = {
  getCommentsByPostId: async (postId: number) => {
    const res = await axiosInstance.get(`${COMMENTS_ENDPOINT}/post/${postId}`)
    return res.data
  },

  createComment: async (comment: Comment) => {
    const res = await axiosInstance.post(`${COMMENTS_ENDPOINT}/add`, comment)
    return res.data
  },

  updateComment: async (id: number, comment: Partial<Comment>) => {
    const res = await axiosInstance.put(`${COMMENTS_ENDPOINT}/${id}`, comment)
    return res.data
  },

  updateCommentLikes: async (id: number, likes: number) => {
    const res = await axiosInstance.put(`${COMMENTS_ENDPOINT}/${id}`, { likes })
    return res.data
  },

  deleteComment: async (id: number) => {
    return await axiosInstance.delete(`${COMMENTS_ENDPOINT}/${id}`)
  },
}
