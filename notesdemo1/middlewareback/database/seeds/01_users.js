exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {
            id: 1,
            username: "HTML is easy",
            password: "2020-01-10T17:30:31.098Z",
            email: true,
          },
          {
            id: 2,
            username: "HTML is easy",
            password: "2020-01-10T17:30:31.098Z",
            email: true,
          },
          {
            id: 3,
            username: "HTML is easy",
            password: "2020-01-10T17:30:31.098Z",
            email: true,
          }
      
        ]);
      });
  };