import axiosInstance from "@/shared/api/axiosInstance"

const USER_ENDPOINT = "/users"

export const userApi = {
  getUsers: async () => {
    const res = await axiosInstance.get(`${USER_ENDPOINT}`, { params: { limit: 0, select: "username,image" } })
    return res.data
  },

  getUserById: async (id: number) => {
    const res = await axiosInstance.get(`${USER_ENDPOINT}/${id}`)
    return res.data
  },
}
