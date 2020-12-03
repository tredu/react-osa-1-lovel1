
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', t =>{
    t.increments('id').primary()
    t.string('username').notNullable().unique()
    t.string('password').notNullable()
    t.string('email')
    t.timestamps(false, true)
})
  .createTable('notes', t =>{
      t.increments('id').primary()
      t.string('content')
      t.datetime('date')
      t.boolean('important')
      t.integer('user_id').unsigned().references('id').inTable('users').notNull().onDelete()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('notes')
  .dropTableIfExists('users')
};
