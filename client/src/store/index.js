import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import LocationReducer from './reducers/LocationReducer'
import thunk from 'redux-thunk'
import CommentReducer from './reducers/CommentReducer'
import LikesReducer from './reducers/LikesReducer'

const store = createStore(
  combineReducers({
    locationState: LocationReducer,
    commentState: CommentReducer,
    likesState: LikesReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
