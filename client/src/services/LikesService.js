import Client from '.'

export const GetLikes = async (id) => {
  try {
    const res = await Client.get(`/likes/${id}`)
    return res.data.likes
  } catch (error) {
    throw error
  }
}

export const UpdateLikes = async (id) => {}
