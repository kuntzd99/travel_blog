const db = require('../db')
const { Likes } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const likes1 = await new Likes({
    likes: 0,
    location: '624e49780feccc2fe02c5301'
  })
  await likes1.save()

  const likes2 = await new Likes({
    likes: 0,
    location: '624e49780feccc2fe02c5302'
  })
  await likes2.save()

  const likes3 = await new Likes({
    likes: 0,
    location: '624e49780feccc2fe02c5303'
  })
  await likes3.save()

  const likes4 = await new Likes({
    likes: 0,
    location: '624e49780feccc2fe02c5304'
  })
  await likes4.save()
  console.log('Created likes!')
}

const run = async () => {
  await main()
  db.close()
}

run()
