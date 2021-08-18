// MongoDB 
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const passwordMongo = require('../password_variables/mongodb_atlas')
// const { MongoClient } = require('mongodb')
// const uri = `mongodb+srv://leon:${passwordMongo}@sprint3.05fm9.mongodb.net/sprint3?retryWrites=true&w=majority`

// Connection for locally hosted version of the database
// mongoose.connect('mongodb://127.0.0.1:27017/snacktime')

// Connection for database hosted on Atlas (cloud-based)
mongoose.connect(`mongodb+srv://leon:${passwordMongo}@sprint3.05fm9.mongodb.net/sprint3?retryWrites=true&w=majority`)

    .then(() => {
        console.log('success')
    }).catch(() => {
        console.log('error')
    })

