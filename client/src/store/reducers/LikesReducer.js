const { GET_LIKES } = require('../types')

const initialState = {
  likes: 0
}

const LikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIKES:
      return { ...state, likes: action.payload }
    default:
      return { ...state }
  }
}

export default LikesReducer
