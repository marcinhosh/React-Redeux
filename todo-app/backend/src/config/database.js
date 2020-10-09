const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://http://localhost:27017/todo-app')
