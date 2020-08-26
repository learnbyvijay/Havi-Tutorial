const { model } = require('mongoose')

const User = model('User', {
  name: String,
  email: String,
  city:String,
  
})

module.exports = User
