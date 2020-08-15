const knex = require('../database')

module.exports = {
    async getUsers(req, res) {
        const results = await knex('users')
        return res.json(results)
    }
}
