const db = require('../db')
const { Location } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const locations = [
    {
      name: 'Minneapolis',
      image:
        'https://media.cntraveler.com/photos/60867c5011601c3fd89adaea/16:9/w_2560%2Cc_limit/989949876'
    },
    {
      name: 'Hawaii',
      image:
        'http://cdn.cnn.com/cnnnext/dam/assets/201230100452-10-2021-travel-destinations-hawaii.jpg'
    },
    {
      name: 'Paris',
      image:
        'https://lp-cms-production.imgix.net/2021-08/shutterstockRF_108818438.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850'
    },
    {
      name: 'Chicago',
      image:
        'https://media.cntraveler.com/photos/61e865ea62e14c3f706eea5c/16:9/w_2580,c_limit/Chicago_GettyImages-1180689542.jpg'
    }
  ]
  await Location.insertMany(locations)
  console.log('Created locations!')
}

const run = async () => {
  await main()
  db.close()
}

run()
