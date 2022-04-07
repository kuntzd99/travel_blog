const { GET_LIKES, PUT_LIKES } = require('../types')

const initialState = {
  likes: 0
}

const LikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIKES:
      return { ...state, likes: action.payload }
    case PUT_LIKES:
      return { ...state }
    default:
      return { ...state }
  }
}

export default LikesReducer
