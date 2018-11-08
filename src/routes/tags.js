var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/tags')

router.get('/', ctrl.getAll)
router.get('/:costume_id', ctrl.getTagsById)
router.post('/', ctrl.create)



module.exports = router;
