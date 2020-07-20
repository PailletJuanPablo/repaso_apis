var express = require('express');
var router = express.Router();
const genreController = require('../controllers/genre');

router.get('/', genreController.listAll)
router.get('/:id', genreController.findOne)
router.delete('/:id', genreController.destroyOne)


module.exports = router;
