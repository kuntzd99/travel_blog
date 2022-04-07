import { GetLikes, UpdateLike } from '../../services/LikesService'
import { GET_LIKES } from '../types'

export const LoadLikes = (id) => {
  return async (dispatch) => {
    try {
      const likes = await GetLikes(id)
      dispatch({
        type: GET_LIKES,
        payload: likes
      })
    } catch (error) {
      throw error
    }
  }
}

export const AddLike = (id, formValue) => {
  return async (dispatch) => {
    try {
      const like = await UpdateLike(id, formValue)
      dispatch({
        type: GET_LIKES,
        payload: like
      })
    } catch (error) {
      throw error
    }
  }
}
