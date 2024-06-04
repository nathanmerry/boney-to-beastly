const knex = require('knex')(require('../../knexfile'))

const create = async ({ sub, name, email, picture, meta } = {}) => {
  const alreadyExits = await knex('user').where('email', '=', email)

  if (alreadyExits.length) {      
    return await knex('user')
      .where('email', email)
      .update({ sub, name, picture })
  }

  return await knex('user').insert({ sub, name, email, picture })
}

module.exports = {
  create
}