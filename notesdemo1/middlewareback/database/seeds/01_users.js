const testPassword = "salasana"

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(testPassword, salt);

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {
            id: 1,
            username: "user1111111",
            password: hash,
            email: true,
          },
          {
            id: 2,
            username: "user2222222",
            password: hash,
            email: true,
          },
          {
            id: 3,
            username: "user33333333",
            password: hash,
            email: true,
          }
      
        ]);
      });
  };