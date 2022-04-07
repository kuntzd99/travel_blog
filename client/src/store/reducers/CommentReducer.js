const {
  GET_COMMENTS,
  POST_COMMENT,
  NEW_COMMENT_BODY,
  NEW_USERNAME
} = require('../types')

const initialState = {
  comments: []
}

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload }
    case NEW_COMMENT_BODY:
      return { ...state, newCommentBody: action.payload }
    case NEW_USERNAME:
      return { ...state, newUsername: action.payload }
    case POST_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
    default:
      return { ...state }
  }
}

export default CommentReducer
