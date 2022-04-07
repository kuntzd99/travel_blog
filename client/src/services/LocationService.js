import Client from '.'

export const GetLocations = async () => {
  try {
    const res = await Client.get('/locations')
    return res.data.locations
  } catch (error) {
    throw error
  }
}

export const GetLocation = async (id) => {
  try {
    const res = await Client.get(`/locations/${id}`)
    return res.data.location
  } catch (error) {
    throw error
  }
}
