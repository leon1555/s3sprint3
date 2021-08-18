// MongoDB 
// const mongoose = require('mongoose')
// mongoose.Promise = require('bluebird')
const passwordMongo = require('../password_variables/mongodb_atlas')
const { MongoClient } = require('mongodb')
const uri = `mongodb+srv://leon:${passwordMongo}@sprint3.05fm9.mongodb.net/sprint3?retryWrites=true&w=majority`

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('sprint3')
        const users = database.collection('MOCK_DATA')

        const query = {first_name: 'Jolene'}
        const person = await users.findOne(query)
        console.log(person);
    } finally {
        await client.close()
    }
}

run().catch(console.dir)
// Connection for locally hosted version of the database
// mongoose.connect('mongodb://127.0.0.1:27017/snacktime')

// Connection for database hosted on Atlas (cloud-based)
// mongoose.connect(`mongodb+srv://leon:${passwordMongo}@sprint3.05fm9.mongodb.net/sprint3?retryWrites=true&w=majority`)

    // .then(() => {
    //     console.log('success')
    // }).catch(() => {
    //     console.log('error')
    // })

