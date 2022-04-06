import { GetLocations } from '../../services/LocationService'
import { GET_LOCATIONS } from '../types'

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
