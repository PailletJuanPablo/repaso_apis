var express = require('express');
var router = express.Router();
const models = require('../../db/models')

router.get('/', async (req, res) => {
    const movies = await models.Movie.findAll();
    return res.json(movies)
})
module.exports = router;
