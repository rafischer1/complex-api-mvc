var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/costumes_tags')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)
router.get('/:costume_id', ctrl.getTagsForCostume)



module.exports = router;
