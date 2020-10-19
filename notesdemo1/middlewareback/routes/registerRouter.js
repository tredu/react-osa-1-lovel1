var express = require('express');
var router = express.Router();

const config = require('../utils/config')
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);
const bcrypt = require('bcryptjs');

router.post('/', (req, res, next) => {
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

module.exports = router;