const MongoQuery = require('../queries/queriesMongo.js')

const MongoController = (req, res, next) => {
    return MongoQuery.getAll()
    .then(result => {
        return res.json(result)
    }).catch(error => {
        return res.json(error)
    })
}

module.exports = MongoController