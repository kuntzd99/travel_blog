import { GetComments, CreateNewComment } from '../../services/CommentService'
import {
  GET_COMMENTS,
  POST_COMMENT,
  NEW_COMMENT_BODY,
  NEW_USERNAME
} from '../types'

export const LoadComments = (id) => {
  return async (dispatch) => {
    try {
      const comments = await GetComments(id)
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}

export const AddCommentBody = (comment) => ({
  type: NEW_COMMENT_BODY,
  payload: comment
})

export const AddUsername = (comment) => ({
  type: NEW_USERNAME,
  payload: comment
})

export const CreateComment = (formValue) => {
  return async (dispatch) => {
    try {
      const comment = await CreateNewComment(formValue)
      dispatch({
        type: POST_COMMENT,
        payload: comment
      })
    } catch (error) {
      throw error
    }
  }
}
