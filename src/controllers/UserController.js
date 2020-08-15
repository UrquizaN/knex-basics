const knex = require('../database')

module.exports = {
    async getUsers(req, res) {
        const results = await knex('users')
        return res.json(results)
    },

    async createUser(req, res, next){
        try {
            const { username } = req.body
            await knex('users').insert({
                username
            }) 

           return res.status(201).send('User created successfully')

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

            await knex('users').where({ id }).del()

            return res.send('User deleted successfully!')

        } catch (error) {
            next(error)
        }
    }
}
