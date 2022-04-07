import { GetLocations, GetLocation } from '../../services/LocationService'
import { GET_LOCATIONS, GET_LOCATION } from '../types'

export const LoadLocations = () => {
  return async (dispatch) => {
    try {
      const locations = await GetLocations()
      dispatch({
        type: GET_LOCATIONS,
        payload: locations
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadLocation = (id) => {
  return async (dispatch) => {
    try {
      const location = await GetLocation(id)
      dispatch({
        type: GET_LOCATION,
        payload: location
      })
    } catch (error) {
      throw error
    }
  }
}
