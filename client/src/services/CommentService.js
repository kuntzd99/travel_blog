import Client from '.'

export const GetComments = async (id) => {
  try {
    const res = await Client.get(`/comments/${id}`)
    return res.data.locationComments
  } catch (error) {
    throw error
  }
}

export const CreateNewComment = async (formValue) => {
  try {
    const res = await Client.post('/comments', formValue)
    console.log(res.data, 'comment res')
    return res.data
  } catch (error) {
    throw error
  }
}
