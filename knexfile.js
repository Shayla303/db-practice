var env = require('dotenv'). coonfig()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/insertTest'
  }
},

production: {
  client:'pg',
  connection:process.env.DATABASE_URL
  }
}
