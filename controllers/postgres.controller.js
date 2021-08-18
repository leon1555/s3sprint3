const PostgresQuery = require('../queries/queriesPostgres')

const PostgresController = (req, res, next) => {
    return PostgresQuery(req.body.search)
    .then(result => {
        return res.json(result)
    }).catch(error => {
        return res.json(error)
    })
}

module.exports = PostgresController