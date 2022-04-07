import Client from '.'

export const GetLikes = async (id) => {
  try {
    const res = await Client.get(`/likes/${id}`)
    return res.data.locationLikes
  } catch (error) {
    throw error
  }
}

export const UpdateLike = async (id, formValue) => {
  try {
    const res = await Client.put(`/likes/${id}`, formValue)
    return res.data.like
  } catch (error) {
    throw error
  }
}
