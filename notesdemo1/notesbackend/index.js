const config = require('./utils/config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json());


const options = config.DATABASE_OPTIONS

const knex = require('knex')(options);

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2020-01-10T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2020-01-10T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2020-01-10T19:20:14.298Z",
    important: true
  }

]

app.post('/notes', (req, res) => {
  const note = req.body;

  knex('notes').insert(note)
    .then(id_arr => {
      console.log(id_arr)
      note.id = id_arr[0]
      res.json(note)

    })
    .catch((err) => {
      console.log('SELECT * NOTES failed')
      res.status(500).json(
        { error: err }
      )
    });
})

app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  knex('notes').select('*').where('id', '=', id).del()
    .then(status => {
      console.log("deleted ok")
      res.status(204).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(
        { error: err }
      )
    })
})

app.post('/register', (req, res) => {
  const user = req.body;
  const saltRounds = 10;
  console.log(user);

  if (user.username === undefined || user.password === undefined || user.email === undefined) {
    res.status(400).json(
      { error: "check json-data" }
    )
  }

  bcrypt.hash(user.password, saltRounds)
    .then((passwordHash) => {
      const newUser = {
        username: user.username,
        password: passwordHash,
        email: user.email
      }

      knex('users').insert(newUser)
        .then(() => {
          console.log("register onnistui")
          res.status(204).end()
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(
            { error: err }
          )
        })
    })
}
)

app.post('/login', (req, res) => {
  const user = req.body;
  console.log(user);

  knex('users').select('*').where('username', '=', user.username)
    .then((dbuser) => {
      if (dbuser.length == 0) {
        res.status(401).json(
          { error: "invalid username or password" }
        )
      }
      const tempUser = dbuser[0];
      bcrypt.compare(user.password, tempUser.password)
        .then(passwordCorrect => {
          if (!passwordCorrect) {
            console.log(tempUser);
            console.log(passwordCorrect);
            res.status(401).json(
              { error: "invalid username or password" }
            )
          }

          const userForToken = {
            username: tempUser.username,
            id: tempUser.id,
          }

          const token = jwt.sign(userForToken, config.SECRET)

          console.log(token);

          res.status(200).send({
            username: tempUser.username,
            role: "regularuser",
            token: token
          })
        })
    .catch((err) => {
      console.log(err)
    })
})
  .catch((err) => {
    console.log(err);
    res.status(500).json(
      { error: err }
    )
  })
})

app.put('/notes/:id', (req, res) => {
  const id = req.params.id;
  const note = req.body;

  knex('notes').update(note, ['content', 'important', 'date']).where('id', '=', id)
    .then(status => {
      res.status(204).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(
        { error: err }
      )
    })
})

app.get('/notes', (req, res) => {
  const note = req.body
  knex.from('notes').select("*")
    .then((rows) => {

      console.log(rows);
      res.json(rows)

    })
    .catch((err) => {
      console.log('SELECT * NOTES failed')
      res.status(500).json(
        { error: err }
      )
    });
})



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
