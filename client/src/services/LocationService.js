import Client from '.'

export const GetLocations = async () => {
  try {
    const res = await Client.get('/locations')
    return res.data.locations
  } catch (error) {
    throw error
  }
}
