const { GET_LOCATIONS, GET_LOCATION } = require('../types')

const initialState = {
  locations: [],
  location: ''
}

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return { ...state, locations: action.payload }
    case GET_LOCATION:
      return { ...state, location: action.payload }
    default:
      return { ...state }
  }
}

export default LocationReducer
