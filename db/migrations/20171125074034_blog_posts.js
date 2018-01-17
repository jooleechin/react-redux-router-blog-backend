const { tableNames : { BLOG_POSTS } } =  require('../../constants')

exports.up = knex => {
  return knex.schema.createTable(BLOG_POSTS, table => {
    table.increments()
    table.string('title').notNullable()
    table.text('content').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable(ROLLER_COASTERS)
}
