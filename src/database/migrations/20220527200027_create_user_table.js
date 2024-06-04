exports.up = function (knex) {
  return knex.schema.createTable("user", function (t) {
    t.increments("id")
    t.string("sub")
    t.string("email")
    t.string("picture")
    t.string("name").notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user')
}
