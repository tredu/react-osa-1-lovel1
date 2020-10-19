var express = require('express');
var router = express.Router();

const config = require('../utils/config')
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);

router.get('/', (req, res, next) => {
    const decodedTokenId = res.locals.auth.userId;

    knex('notes').select('*').where('user_id', '=', decodedTokenId)
        .then((rows) => {
            console.log(rows);
            res.json(rows);
        })
        .catch((err) => {
            console.log('SELECT * NOTES failed')
            res.status(500).json(
                { error: err }
            )
        })
})

router.post('/', (req, res, next) => {
    const note = req.body;
    console.log(note);


    note.user_id = res.locals.auth.userId

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

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(id);

    const decodedTokenId = res.locals.auth.userId;

    knex('notes').select('*').where('id', '=', decodedTokenId).del()
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

module.exports = router;