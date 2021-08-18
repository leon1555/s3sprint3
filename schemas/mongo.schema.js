const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = require('bluebird')

const MongoSchema = new Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    country: String,
    spirit_animal: String,
    fave_plant: String
})

const MongoModel = mongoose.model('NatureProfile', MongoSchema)

module.exports = MongoModel