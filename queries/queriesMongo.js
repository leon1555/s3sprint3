const MongoQuery = require('../schemas/mongo.schema')

MongoQuery.getAll = () => {
    return MongoQuery.find({}).exec()
    .then(result => result)
    .catch(error => error)
}

module.exports = MongoQuery