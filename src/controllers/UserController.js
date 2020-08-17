const knex = require('../database')

module.exports = {
    async getUsers(req, res, next) {
        try {
            const results = await knex('users')
            .where('deleted_at', null)
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async createUser(req, res, next){
        try {
            const { username } = req.body
            await knex('users').insert({
                username
            }) 

           return res.status(201).send('User created')

        } catch (error) {
            next(error)
        }
    },

    async updateUser(req, res, next) {
        try {
            const { username } = req.body
            const { id } = req.params
            const updated_at = knex.fn.now()
            
            await knex('users').update({
                username,
                updated_at
            }).where({ id })

            return res.send('User updated!')

        } catch (error) {
            next(error)
        }
    },

    async deleteUser(req, res, next){
        try {
            const { id } = req.params 

            await knex('users').where({ id })
                .update('deleted_at', new Date())

            return res.send('User deleted successfully!')

        } catch (error) {
            next(error)
        }
    }
}
