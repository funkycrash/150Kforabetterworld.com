const contentful = require('contentful-management')
const d3 = require('d3')
const fs = require('fs')

var raw = fs.readFileSync('smalldata.csv', 'utf8')
var dsv = d3.dsvFormat(';')
var db = dsv.parse(raw)

// get the token in Content Management Token on Contentful
const client = contentful.createClient({
  accessToken: '##########'
})

db.map((donor) => {
  client.getSpace('h4gckunk8e0b')
    .then((space) => space.getEnvironment('master'))
    .then((environment) => environment.createEntry('thankYou', {
      fields: {
        name: {
          'en-US': Object.values(donor)[0].split('.')[0] + ' ' + Object.values(donor)[0].split('.')[1].split('@')[0]
        },
        email: {
          'en-US': Object.values(donor)[0]
        }
      }
    }))
    .then((entry) => console.log(entry))
    .catch(console.error)
})
