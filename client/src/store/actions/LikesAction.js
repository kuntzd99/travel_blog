import { GetLikes } from '../../services/LikesService'
import { GET_LIKES } from '../types'

export const LoadLikes = () => {
  return async (dispatch) => {
    try {
      const likes = await GetLikes()
      dispatch({
        type: GET_LIKES,
        payload: likes
      })
    } catch (error) {
      throw error
    }
  }
}
