const { Location } = require('../models/index')

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find()
    return res.status(200).json({ locations })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getLocationbyId = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id)
    return res.status(200).json({ location })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllLocations,
  getLocationbyId
}
