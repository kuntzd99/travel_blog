const db = require('../db')
const { Location } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const location = await new Location({
    name: 'Hawaii',
    image: 'image'
  })
  await location.save()
  console.log('location 1 created')
}

const run = async () => {
  await main()
  db.close()
}

run()
